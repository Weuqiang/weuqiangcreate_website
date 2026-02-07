---
title: Python
sidebar_position: 1
---

# Python 编程语言

## 简介

Python是一种高级、解释型、通用型编程语言，以其简洁、易读的语法和强大的生态系统而闻名。它支持多种编程范式，包括面向对象、命令式、函数式和过程式编程。Python被广泛应用于Web开发、数据分析、人工智能、科学计算、自动化脚本等领域。

## 主要特性

- **简洁易读的语法**：使用缩进而非括号来定义代码块
- **动态类型**：变量类型在运行时确定
- **自动内存管理**：内置垃圾回收机制
- **丰富的标准库**："电池已包含"的理念
- **强大的第三方库生态系统**：NumPy, Pandas, Django, Flask等
- **跨平台**：可在Windows, macOS, Linux等多种操作系统上运行

## 应用领域

- **Web开发**：Django, Flask, FastAPI
- **数据分析与可视化**：Pandas, Matplotlib, Seaborn
- **机器学习与人工智能**：TensorFlow, PyTorch, scikit-learn
- **科学计算**：NumPy, SciPy
- **自动化与脚本**：系统管理、自动化测试
- **游戏开发**：Pygame
- **桌面应用**：Tkinter, PyQt, wxPython

## 学习路径

1. **基础语法**：变量、数据类型、运算符、控制流
2. **数据结构**：列表、元组、字典、集合
3. **函数与模块**：函数定义、参数、返回值、模块导入
4. **面向对象编程**：类、对象、继承、多态
5. **文件操作**：读写文件、处理不同格式
6. **异常处理**：try-except语句
7. **标准库**：os, sys, datetime, collections等
8. **第三方库**：根据应用领域选择相关库

## 版本差异

Python有两个主要版本：Python 2和Python 3。Python 2已于2020年1月1日停止支持，建议使用Python 3。

主要差异：
- 打印语句：Python 2使用`print "Hello"`, Python 3使用`print("Hello")`
- 整数除法：Python 2中`3/2=1`, Python 3中`3/2=1.5`
- 字符串处理：Python 3默认使用Unicode

## 基础语法

### 变量和数据类型

```python
# 变量赋值
name = "Python"
age = 30
height = 1.75
is_student = True

# 多重赋值
a, b, c = 1, 2, 3
x = y = z = 0

# 类型检查
print(type(name))    # <class 'str'>
print(isinstance(age, int))  # True

# 类型转换
num_str = "123"
num_int = int(num_str)
num_float = float(num_str)
```

### 字符串操作

```python
# 字符串定义
single_quote = 'Hello'
double_quote = "World"
multi_line = """这是一个
多行字符串"""

# 字符串格式化
name = "Alice"
age = 25

# f-string (推荐)
message = f"我是{name}，今年{age}岁"

# format方法
message = "我是{}，今年{}岁".format(name, age)
message = "我是{name}，今年{age}岁".format(name=name, age=age)

# % 格式化
message = "我是%s，今年%d岁" % (name, age)

# 字符串方法
text = "  Hello World  "
print(text.strip())        # "Hello World"
print(text.upper())        # "  HELLO WORLD  "
print(text.lower())        # "  hello world  "
print(text.replace("World", "Python"))  # "  Hello Python  "
print(text.split())        # ['Hello', 'World']
print("Hello" in text)     # True
```

### 控制流

```python
# 条件语句
age = 18
if age >= 18:
    print("成年人")
elif age >= 13:
    print("青少年")
else:
    print("儿童")

# 三元运算符
status = "成年人" if age >= 18 else "未成年人"

# for循环
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

for char in "Python":
    print(char)

# while循环
count = 0
while count < 5:
    print(count)
    count += 1

# 循环控制
for i in range(10):
    if i == 3:
        continue  # 跳过当前迭代
    if i == 7:
        break     # 跳出循环
    print(i)
```

## 数据结构

### 列表 (List)

```python
# 创建列表
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

# 列表操作
fruits.append("grape")        # 添加元素
fruits.insert(1, "kiwi")      # 在指定位置插入
fruits.remove("banana")       # 删除指定元素
popped = fruits.pop()         # 删除并返回最后一个元素

# 列表索引和切片
print(fruits[0])              # 第一个元素
print(fruits[-1])             # 最后一个元素
print(fruits[1:3])            # 切片
print(fruits[:2])             # 前两个元素
print(fruits[2:])             # 从第三个元素开始

# 列表推导式
squares = [x**2 for x in range(10)]
even_squares = [x**2 for x in range(10) if x % 2 == 0]
```

### 元组 (Tuple)

```python
# 创建元组
point = (3, 4)
colors = ("red", "green", "blue")
single_item = (42,)  # 单元素元组需要逗号

# 元组解包
x, y = point
first, *rest, last = colors

# 命名元组
from collections import namedtuple
Person = namedtuple('Person', ['name', 'age', 'city'])
person = Person('Alice', 30, 'Beijing')
print(person.name)  # Alice
```

### 字典 (Dictionary)

```python
# 创建字典
student = {
    "name": "Alice",
    "age": 20,
    "major": "Computer Science"
}

# 字典操作
student["grade"] = "A"        # 添加键值对
student["age"] = 21           # 修改值
del student["major"]          # 删除键值对

# 字典方法
print(student.keys())         # 获取所有键
print(student.values())       # 获取所有值
print(student.items())        # 获取所有键值对
print(student.get("name", "Unknown"))  # 安全获取值

# 字典推导式
squares_dict = {x: x**2 for x in range(5)}
```

### 集合 (Set)

```python
# 创建集合
fruits = {"apple", "banana", "orange"}
numbers = set([1, 2, 3, 2, 1])  # {1, 2, 3}

# 集合操作
fruits.add("grape")
fruits.remove("banana")
fruits.discard("kiwi")  # 不存在也不会报错

# 集合运算
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
print(set1 & set2)      # 交集 {3, 4}
print(set1 | set2)      # 并集 {1, 2, 3, 4, 5, 6}
print(set1 - set2)      # 差集 {1, 2}
print(set1 ^ set2)      # 对称差集 {1, 2, 5, 6}
```

## 函数

### 函数定义和调用

```python
# 基本函数
def greet(name):
    return f"Hello, {name}!"

# 带默认参数的函数
def greet_with_title(name, title="Mr."):
    return f"Hello, {title} {name}!"

# 可变参数
def sum_all(*args):
    return sum(args)

# 关键字参数
def create_profile(**kwargs):
    return kwargs

# 混合参数
def complex_function(required, default="value", *args, **kwargs):
    print(f"Required: {required}")
    print(f"Default: {default}")
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")

# 函数调用
print(greet("Alice"))
print(greet_with_title("Bob", "Dr."))
print(sum_all(1, 2, 3, 4, 5))
profile = create_profile(name="Alice", age=30, city="Beijing")
```

### Lambda函数

```python
# Lambda函数
square = lambda x: x**2
add = lambda x, y: x + y

# 在高阶函数中使用
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))

# 排序
students = [("Alice", 85), ("Bob", 90), ("Charlie", 78)]
students.sort(key=lambda x: x[1])  # 按成绩排序
```

### 装饰器

```python
# 简单装饰器
def timer(func):
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(1)
    return "Done"

# 带参数的装饰器
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def say_hello():
    print("Hello!")
```

## 面向对象编程

### 类和对象

```python
class Person:
    # 类变量
    species = "Homo sapiens"
    
    def __init__(self, name, age):
        # 实例变量
        self.name = name
        self.age = age
    
    # 实例方法
    def introduce(self):
        return f"我是{self.name}，今年{self.age}岁"
    
    def have_birthday(self):
        self.age += 1
        return f"{self.name}现在{self.age}岁了"
    
    # 类方法
    @classmethod
    def from_string(cls, person_str):
        name, age = person_str.split('-')
        return cls(name, int(age))
    
    # 静态方法
    @staticmethod
    def is_adult(age):
        return age >= 18
    
    # 特殊方法
    def __str__(self):
        return f"Person(name='{self.name}', age={self.age})"
    
    def __repr__(self):
        return f"Person('{self.name}', {self.age})"

# 使用类
person1 = Person("Alice", 25)
person2 = Person.from_string("Bob-30")

print(person1.introduce())
print(Person.is_adult(person1.age))
```

### 继承

```python
class Student(Person):
    def __init__(self, name, age, student_id, major):
        super().__init__(name, age)  # 调用父类构造函数
        self.student_id = student_id
        self.major = major
        self.grades = []
    
    def add_grade(self, grade):
        self.grades.append(grade)
    
    def get_average_grade(self):
        if not self.grades:
            return 0
        return sum(self.grades) / len(self.grades)
    
    # 方法重写
    def introduce(self):
        base_intro = super().introduce()
        return f"{base_intro}，我是{self.major}专业的学生"

class Teacher(Person):
    def __init__(self, name, age, subject, salary):
        super().__init__(name, age)
        self.subject = subject
        self.salary = salary
    
    def teach(self, topic):
        return f"{self.name}正在教授{self.subject}：{topic}"

# 多态示例
def introduce_person(person):
    print(person.introduce())

student = Student("Charlie", 20, "S001", "计算机科学")
teacher = Teacher("Dr. Smith", 45, "数学", 80000)

introduce_person(student)  # 调用Student的introduce方法
introduce_person(teacher)  # 调用Person的introduce方法
```

### 属性和描述符

```python
class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def radius(self):
        return self._radius
    
    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("半径不能为负数")
        self._radius = value
    
    @property
    def area(self):
        return 3.14159 * self._radius ** 2
    
    @property
    def circumference(self):
        return 2 * 3.14159 * self._radius

# 使用属性
circle = Circle(5)
print(f"半径: {circle.radius}")
print(f"面积: {circle.area}")
print(f"周长: {circle.circumference}")

circle.radius = 10  # 使用setter
print(f"新面积: {circle.area}")
```

## 异常处理

```python
# 基本异常处理
try:
    result = 10 / 0
except ZeroDivisionError:
    print("不能除以零")
except Exception as e:
    print(f"发生错误: {e}")
else:
    print("没有异常发生")
finally:
    print("无论如何都会执行")

# 抛出异常
def validate_age(age):
    if age < 0:
        raise ValueError("年龄不能为负数")
    if age > 150:
        raise ValueError("年龄不能超过150")
    return True

# 自定义异常
class CustomError(Exception):
    def __init__(self, message, error_code=None):
        super().__init__(message)
        self.error_code = error_code

try:
    raise CustomError("这是自定义错误", 404)
except CustomError as e:
    print(f"错误信息: {e}")
    print(f"错误代码: {e.error_code}")
```

## 文件操作

```python
# 读取文件
with open('file.txt', 'r', encoding='utf-8') as f:
    content = f.read()  # 读取全部内容
    # 或者
    lines = f.readlines()  # 读取所有行
    # 或者
    for line in f:
        print(line.strip())

# 写入文件
with open('output.txt', 'w', encoding='utf-8') as f:
    f.write("Hello, World!\n")
    f.writelines(["Line 1\n", "Line 2\n"])

# 追加文件
with open('output.txt', 'a', encoding='utf-8') as f:
    f.write("追加的内容\n")

# 处理JSON文件
import json

# 写入JSON
data = {"name": "Alice", "age": 30}
with open('data.json', 'w') as f:
    json.dump(data, f, indent=2)

# 读取JSON
with open('data.json', 'r') as f:
    loaded_data = json.load(f)

# 处理CSV文件
import csv

# 写入CSV
with open('data.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['Name', 'Age', 'City'])
    writer.writerow(['Alice', 30, 'Beijing'])
    writer.writerow(['Bob', 25, 'Shanghai'])

# 读取CSV
with open('data.csv', 'r') as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)
```

## 模块和包

### 导入模块

```python
# 导入整个模块
import math
print(math.pi)
print(math.sqrt(16))

# 导入特定函数
from math import pi, sqrt
print(pi)
print(sqrt(16))

# 导入并重命名
import numpy as np
from datetime import datetime as dt

# 导入所有（不推荐）
from math import *

# 条件导入
try:
    import pandas as pd
except ImportError:
    print("Pandas未安装")
```

### 创建模块

```python
# mymodule.py
def greet(name):
    return f"Hello, {name}!"

def add(a, b):
    return a + b

PI = 3.14159

if __name__ == "__main__":
    # 只有直接运行此文件时才执行
    print("模块被直接运行")
    print(greet("World"))
```

```python
# 使用自定义模块
import mymodule

print(mymodule.greet("Alice"))
print(mymodule.add(3, 4))
print(mymodule.PI)
```

## 常用内置函数

```python
# 数学函数
print(abs(-5))          # 绝对值
print(round(3.14159, 2)) # 四舍五入
print(pow(2, 3))        # 幂运算
print(divmod(17, 5))    # 除法和取余

# 序列函数
numbers = [1, 2, 3, 4, 5]
print(len(numbers))     # 长度
print(max(numbers))     # 最大值
print(min(numbers))     # 最小值
print(sum(numbers))     # 求和
print(sorted(numbers, reverse=True))  # 排序

# 类型转换
print(int("123"))       # 字符串转整数
print(float("3.14"))    # 字符串转浮点数
print(str(123))         # 数字转字符串
print(list("hello"))    # 字符串转列表
print(tuple([1, 2, 3])) # 列表转元组

# 高阶函数
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
even = list(filter(lambda x: x % 2 == 0, numbers))

# 枚举和压缩
for i, value in enumerate(['a', 'b', 'c']):
    print(f"{i}: {value}")

for x, y in zip([1, 2, 3], ['a', 'b', 'c']):
    print(f"{x}: {y}")
```

## 常用标准库

### datetime - 日期时间

```python
from datetime import datetime, date, time, timedelta

# 当前时间
now = datetime.now()
today = date.today()

# 创建特定日期时间
specific_date = datetime(2024, 1, 1, 12, 30, 45)

# 格式化
formatted = now.strftime("%Y-%m-%d %H:%M:%S")
parsed = datetime.strptime("2024-01-01", "%Y-%m-%d")

# 时间运算
tomorrow = today + timedelta(days=1)
last_week = now - timedelta(weeks=1)
```

### os - 操作系统接口

```python
import os

# 文件和目录操作
print(os.getcwd())              # 当前工作目录
os.chdir('/path/to/directory')  # 改变目录
os.mkdir('new_directory')       # 创建目录
os.makedirs('path/to/dir', exist_ok=True)  # 递归创建目录

# 路径操作
path = os.path.join('folder', 'subfolder', 'file.txt')
print(os.path.exists(path))     # 检查路径是否存在
print(os.path.isfile(path))     # 检查是否为文件
print(os.path.isdir(path))      # 检查是否为目录

# 环境变量
print(os.environ.get('PATH'))   # 获取环境变量
os.environ['MY_VAR'] = 'value'  # 设置环境变量
```

### collections - 特殊容器

```python
from collections import Counter, defaultdict, deque, namedtuple

# Counter - 计数器
text = "hello world"
counter = Counter(text)
print(counter)  # Counter({'l': 3, 'o': 2, 'h': 1, 'e': 1, ' ': 1, 'w': 1, 'r': 1, 'd': 1})

# defaultdict - 默认字典
dd = defaultdict(list)
dd['key1'].append('value1')
print(dd)  # defaultdict(<class 'list'>, {'key1': ['value1']})

# deque - 双端队列
dq = deque([1, 2, 3])
dq.appendleft(0)  # 左侧添加
dq.append(4)      # 右侧添加
print(dq)  # deque([0, 1, 2, 3, 4])

# namedtuple - 命名元组
Point = namedtuple('Point', ['x', 'y'])
p = Point(1, 2)
print(p.x, p.y)  # 1 2
```

### itertools - 迭代工具

```python
import itertools

# 无限迭代器
for i in itertools.count(10, 2):  # 从10开始，步长为2
    if i > 20:
        break
    print(i)  # 10, 12, 14, 16, 18, 20

# 组合和排列
print(list(itertools.combinations([1, 2, 3, 4], 2)))  # 组合
print(list(itertools.permutations([1, 2, 3], 2)))     # 排列

# 分组
data = [1, 1, 2, 2, 2, 3, 3]
for key, group in itertools.groupby(data):
    print(key, list(group))
```

## 相关资源

- [Python官方文档](https://docs.python.org/zh-cn/3/)
- [Python教程 - 廖雪峰](https://www.liaoxuefeng.com/wiki/1016959663602400)
- [Real Python](https://realpython.com/)
- [Python Package Index (PyPI)](https://pypi.org/)
- [Python代码风格指南 (PEP 8)](https://pep8.org/)
- [Python增强提案 (PEPs)](https://www.python.org/dev/peps/)