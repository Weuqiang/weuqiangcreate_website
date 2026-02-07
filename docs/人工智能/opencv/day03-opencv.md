## opencv

### 1、回顾

- **计算机眼中的图像**

  - 在计算机眼中，一张图片其实就是一个数组

  - 彩色图（3通道）， 灰度图（单通道）， 二值化图（单通道）

  - 像素->分辨率/屏幕尺寸

  - 图像的表示：在计算机眼中，一张图片就是一个数组，像素值

    - 3通道：RGB格式，HSV(H->色调，S->饱和度，V->亮度)

      像素值有3个，R->红色（0-255）， G->绿色（0-255），B->蓝色（0-255）

    - 单通道：灰度图->它的像素只有一个值，这个值的范围在0-255之间

      ​		 二值化图->它的像素只有一个值，这个值的范围要不就是0，要不就是255
  
  - 数组形状：image_np = cv2.imread('./image.png')
  
    ​		     height, width = image_np[:2]
  
    ​                     height,width = image_np[0], image_np[1]
  
  - 给一张图片赋值，修改像素点
  
    - image = np.zeros((512, 512, 3), dtype=np.uint8)
    - image [:, :] = (0, 0, 255)      纯红色
    - image[i, j] = (0, 0, 255)       通过i,j的坐标，找到具体的某个像素点，进行赋值
    - image[i, :] = (255, 255, 255)   第i行的所有像素点都为白色，就是一条白色线条
    - image[:,j] =   (255, 255, 255)   第j列的所有像素点都为白色，就是一条白色线条
  
- **灰度化**

  方法：1）平均值法   2）最大值法    3）加权求和法

  API：image_gray = cv2.cvtColor(src_image, cv2.COLOR_BGR2GRAY)     默认使用的是加权求和法

- **二值化**

  必须要先进行灰度化

  方法：

  - 阈值方法：cv2.THRESH_BINARY
  - 反阈值法：cv2.THRESH_BINARY_INV
  - 截断阈值法：cv2.THRESH_TRUNC
  - 低阈值零处理：cv2.THRESH_TOZERO
  - 超阈值零处理：cv2.THRESH_TOZERO_INV
  - OTSU: 通过最大类间方差的算法来寻求一个最佳/最合理的阈值, 然后再利用这个阈值对图像使用阈值法或反阈值法   cv2.THRESH_OTSU
  - 自适应二值化：针对每个像素点都去计算它的阈值，比较适合于那种明暗分布不均匀的图像，然后再利用这个阈值对图像使用阈值法或反阈值法
    - 使用一个卷积核   3 *3  5 * 5 
    - 核值
    - 卷积核中心像素点与要计算阈值的像素对齐, 相应位置的核值与像素值进行相乘,求和,再减去一个固定值
    - 构建一个结构化元素（卷积核）
      - cv2.ADAPTIVE_THRESH_GAUSSIAN_C   加权求和
      - cv2.ADAPTIVE_THRESH_MEAN_C         取均值法
    - 我们不需要自己去构建结构化元素，函数内部会根据自适应二值化的方法，来自动构建卷积核

  API：

  - ==_, binary_image = cv2.threshold(gray_image, thresh=阈值,type=二值化的类型，maxval=255, dst:返回二值化的图像)==
  - ==binary_image  = cv2.adaptiveThreshold(gray_image, maxValue, adaptiveMethod,thresholdType,C)==

- **形态学变换**

  一般是输入图像是二值化图，

  - 腐蚀操作

    - 作用：去噪(图像边缘或者背景), 去毛刺和小凸起, 腐蚀操作可以帮助提取图像中的关键特征, 缩小前景对象的边界

      ​             图像分割

    - 工作原理：

      - ==卷积核==    矩形核，椭圆形核，十字形核，核值一般是0或1
      - 利用卷积核针对图像，从左到右，从上到下，进行卷积操作，卷积核的中心与某个像素对齐，然后令核值为1的区域与被核覆盖的对应区域进行相乘，得到其最小值
      - 边缘的填充：对于边缘的像素点要进行填充，默认：边界复制

    - API：

      - ==1）构建卷积核：kernel = np.ones((3, 3), dtype=np.uint8)==

      - ==2）erode_image = cv2.erode(binary_image, kernel, iterations-腐蚀次数）==

  - 膨胀操作

    - 作用：也可以用于消除噪点、填补图像中的小空洞或缝隙，填充图像内部的孔洞，物体周围添加像素，使物体变大，	     起到一个图像增强的作用，方便后期的识别，提升图像的整体亮度，增强图像的亮细节，消除暗细节，
    - 工作原理：
      - ==卷积核==    矩形核，椭圆形核，十字形核，核值一般是0或1
      - 利用卷积核针对图像，从左到右，从上到下，进行卷积操作，卷积核的中心与某个像素对齐，然后令核值为1的区域与被核覆盖的对应区域进行相乘，得到其最大值
      - 边缘的填充：对于边缘的像素点要进行填充，默认：边界复制
    - API：
      - 1）构建卷积核：kernel = np.ones((3, 3), dtype=np.uint8)
      - 2）dilate_image  = cv2.dilate(binary_image, kernel, iterations-腐蚀次数)

  - 开运算

  - 闭运算

  - 礼帽运算

  - 黑帽运算

  - 形态学梯度

    image = cv2.morphologyEx(image_binary, op=, kernel)

    - cv2.MORPH_ERODE：腐蚀操作 --> 0。
    - cv2.MORPH_DILATE：膨胀操作--> 1。
    - cv2.MORPH_OPEN：开运算（先腐蚀后膨胀）--> 2。
    - cv2.MORPH_CLOSE：闭运算（先膨胀后腐蚀）--> 3。
    - cv2.MORPH_GRADIENT：形态学梯度（膨胀图与腐蚀图之差）--> 4。
    - cv2.MORPH_TOPHAT：顶帽运算（原图像与开运算图之差）--> 5。
    - cv2.MORPH_BLACKHAT：黑帽运算（闭运算的结果图与原图像之差）--> 6。

  

### 2、图像颜色识别

知识点：颜色空间，RGB颜色空间，HSY颜色空间

基本步骤：

- 1）将原图转化为hsv颜色空间

- 2）制作一个掩模, 这个掩模要与原图大小一致, 并且是一个二值化的图，根据hsv的颜色空间，提取目标颜色的图像，mask = cv2.inRange(hsv的图像, 目标颜色范围最小值，目标颜色范围的最大值)

- 3）利用掩模与原图进行位与操作

  cv2.bitwise_and(src1, src2, mask)

  说明：src1, src2是原图，就是已经实现了hsv颜色空间转换的图, src1, src2使用同一张图

  

### 3、图像旋转

后期在模型训练的时候，对于训练数据，希望训练数据能个丰富多样，比如，我们本身只有200张训练图片，那么我们可以对每张图片进行旋转（45， 90， 180， 270）从而生成多张图。

- 需要构建一个==仿射变换矩阵==（旋转矩阵 + 平移矩阵）
  - angle: 旋转角度
  - scale:  缩放（不做缩放）
  - center: 旋转中心点，默认都是图像的中心点
- ==插值方法==
  - cv2.INTER_NEAREST：最近邻插值     效果不好
  - **cv2.INTER_LINEAR：双线性插值（默认值）**
  - **cv2.INTER_CUBIC：双三次插值**      效果好，但是计算速度慢
  - **cv2.INTER_AREA：像素区域插值法**
  - **cv2.INTER_LANCZOS4：Lanczos 插值**
- ==边缘填充==
  - 边界复制
  - 边界反射
  - 边界反射101
  - 边界包裹
  - 边界常数

##### 3.1、API函数

- 1）构建一个==仿射变换矩阵==
  - center = (image_np[1]//2, image_np[0]//2)
  - angle = 45
  - scale = 1
  - ==cv2.getRotationMatrix2D(center-旋转中心,angle-旋转角度, scale-缩放)==

- 2） 进行旋转

  - 说明：输出图像大小与原图一致

  - 说明：如果borderMode使用的是（边界常数方式来进行填充）， 那么就需要设置borderValue

  - ==cv2.warpAffine(src-要旋转的图片, M-仿射变换矩阵, 输出图像的大小, flags-插值方法, borderMode-边缘填充方

    ​				式，borderValue-边界常量)==

### 4、图像镜像旋转

- 水平翻转：大于0

- 垂直翻转：0

- 水平垂直翻转：小于0

- API： cv2.flip(image_np, 0)

  

#### 5、图像缩放

- image_resize = cv2.resize(image, dsize=(500, 300), fx=0.5, fy=0.5)



















