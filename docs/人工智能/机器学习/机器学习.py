
import numpy as np
import matplotlib.pyplot as plt

# 我们要求解的数
target_number = 17.0

# 初始化权重（我们的猜测值）
weight = 1
print(f"初始随机猜测值: {weight}")

# 超参数
learning_rate = 0.01  # 学习率
epochs = 1000        # 训练轮数

# 存储训练过程
weights_history = []
loss_history = []

# 训练过程
for epoch in range(epochs):
    # 前向传播: 计算预测值 (weight * weight 应该等于 target_number)
    prediction = weight * weight
    
    # 计算损失: 均方误差 (MSE)
    loss = (prediction - target_number) ** 2

    # 反向传播: 计算梯度
    gradient = 2 * (prediction - target_number) * 2 * weight
    
    # 更新权重 (梯度下降)
    weight = weight - learning_rate * gradient
    
    # 记录历史
    weights_history.append(weight)
    loss_history.append(loss)
    
    # 每隔100轮打印一次结果
    if epoch % 100 == 0 or epoch == epochs - 1:
        print(f"轮次 {epoch}, 当前估计值: {weight}, 预测值的平方: {prediction}, 损失: {loss}")

# 最终结果
print(f"\n训练后的平方根估计值: {weight}")
print(f"误差: {target_number - prediction}")