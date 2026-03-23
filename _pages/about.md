---
permalink: /
title: ""
excerpt: ""
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>

# 吴晓宇

自动驾驶算法工程师 / 计算机视觉 / 智能驾驶系统落地

- 手机：(+86)18811586725
- 邮箱：164662525@qq.com
- 简历下载：[PDF](/files/resume_polished_2026.pdf) ｜ [DOCX](/files/resume_polished_2026.docx)

东南大学交通运输专业博士在读，曾任星宇车灯股份有限公司星宇研究院智能驾驶算法工程师。研究与工程方向覆盖自动驾驶感知、跟踪、轨迹预测、异常检测、多任务学习与 Vision-Language-Action，具备从数据标注、模型训练、部署加速到 ROS2 系统集成和实车调试的全链路经验。截至目前共录用 SCI 论文 8 篇，其中一作（含导师一作）4 篇，另有 6 篇期刊论文在审。

<span class='anchor' id='education'></span>

# 教育经历

**东南大学** ｜ 交通运输 ｜ 博士在读  
2024.03 - 2027.12（预计毕业）

**北京交通大学** ｜ 交通运输 ｜ 硕士（保送）  
2021.09 - 2023.06

**南京工业大学** ｜ 交通工程 ｜ 学士  
2017.09 - 2021.06 ｜ 专业排名 3 / 86

<span class='anchor' id='work-experience'></span>

# 工作经历

**星宇车灯股份有限公司星宇研究院** ｜ 智能驾驶算法工程师  
2023.07 - 2024.01

- 参与智能驾驶算法研发与工程化落地，工作内容覆盖感知、规划、控制、系统集成与上车部署。
- 支撑校企联合实车项目和交通基础设施巡检项目，具备端侧部署、服务化发布与实车闭环验证经验。

<span class='anchor' id='projects'></span>

# 项目经历

## 校企联合实车项目｜新能源 MPV 智能驾驶算法开发

- 负责从标定、感知、规划、控制到系统集成和上车部署的全链路交付，完成校园道路场景实车闭环验证。
- 完成相机、激光雷达、相机与雷达、惯导等多类标定任务，为多传感器融合提供工程基础。
- 规划侧采用 A* 完成全局规划，结合 Lattice 与 A* 实现局部避障、绕障和会车等能力。
- 感知侧基于 YOLO 系列实现交通信号灯检测，基于 PointPillars 实现激光雷达 3D 目标检测，并部署至 Orin。
- 对纯跟踪算法进行改进，并在弯道场景切换 MPC，最终支持车辆在限速 50 km/h 下实现稳定、舒适的轨迹跟踪。
- 基于 ROS2 搭建智能驾驶系统并完成车端部署与实车调试。

## 交通基础设施智能巡检系统｜异常检测落地 + LLM 微调（YOLO → Qwen-7B）

- 基于道路巡检与交通电子警察数据，实现交通信号灯、交通诱导屏等设备的异常状态检测。
- 制定标注规范并搭建 CVAT 标注平台，组织数据标注流程，支撑模型训练与评估闭环。
- 针对目标长宽比分布特点设计矩形特征提取模块，并提出长宽比约束 NMS，mAP 提升 8 个点至 92%。
- 结合 PTQ/QAT 量化与 TensorRT 加速，部署至 Jetson AGX Xavier，在 1280×720 输入下达到 30 FPS。
- 基于 Flask 构建推理服务，支持多进程、多 GPU 部署，并通过 Nginx 负载均衡提供统一接口。
- 基于 Qwen-7B 构建异常检测与异常解释能力，采用 LoRA + GRPO 微调后精度达到 93%。

## 城市记忆行车｜Transformer 跟踪 Head 设计与集成

- 负责基于 Transformer 的端到端跟踪 Head 设计，并集成到 BEV 感知框架，实现检测、跟踪、预测联合建模。
- 设计不确定性感知 Query 生成模块，利用目标置信度增强低置信与噪声观测条件下的关联稳定性。
- 设计 3D 边界框迭代精修模块，利用历史 Query 与时序信息降低单帧检测误差在跟踪中的累积。
- 引入轨迹预测分支并将结果反哺检测与定位，提升遮挡场景和稀疏观测条件下的目标定位能力。
- 在 nuScenes 数据集上完成训练与推理链路打通，在 800×320 输入条件下达到 AMOTA 0.438 / AMOTP 1.29。

<span class='anchor' id='publications'></span>

# 科研成果

- **DRMNet**: A multi-task detection model based on image processing for autonomous driving scenarios, *IEEE Transactions on Vehicular Technology*，JCR Q1，二作（导师一作），录用。
- **UKD-TEAD**: An Unsupervised Knowledge Distillation Framework for Detecting Anomalies in Traffic Equipment With Various Aspect Ratios, *IEEE Internet of Things Journal*，JCR Q1，一作，录用。
- **MGCDNet**: A Multi-Task Gradient Covariance Decomposition Network for Panoptic Driving Perception, *IEEE Transactions on Intelligent Transportation Systems*，JCR Q1，一作，三审。
- **UC-Track**: Uncertainty-aware and Task-coupled 3D Multi-Object Tracking, *IEEE Transactions on Intelligent Transportation Systems*，JCR Q1，一作，三审。
- **VEpred**: End-to-End Map-Free Trajectory Prediction via Geometry Aware Visual Queries, *Measurement Science and Technology*，JCR Q1，共一，录用。
- **VLM-Guided Deep Reinforcement Learning for Autonomous Driving**: Using a Vision-Language Model as a Semantic Coach, *IEEE Transactions on Neural Networks and Learning Systems*，JCR Q1，一作，在审。
- **DualVLA**: Language-Bridged Hierarchical Vision-Language-Action for Long-Tail Autonomous Driving，进行中。

<span class='anchor' id='skills'></span>

# 专业技能

- **开发能力**：熟练使用 Python、PyTorch，具备 C++ 工程开发经验；熟练使用 ROS2、Git、Docker、Flask。
- **算法方向**：熟悉自动驾驶感知、规划、控制、端到端跟踪、轨迹预测、多任务学习、异常检测、强化学习与 VLA。
- **模型部署**：具备模型后处理、端侧部署与加速能力，熟悉 PTQ/QAT、TensorRT、Orin 与 Jetson AGX Xavier 部署链路。
- **大模型能力**：具备基于 LoRA 等方法的大模型微调与对齐经验，可用于异常检测解释与多模态任务扩展。

<span class='anchor' id='awards'></span>

# 奖项与荣誉

- 讯飞房屋租赁价格预测挑战赛：23 / 490
- 天池竞赛“以数据为中心的鲁棒机器学习”：Top 5%
- 2021 年中国高校大数据挑战赛二等奖
- 全国大学生数学竞赛二等奖
- 江苏省交通科技大赛二等奖
- 江苏省大学生数学竞赛二等奖
- Onsite 自动驾驶算法挑战赛优秀奖
- 北京交通大学优秀硕士毕业论文
- 校级优秀党员
- 特等奖、一等奖等各类奖学金
