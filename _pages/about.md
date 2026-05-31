---
permalink: /
title: ""
excerpt: ""
author_profile: true
author: resume_homepage
redirect_from:
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>

你好，我是 **吴迪**。  
目前主要关注 **自动驾驶/具身智能端到端**、**VLA** 与 **世界模型**。  
这个主页保留原有的学术展示风格，集中整理我的项目经历、科研成果、教育背景和联系方式。

- 简历下载：[PDF](/files/resume_2026intern.pdf)
- 联系方式：`(+86)18811586725` ｜ `164662525@qq.com`

<span class='anchor' id='news'></span>

# 🔥 News
- *2024.03 - 至今*: 在东南大学交通运输专业攻读博士学位，持续研究自动驾驶/具身智能端到端、VLA 与世界模型。
- *2023.07 - 2024.01*: 在星宇车灯股份有限公司星宇研究院担任智能驾驶算法工程师，参与 BEV 算法预研。
- *截至目前*: 已录用 JCR Q1 SCI 论文 6 篇，另有 TRB 会议论文 1 篇、JCR Q1 期刊论文 4 篇在审或审稿中。

<span class='anchor' id='publications'></span>

# 📝 Publications

1. **UC-Track**: Wu, D., Peng, J., Yu, S., & Ma, C. *Uncertainty-aware and Task-coupled 3D Multi-Object Tracking*. IEEE Transactions on Intelligent Transportation Systems, 2026. JCR Q1，中科院一区 TOP，录用。
2. **DRMNet**: *A multi-task detection model based on image processing for autonomous driving scenarios*. IEEE Transactions on Vehicular Technology. JCR Q1，二作（导师一作），录用。
3. **UKD-TEAD**: Wu, D., Peng, J., Yu, S., Ge, Y., Ma, C., & Zhou, J. *An Unsupervised Knowledge Distillation Framework for Detecting Anomalies in Traffic Equipment With Various Aspect Ratios*. IEEE Internet of Things Journal, 2025. JCR Q1，中科院一区 TOP，录用。
4. **Communication-Efficient Dual-Branch Transmission**: Wu, D., Peng, J., Ge, Y., Yu, S., Xu, K., & Ma, C. *Communication-Efficient Dual-Branch Transmission with Semantic Masks and Quantized Features for V2X Cooperative Perception*. IEEE Internet of Things Journal, 2026. JCR Q1，中科院一区 TOP，录用。
5. **Graph Channel Receptive Field Transformer**: Peng, J., Wang, J., Zhang, N., Wu, D.*, & Ma, C. *Graph channel receptive field transformer for multi-agent trajectory prediction*. Engineering Applications of Artificial Intelligence. JCR Q1，中科院一区 TOP，通讯作者，录用。
6. **VEpred**: Yu, S., Wu, D., Li, S., Peng, J., Li, Y., Ge, Y., & Ma, C. *End-to-End Map-Free Trajectory Prediction via Geometry Aware Visual Queries*. Measurement Science and Technology. JCR Q1，共一，录用。
7. **3D Target Detection**: Wu, D., Peng, J., Yu, S., & Ma, C. *Fusion of image and point cloud data features for 3D target detection*. TRB Annual Meeting. TRB 会议论文。
8. **MGCDNet**: Wu, D., Peng, J., Yu, S., & Ma, C. *A Multi-Task Gradient Covariance Decomposition Network for Panoptic Driving Perception*. IEEE Transactions on Intelligent Transportation Systems. JCR Q1，中科院一区 TOP，三审。
9. **SPADet**: Wu, D., Peng, J., Yu, S., & Ma, C. *A Lightweight Shape-Prior-Aware Detector for Traffic-Signal Anomaly Detection*. IEEE Internet of Things Journal. JCR Q1，中科院一区 TOP，二审。
10. **VLM-Guided Deep Reinforcement Learning for Autonomous Driving**: Wu, D., Peng, J., Yu, S., & Ma, C. *Using a Vision-Language Model as a Semantic Coach*. IEEE Transactions on Neural Networks and Learning Systems. JCR Q1，中科院一区 TOP，在审。
11. **Trust-Region Cauchy-Step Optimization**: Wu, D., Peng, J., Yu, S., & Ma, C. *Trust-Region Cauchy-Step Optimization for Stable Training of Multi-Task Perception in Intelligent Vehicles*. Engineering Applications of Artificial Intelligence. JCR Q1，中科院一区 TOP，在审。

<span class='anchor' id='projects'></span>

# 💻 Projects

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Project 1</div><img src='images/projects/dual-arm-folding.png' alt="dual-arm-robot-folding" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**双臂机器人叠衣任务｜基于 π0.5 的叠衣任务适配与实机验证**

- 基于 Koch v1.1 双臂机器人与 π0.5 具身基础策略，完成柔性物体叠衣任务的数据采集、训练流程复现、优化与实机闭环验证。
- 采集 750 条专家演示 episode，覆盖抓取、展开、对齐、折叠等关键阶段，构建面向双臂协同操作的真实机器人模仿学习数据集。
- 基于实机 rollout 结果，针对抓取偏移、衣物滑落等失败模式，采用 DAgger 迭代纠偏补充 500 条 episode，缓解策略分布偏移。
- 在 LeRobot 中适配 π0.5 训练 pipeline，复现 training-time RTC 与 DSRL-style latent-space 后训练流程，完成动作 chunk、reward、critic/actor 训练和实机评估模块。
- 通过 ablation 发现 DSRL 在长程柔性物体任务中收益有限，分析其受 reward 稀疏、critic 估计偏差和 latent-action 对齐误差影响；最终基于 DAgger + RTC 数据闭环将实机成功率提升至 80%，较 GR00T N1.5 baseline 提升约 10%。
</div>
<div class="project-video-showcase project-video-showcase--single" data-video-showcase>
  <div class="project-video-player">
    <video controls playsinline preload="metadata" poster="/images/projects/dual-arm-folding.png" src="/files/video/机器人/robot1.mp4">
      <source src="/files/video/机器人/robot1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="project-video-current">双臂机器人叠衣任务实机演示</div>
  </div>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Project 2</div><img src='images/projects/autonomous-mpv.png' alt="autonomous-driving-mpv" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**校企联合实车项目｜新能源 MPV 智能驾驶算法开发**

**时间**：2023

- 负责全流程开发，从标定、建图、感知、规划、控制、系统集成到上车部署完成全链路交付，完成道路场景实车闭环验证。
- **智驾系统**：从传感器安装到点亮，打通软硬件流程，使用 ROS2 搭建智驾系统，并在车上完成部署以及实车调试。
- **传感器标定与建图**：参与单个相机标定、激光雷达间标定、相机与雷达标定、惯导标定；基于 Vector Map Builder 构建高精地图。
- **规划**：采用 A* 算法进行全局规划，局部避障采用 Lattice 算法与 A* 算法，实现绕障、会车等基础能力。
- **感知**：使用 YOLO 系列算法完成交通信号灯检测；基于 PointPillars 实现激光雷达 3D 目标检测，并部署到 Orin。
- **控制**：对纯跟踪算法进行改进使用，并在弯道切换 MPC 算法，完成限速 50 km/h 条件下的实车闭环验证。
</div>
<div class="project-video-showcase" data-video-showcase>
  <div class="project-video-player">
    <video controls playsinline preload="metadata" poster="/images/projects/autonomous-mpv.png" src="/files/video/自动驾驶/AD1.mp4">
      <source src="/files/video/自动驾驶/AD1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="project-video-current">自动驾驶实车演示 1</div>
  </div>
  <div class="project-video-list" aria-label="Project 2 videos">
    <button class="project-video-tab is-active" type="button" data-video-src="/files/video/自动驾驶/AD1.mp4" aria-pressed="true">
      <span class="project-video-index">01</span>
      <span class="project-video-name">实车演示 1</span>
    </button>
    <button class="project-video-tab" type="button" data-video-src="/files/video/自动驾驶/AD2.mp4" aria-pressed="false">
      <span class="project-video-index">02</span>
      <span class="project-video-name">实车演示 2</span>
    </button>
    <button class="project-video-tab" type="button" data-video-src="/files/video/自动驾驶/AD3.mp4" aria-pressed="false">
      <span class="project-video-index">03</span>
      <span class="project-video-name">实车演示 3</span>
    </button>
    <button class="project-video-tab" type="button" data-video-src="/files/video/自动驾驶/AD4.mp4" aria-pressed="false">
      <span class="project-video-index">04</span>
      <span class="project-video-name">实车演示 4</span>
    </button>
    <button class="project-video-tab" type="button" data-video-src="/files/video/自动驾驶/AD5.mp4" aria-pressed="false">
      <span class="project-video-index">05</span>
      <span class="project-video-name">遥控车辆</span>
    </button>
    <button class="project-video-tab" type="button" data-video-src="/files/video/自动驾驶/AD6.mp4" aria-pressed="false">
      <span class="project-video-index">06</span>
      <span class="project-video-name">实车演示 6</span>
    </button>
  </div>
</div>
<script>
  (function () {
    var showcases = document.querySelectorAll("[data-video-showcase]");
    showcases.forEach(function (showcase) {
      var video = showcase.querySelector("video");
      var source = showcase.querySelector("source");
      var current = showcase.querySelector(".project-video-current");
      var tabs = showcase.querySelectorAll(".project-video-tab");

      tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
          if (tab.classList.contains("is-active")) {
            return;
          }

          tabs.forEach(function (item) {
            item.classList.remove("is-active");
            item.setAttribute("aria-pressed", "false");
          });

          tab.classList.add("is-active");
          tab.setAttribute("aria-pressed", "true");
          var nextSrc = tab.getAttribute("data-video-src");
          video.pause();
          video.src = nextSrc;
          source.src = nextSrc;
          video.load();
          current.textContent = tab.querySelector(".project-video-name").textContent;
        });
      });
    });
  }());
</script>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Project 3</div><img src='images/projects/bev-tracking.png' alt="city-memory-driving" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**城市记忆行车｜Transformer 跟踪 Head 设计与集成**

**时间**：2024 - 至今

- 负责基于 Transformer 的端到端跟踪 head 搭建，并集成到 BEV 感知框架中，实现检测、跟踪、预测的联合建模与时序关联。
- 设计不确定性感知 Query 生成模块：基于目标置信度生成查询向量，使关联与状态更新对低置信、噪声观测更稳定。
- 设计 3D 边界框迭代精修模块：利用历史 query 与时序信息对初始检测框进行逐步优化，缓解单帧检测误差在跟踪中的累积。
- 引入轨迹预测分支并作为耦合信息反哺检测和定位：预测未来轨迹提供下一帧参考点，提升遮挡与稀疏观测下的目标定位能力。
- 在 nuScenes 数据集上完成训练与推理链路打通，输入分辨率 800×320 条件下达到 AMOTA 0.438 / AMOTP 1.29。
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Project 4</div><img src='images/projects/traffic-inspection.png' alt="traffic-infrastructure-inspection" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**交通基础设施智能巡检系统｜异常检测落地**

**时间**：2023 - 2024

- 基于道路巡检数据以及交通电子警察数据，实现交通信号灯、交通诱导屏等交通设备异常状态检测。
- 制定标注规则并组织人员进行标注；针对目标长宽比特点，设计矩形特征提取模块，提出长宽比约束的 NMS，mAP 提高为 92%。
- 结合 PTQ/QAT 量化与 TensorRT 加速，部署至 Jetson AGX Xavier，推理速度达到 50 FPS（1280×720）。
- 基于 Flask 搭建推理服务，支持多进程多 GPU 部署，并通过 Nginx 负载均衡对外提供统一接口。
</div>
</div>

- 技术关键词：`Python`、`PyTorch`、`LeRobot`、`π0.5`、`DAgger`、`ROS2`、`TensorRT`、`YOLO`、`PointPillars`、`BEV`、`Transformer`

<span class='anchor' id='honors-and-awards'></span>

# 🎖 Honors and Awards
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

<span class='anchor' id='educations'></span>

# 📖 Educations
- **东南大学**：交通运输，博士在读，2024.03 - 2027.12（预计毕业）
- **北京交通大学**：交通运输，硕士（保送），2021.09 - 2023.06
- **南京工业大学**：交通工程，学士，2017.09 - 2021.06，专业排名 3 / 86

<span class='anchor' id='technical-skills'></span>

# 🛠 Technical Skills
- **开发能力**：熟练掌握 Python 与 PyTorch 深度学习框架；熟练使用 ROS2、Git、Docker；熟练使用 Codex、Claude Code 等 AI 编程工具。
- **算法方向**：对自动驾驶感知、规划、控制、端到端算法、VLA 算法与世界模型有深入了解。
- **模型部署**：具备实车调试和模型工程化落地能力，了解端侧部署与加速链路，熟悉 PTQ/QAT 与 TensorRT。

<span class='anchor' id='work-experience'></span>

# 💼 Work Experience
- **星宇车灯股份有限公司星宇研究院**
