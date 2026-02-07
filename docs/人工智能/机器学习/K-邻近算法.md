# K-邻近算法

## K-邻近算法

这个算法既可以解决分类问题，也可以用于回归问题，但工业上用于分类的情况更多。

KNN 先记录所有已知数据，再利用一个距离函数，

找出已知数据中距离未知事件最近的 K 组数据，

最后按照这 K 组数据里最常见的类别预测该事件。

```python
from sklearn.neighbors import KNeighborsClassifier
import numpy as np

# 创建一些示例数据
X = np.array([[1, 2], [2, 3], [2, 5], [3, 2], [3, 3], [4, 5]])  # 特征
y = np.array([0, 0, 1, 0, 1, 1])  # 目标标签

# 创建K-最近邻分类器
k = 3  # 选择K的值
model = KNeighborsClassifier(n_neighbors=k).fit(X, y)

# 预测新数据点
new_data_point = np.array([[3, 4]])  # 要预测的新数据点

# .predicts()方法返回一个数组，数组中包含了预测的类别
predicted_class = model.predict(new_data_point)

print("预测类别:", predicted_class)
```

![image-20250410171652283](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20250410171652283.png)

### 简单实战

```python
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split

# 导入鸢尾花数据库
from sklearn.datasets import load_iris

# 加载数据集，数据集包含数据的特征、标签、类别等许多信息
iris = load_iris()
# 获取数据特征（即花的高度、宽度等）
iris_X = iris.data
# 获取数据标签（即花的品种，用0、1、2代替）
iris_y = iris.target
print(len(iris_X)) # 查看数据集的大小

# # 获取前2条数据,从0开始到2结束,不包括2。写法1
# print(iris_X[0:2])

# # 获取前2条数据,从0开始到2结束,不包括2。写法2，省略0
# print(iris_X[:2])

# # 获取前2条数据,从0开始到2结束,不包括2。写法3，省略0
# print(iris_X[:2,:])

# # 获取前2条数据,从0开始到2结束,不包括2。写法4，省略0,只取第一列
# print(iris_X[:2,0])

# # 查看花的类别
# print(iris_y)
# # 查看花的数据
# print(iris_X)
# # 合在一起查看
# print(list(zip(iris_X,iris_y)))

# 把数据打乱，并分成测试数据和训练数据，test_size是测试数据的比例，0.3表示为30%
X_train, X_test, y_train, y_test = train_test_split(iris_X, iris_y, test_size=0.3)

'''
train_test_split详解

此方法会将数据和标签均分成两部分并打乱，一部分用于训练，一部分用于测试。

所以返回的数据有4个，我们用1、2、3、4给他们做上记号.

数据X [------70%---(1)-- | -30%(2)-]
标签y [------70%---(3)-- | -30%(4)-]

与上图对应，依次是:

训练的数据X(1),  测试的数据X(2),
     ↑↓              ↑↓
训练的标签y(3),  测试的标签y(4)

用(1)、(3)喂出一个模型

让模型预测(2)，获得预测结果

将预测结果与(4)进行比较来测试模型的准确率
'''

# 查看训练数据，已经被随机打乱了
# print(y_train)
# 实例化KNN分类器
knn = KNeighborsClassifier()
# .fit()方法用于训练模型，即让模型从数据中学习
knn.fit(X_train, y_train)
# .predicts()方法返回一个数组，数组中包含了预测的类别
print(knn.predict(X_test))
# 查看真实数据
print(y_test)
```

![image-20250410171730032](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20250410171730032.png)

### 效果评估

```python
right = 0
error = 0
for i in zip(knn.predict(X_test),y_test):
    #print(i)
    if i[0] == i[1]:
        right +=1
    else:
        error +=1
print(right,error)
print('正确率：{}%'.format(right/(right+error)*100))
```

![image-20250410171759597](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20250410171759597.png)

### 效果评估的改进

```python
print('正确率：{}%'.format(knn.score(X_test,y_test)*100))

# 正确率：100.0%
```



### 实时分类器

#### 描述

KNN 算法先记录所有已知数据，再利用一个距离函数，找出已知数据中距离未知事件最近的 K 组数据，最后按照这 K 组数据里最常见的类别预测该事件。可以解决分类问题。

请编写一段程序读取用户的摄像头，让用户通过按键或点击的方式实时训练并查看当前摄像头的预测结果。

#### 题解

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.metrics import pairwise_distances_argmin
from sklearn.datasets import load_sample_image
from sklearn.utils import shuffle
from time import time

n_colors = 64

# Load the Summer Palace photo
china = load_sample_image("china.jpg")

# Convert to floats instead of the default 8 bits integer coding. Dividing by
# 255 is important so that plt.imshow behaves works well on float data (need to
# be in the range [0-1])
china = np.array(china, dtype=np.float64) / 255

# Load Image and transform to a 2D numpy array.
w, h, d = original_shape = tuple(china.shape)
assert d == 3
image_array = np.reshape(china, (w * h, d))

print("Fitting model on a small sub-sample of the data")
t0 = time()
image_array_sample = shuffle(image_array, random_state=0)[:1000]
kmeans = KMeans(n_clusters=n_colors, random_state=0).fit(image_array_sample)
print("done in %0.3fs." % (time() - t0))

# Get labels for all points
print("Predicting color indices on the full image (k-means)")
t0 = time()
labels = kmeans.predict(image_array)
print("done in %0.3fs." % (time() - t0))


codebook_random = shuffle(image_array, random_state=0)[:n_colors]
print("Predicting color indices on the full image (random)")
t0 = time()
labels_random = pairwise_distances_argmin(codebook_random,
                                          image_array,
                                          axis=0)
print("done in %0.3fs." % (time() - t0))


def recreate_image(codebook, labels, w, h):
    """Recreate the (compressed) image from the code book & labels"""
    d = codebook.shape[1]
    image = np.zeros((w, h, d))
    label_idx = 0
    for i in range(w):
        for j in range(h):
            image[i][j] = codebook[labels[label_idx]]
            label_idx += 1
    return image

# Display all results, alongside original image
plt.figure(1)
plt.clf()
plt.axis('off')
plt.title('Original image (96,615 colors)')
plt.imshow(china)

plt.figure(2)
plt.clf()
plt.axis('off')
plt.title('Quantized image (64 colors, K-Means)')
plt.imshow(recreate_image(kmeans.cluster_centers_, labels, w, h))

plt.figure(3)
plt.clf()
plt.axis('off')
plt.title('Quantized image (64 colors, Random)')
plt.imshow(recreate_image(codebook_random, labels_random, w, h))

```

![image-20250410172003205](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20250410172003205.png)



# K均值算法

## K 均值算法

这是一种解决聚类问题的非监督式学习算法。这个方法简单地利用了一定数量的集群（假设 K 个集群）对给定数据进行分类。同一集群内的数据点是同类的，不同集群的数据点不同类。

还记得你是怎样从墨水渍中辨认形状的么？K 均值算法的过程类似，你也要通过观察集群形状和分布来判断集群数量 K 均值算法如何划分集群：

1. 从每个集群中选取 K 个数据点作为质心（centroids）。
2. 将每一个数据点与距离自己最近的质心划分在同一集群，即生成 K 个新集群。
3. 找出新集群的质心，这样就有了新的质心。
4. 重复 2 和 3，直到结果收敛，即不再有新的质心出现。

怎样确定 K 的值：

如果我们在每个集群中计算集群中所有点到质心的距离平方和，再将不同集群的距离平方和相加，我们就得到了这个集群方案的总平方和。

我们知道，随着集群数量的增加，总平方和会减少。但是如果用总平方和对 K 作图，你会发现在某个 K 值之前总平方和急速减少，但在这个 K 值之后减少的幅度大大降低，这个值就是最佳的集群数。

距离计算公式：

一维坐标系中,设 A(x1),B(x2),则 A,B 之间的距离为

∣*A**B*∣=√[(*x*1−*x*2)2]

二维坐标系中,设 A(x1,y1),B(x2,y2),则 A,B 之间的距离为

∣*A**B*∣=√[(*x*1−*x*2)2+(*y*1−*y*2)2]

三维坐标系中,设 A(x1,y1,z1),B(x2,y2,z2),则 A,B 之间的距离为

∣*A**B*∣=√[(*x*1−*x*2)2+(*y*1−*y*2)2+(*z*1−*z*2)2]

以此类推

```python
from sklearn.cluster import KMeans
import numpy as np

# 创建一些示例数据
X = np.array([[1, 2], [2, 3], [2, 5], [3, 2], [3, 3], [4, 5]])

# 创建K均值模型
k = 2  # 指定要分为的簇的数量
model = KMeans(n_clusters=k)

# 拟合模型
# .fit()方法用于训练模型，即让模型从数据中学习
model.fit(X)

# 获取簇中心点
cluster_centers = model.cluster_centers_

# 预测每个样本所属的簇
labels = model.labels_

print("簇中心点:", cluster_centers)
print("样本所属簇:", labels)
```



### 简单示例

```python
# 导入必要的库
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.datasets import load_iris
# 加载数据
iris = load_iris()
iris_X = iris.data
iris_y = iris.target

# 创建K均值模型
kmeans = KMeans(n_clusters=3)
# 拟合模型，注意看这是无监督学习，这里只填写了数据集，没有给标签。
kmeans.fit(iris_X)

# 获取簇中心和簇标签
centers = kmeans.cluster_centers_
labels = kmeans.labels_
print(iris_y)
print(labels)

# 我们发现他把0、1、2分类成了1、0、2，这是因为K均值算法是无监督学习，他不知道我们的标签是什么，所以他自己给我们分了一套标签。
```



### 效果评估

```python
# 使用列表推导式将0、1、2转换成1、0、2
exchange={0:1,1:0,2:2}
exchange_labels = [exchange[i] if i in exchange else i for i in labels]

right = 0
error = 0
for i in zip(exchange_labels,iris_y):
    if i[0] == i[1]:
        right +=1
    else:
        error +=1

print('正确率：{}%'.format(right/(right+error)*100))
```



### 二维可视化结果

```python
# 选取第1、2特征值与中心点
plt.scatter(iris_X[:, 0], iris_X[:, 1], c=labels)
plt.scatter(centers[:, 0], centers[:,1], c="red", marker="x")
plt.title("Kmeans")
plt.show()
# 选取第3、4项特征值与中心点
plt.scatter(iris_X[:, 2], iris_X[:,3], c=labels)
plt.scatter(centers[:, 2], centers[:,3], c="red", marker="x")
plt.show()
```

![image-20250410172125796](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20250410172125796.png)

### 寻找最佳 K

```python
from sklearn.model_selection import cross_val_score
from sklearn.neighbors import KNeighborsClassifier
import matplotlib.pyplot as plt
from sklearn.datasets import load_iris

iris = load_iris()
X = iris.data
y = iris.target

k_range = range(1, 31)
k_scores = []
for k in k_range:
    knn = KNeighborsClassifier(n_neighbors=k)
    # loss = -cross_val_score(knn, X, y, cv=10, scoring='mean_squared_error') # for regression
    # 10折交叉验证,对于分类问题，scoring参数默认为accuracy，对于回归问题，默认为r2，或mean_squared_error
    # 原理是将数据分成10份，每次取其中一份作为测试集，其余9份作为训练集，进行10次训练和测试，最后取平均值
    # 是一种常用的验证分类性能好坏的方法
    scores = cross_val_score(knn, X, y, cv=10, scoring='accuracy') # for classification

    # .mean()方法用于计算平均值
    k_scores.append(scores.mean())

plt.plot(k_range, k_scores)
plt.xlabel('Value of K for KNN')
plt.ylabel('Cross-Validated Accuracy')
plt.show()
```

![image-20250410172146181](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20250410172146181.png)

### 颜色量化

#### 描述

图片的颜色数量越多，图片就越难以压缩，图片的大小就越大，因此需要对图片进行颜色量化，减少图片的大小，将图像所需的颜色数量从 96615 减少到 64，同时保持整体外观质量。

图像来源`sklearn.datasets.load_sample_image("china.jpg")`

#### 题解

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.metrics import pairwise_distances_argmin
from sklearn.datasets import load_sample_image
from sklearn.utils import shuffle
from time import time

n_colors = 64

# Load the Summer Palace photo
china = load_sample_image("china.jpg")

# Convert to floats instead of the default 8 bits integer coding. Dividing by
# 255 is important so that plt.imshow behaves works well on float data (need to
# be in the range [0-1])
china = np.array(china, dtype=np.float64) / 255

# Load Image and transform to a 2D numpy array.
w, h, d = original_shape = tuple(china.shape)
assert d == 3
image_array = np.reshape(china, (w * h, d))

print("Fitting model on a small sub-sample of the data")
t0 = time()
image_array_sample = shuffle(image_array, random_state=0)[:1000]
kmeans = KMeans(n_clusters=n_colors, random_state=0).fit(image_array_sample)
print("done in %0.3fs." % (time() - t0))

# Get labels for all points
print("Predicting color indices on the full image (k-means)")
t0 = time()
labels = kmeans.predict(image_array)
print("done in %0.3fs." % (time() - t0))


codebook_random = shuffle(image_array, random_state=0)[:n_colors]
print("Predicting color indices on the full image (random)")
t0 = time()
labels_random = pairwise_distances_argmin(codebook_random,
                                          image_array,
                                          axis=0)
print("done in %0.3fs." % (time() - t0))


def recreate_image(codebook, labels, w, h):
    """Recreate the (compressed) image from the code book & labels"""
    d = codebook.shape[1]
    image = np.zeros((w, h, d))
    label_idx = 0
    for i in range(w):
        for j in range(h):
            image[i][j] = codebook[labels[label_idx]]
            label_idx += 1
    return image

# Display all results, alongside original image
plt.figure(1)
plt.clf()
plt.axis('off')
plt.title('Original image (96,615 colors)')
plt.imshow(china)

plt.figure(2)
plt.clf()
plt.axis('off')
plt.title('Quantized image (64 colors, K-Means)')
plt.imshow(recreate_image(kmeans.cluster_centers_, labels, w, h))

plt.figure(3)
plt.clf()
plt.axis('off')
plt.title('Quantized image (64 colors, Random)')
plt.imshow(recreate_image(codebook_random, labels_random, w, h))
```

![image-20250410172031173](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20250410172031173.png)



