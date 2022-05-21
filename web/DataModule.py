from ctypes import *
import math
import sys
# sys.path.append('../../BXData')

plan_labels = ["充裕未来", "裕满人生", "智昇保险", "爱无忧", "简爱延续"]
# 充裕未来计划 裕满人生保障计划 智昇保险计划 爱无忧长享计划 简爱延续保障计划
medical_labels = ["癌症全方位保障计划", "健康之宝医疗保障计划", "至尊医疗计划", "不购买医疗保障计划"]
line_labels = ["现金收益", "身故赔偿", "总收益"]
# 五种计划的购买年限
year_labels = [[5, 10, 0, 0, 0], [1, 5, 10, 18, 25], [5, 10, 0, 0, 0], [6, 10, 15, 20, 0], [1, 5, 10, 0, 0]]


class OneRes(Structure):
    _fields_ = [
        ("x", c_double * 25),
        ("be", c_int),
        ("be_val", c_double),
        ("y", c_int * 25),
        ("payout", c_double * 200),
        ("tot_r", c_double * 100)
    ]


class Plan(Structure):
    _fields_ = [
        ("x", c_double * 250),
        ("be", c_int * 10),
        ("be_val", c_double * 10),
        ("payout", c_double * 2000),
        ("tot_r", c_double * 100)
    ]


class MultiRes(Structure):
    _fields_ = [
        ("num", c_int),
        ("front", c_double * 400),
        ("p", Plan * 200)
    ]


class OneData:  # 将现有财富和年龄参数传入run，返回json字符串
    def __init__(self):
        try:
            self.dll = cdll.LoadLibrary("One.dll")
        except FileNotFoundError:
            self.dll = cdll.LoadLibrary("./One.dll")
        self.dll.run_data.restype = POINTER(OneRes)

    def run(self, money, age, username):
        data = {
            "invest": True,
            "username": username,
            "age": age,
            "medical_plan": {
                "name": "",
                "value": 0.0
            },
            "plan_data": [],
            "line_data": {"data": []}
        }

        res = self.dll.run_data(money, age)
        data["medical_plan"]["name"] = medical_labels[res.contents.be]
        data["medical_plan"]["value"] = res.contents.be_val
        for i in range(0, 5):
            temp = {"name": plan_labels[i],
                    "children": []}
            for j in range(0, 5):
                temp2 = {"name": res.contents.y[i * 5 + j],
                         "value": res.contents.x[i * 5 + j]}
                temp["children"].append(temp2)
            data["plan_data"].append(temp)

        for i in range(0, 3):
            temp = {"name": line_labels[i], "values": []}
            for j in range(0, 100 - age):
                if i < 2:
                    temp["values"].append(res.contents.payout[2 * j + i])
                else:
                    temp["values"].append(res.contents.tot_r[j])
            data["line_data"]["data"].append(temp)
        return data


def deal_one_plan(people_num, year, plan, age_list, name_list):
    multi_data = []
    for num in range(0, people_num):
        data = {
            "invest": True,
            "username": name_list[num],
            "age": age_list[num],
            "medical_plan": {
                "name": "",
                "value": 0.0
            },
            "plan_data": [],
            "line_data": {"data": []}
        }
        data["medical_plan"]["name"] = medical_labels[plan.be[num]]
        data["medical_plan"]["value"] = plan.be_val[num]
        total_val = 0
        for i in range(0, 5):
            temp = {"name": plan_labels[i],
                    "children": []}
            for j in range(0, 5):
                if math.isnan(plan.x[num * 25 + i * 5 + j]):
                    plan.x[num * 25 + i * 5 + j] = 0.0
                total_val += plan.x[num * 25 + i * 5 + j]
                temp2 = {"name": year_labels[i][j],
                         "value": plan.x[num * 25 + i * 5 + j]}
                temp["children"].append(temp2)
            data["plan_data"].append(temp)

        for i in range(0, 3):
            temp = {"name": line_labels[i], "values": []}
            for j in range(0, year):
                if i < 2:
                    temp["values"].append(plan.payout[num * 200 + 2 * j + i])
                else:
                    temp["values"].append(plan.tot_r[j])
            data["line_data"]["data"].append(temp)
        if total_val <= 1e-4:
            data["invest"] = False
        multi_data.append(data)
    return multi_data


class MultiData:
    def __init__(self):
        try:
            self.dll = cdll.LoadLibrary("Multi.dll")
        except FileNotFoundError:
            self.dll = cdll.LoadLibrary("./Multi.dll")
        self.dll.run_data.restype = POINTER(MultiRes)

    def run_data(self, money, people_num, age_list, year, name_list):
        int_array = (c_int * people_num)(*age_list)
        res = self.dll.run_data(money, people_num, int_array, year)
        data = {
            "years": year,
            "pf_data": "",
            "multi_plans": []
        }
        front = {
            "label1": "收益",
            "label2": "风险",
            "value": []
        }
        num = res.contents.num
        # print(num)
        # print(res.contents.front[:])
        for i in range(0, num):
            if math.isnan(res.contents.front[2 * i]):
                res.contents.front[2 * i] = 0.0
            if math.isnan(res.contents.front[2 * i + 1]):
                res.contents.front[2 * i + 1] = 0.0
            # assert not math.isnan(res.contents.front[2 * i])
            # assert not math.isnan(res.contents.front[2 * i + 1])
            temp_front = [res.contents.front[2 * i], res.contents.front[2 * i + 1]]
            front["value"].append(temp_front)
            data["multi_plans"].append(deal_one_plan(people_num, year, res.contents.p[i], age_list, name_list))
            assert len(data["multi_plans"][-1]) == people_num
        assert len(data["multi_plans"]) == num
        data["pf_data"] = front
        return data


if __name__ == '__main__':
    one = OneData()
    one.run(12312, 50, "Qiu")
    multi = MultiData()
    num = 2
    multi.run_data(1000, num, [10 + i for i in range(0, num)], 30, [str(i) for i in range(0, num)])
