<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

  <h1>✅ MERN 3-Tier Architecture on AWS</h1>
  <p>
    Working on a production-ready <strong>MERN stack application</strong> using <strong>3-Tier Architecture</strong> on <strong>AWS EC2</strong> with <strong>Auto Scaling</strong>, <strong>Load Balancing</strong>, <strong>RDS</strong>, and <strong>CloudWatch monitoring</strong>.
    Frontend served via <strong>React + ALB</strong>, backend on <strong>Node.js/Express EC2 instances</strong> in private subnets, and database in <strong>isolated RDS</strong>.
  </p>

  <hr>

  <h2>🎯 3-Tier Architecture Design</h2>
  <table border="1" cellpadding="8" cellspacing="0">
    <thead>
      <tr>
        <th>Tier</th>
        <th>Layer</th>
        <th>Technology</th>
        <th>AWS Service</th>
        <th>Subnet</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>🟢 Tier 1</strong></td>
        <td>Presentation</td>
        <td>React Frontend</td>
        <td>EC2 + ALB</td>
        <td>Public Subnet</td>
      </tr>
      <tr>
        <td><strong>🟡 Tier 2</strong></td>
        <td>Application</td>
        <td>Node.js + Express</td>
        <td>EC2 Instances</td>
        <td>Private Subnet</td>
      </tr>
      <tr>
        <td><strong>🔵 Tier 3</strong></td>
        <td>Database</td>
        <td>MySQL/PostgreSQL</td>
        <td>Amazon RDS</td>
        <td>Private Subnet</td>
      </tr>
    </tbody>
  </table>

  <hr>

  <h2>📋 8-Phase Industry Implementation</h2>

  <h3>🏗 PHASE 1 – Application Development</h3>
  <p><strong>Objective:</strong> Build complete MERN stack locally with API testing.</p>
  <ul>
    <li>React frontend with routing and components</li>
    <li>Node.js + Express backend APIs</li>
    <li>Database connection (MongoDB/MySQL)</li>
    <li>API testing with Postman</li>
    <li>Local deployment: <code>http://localhost:3000</code></li>
  </ul>
  <p><strong>Deliverable:</strong> ✅ Fully working MERN application locally</p>

  <h3>🌐 PHASE 2 – AWS Network Architecture</h3>
  <p><strong>Objective:</strong> Create secure VPC with multi-tier subnet isolation.</p>
  <ul>
    <li>Amazon VPC with public/private subnets</li>
    <li>Internet Gateway, NAT Gateway, Route Tables</li>
    <li>Security Groups for tier isolation</li>
    <li>EC2: No public IP assigned</li>
    <li>ALB: Public DNS accessible</li>
    <li>RDS: Private subnet only</li>
  </ul>
  <p><strong>Complete:</strong> ✅ Secure 3-tier network infrastructure</p>

  <h3>🖥 PHASE 3 – EC2 Backend Deployment</h3>
  <p><strong>Objective:</strong> Deploy Node.js backend on EC2 private instances.</p>
  <ul>
    <li>EC2 launch in private subnet (t3.micro)</li>
    <li>Install Node.js, npm, PM2, Git</li>
    <li>Git clone repository</li>
    <li><code>npm install &amp;&amp; npm run build</code></li>
    <li>PM2 process manager: <code>pm2 start server.js</code></li>
  </ul>
  <p><strong>Pending:</strong> ⏳ Backend running on port 5000 internally</p>

  <h3>🗄 PHASE 4 – Database Setup</h3>
  <p><strong>Objective:</strong> Deploy secure, private database layer.</p>
  <ul>
    <li>Option A: Amazon RDS (MySQL/PostgreSQL) in private subnet</li>
    <li>Option B: MongoDB Atlas with VPC peering</li>
    <li>Security Group: EC2 only access</li>
    <li>Database encryption enabled</li>
    <li>Application connects successfully</li>
  </ul>
  <p><strong>Pending:</strong> ⏳ Private database with zero public access</p>

  <h3>⚖ PHASE 5 – Application Load Balancer</h3>
  <p><strong>Objective:</strong> Implement high availability with ALB.</p>
  <ul>
    <li>Application Load Balancer in public subnet</li>
    <li>Target Group (port 5000)</li>
    <li>EC2 instances registered</li>
    <li>Health checks configured</li>
    <li>HTTPS listener with SSL</li>
  </ul>
  <p><strong>Pending:</strong> ⏳ ALB DNS accessible: <code>alb-dns-name.region.elb.amazonaws.com</code></p>

  <h3>📈 PHASE 6 – Auto Scaling Group</h3>
  <p><strong>Objective:</strong> Production-ready auto scaling & high availability.</p>
  <ul>
    <li>Launch Template with AMI & user data</li>
    <li>Auto Scaling Group (min 2, max 4)</li>
    <li>Attached to ALB target group</li>
    <li>CPU scaling policy (60% threshold)</li>
    <li>Multiple EC2 instances running</li>
  </ul>
  <p><strong>Pending:</strong> ⏳ Auto scaling demonstrated with load testing</p>

  <h3>📊 PHASE 7 – CloudWatch Monitoring</h3>
  <p><strong>Objective:</strong> Enterprise-grade monitoring & alerting.</p>
  <ul>
    <li>CloudWatch metrics: CPU, Memory, Network</li>
    <li>Custom dashboards created</li>
    <li>Alarms for high CPU (>80%)</li>
    <li>Application logs streamed</li>
    <li>SNS notifications configured</li>
  </ul>
  <p><strong>Pending:</strong> ⏳ Real-time monitoring with proactive alerts</p>

  <h3>💾 PHASE 8 – S3 Static Storage</h3>
  <p><strong>Objective:</strong> Scalable file storage integration.</p>
  <ul>
    <li>Amazon S3 bucket creation</li>
    <li>Static website hosting (optional)</li>
    <li>Backend integration for uploads</li>
    <li>S3 URLs stored in database</li>
    <li>IAM roles for secure access</li>
  </ul>
  <p><strong>Pending:</strong> ⏳ S3 integration for images/documents</p>

  <hr>

  <h2>🏗 Architecture Flow Diagram</h2>
  <pre>🌐 Internet Users (Browser)
        |
        | HTTPS (443)
        v
  ┌─────────────────────────────────────┐
  │        Application Load Balancer     │ ← Public Subnet
  │         (Public DNS)                 │
  └─────────────────┬───────────────────┘
                    | HTTP (5000)
                    v
  ┌─────────────────────────────────────┐
  │           EC2 Auto Scaling          │ ← Private Subnet
  │     Node.js + Express Backend       │
  │        PM2 Process Manager          │
  └─────────────────┬───────────────────┘
                    | DB Connection
                    v
  ┌─────────────────────────────────────┐
  │         Amazon RDS Database         │ ← Private Subnet
  │       MySQL / PostgreSQL            │
  │      (No Public Access)             │
  └─────────────────────────────────────┘
                    ^
                    |
  ┌─────────────────────────────────────┐
  │         Amazon S3 (Optional)        │
  │       Static Files Storage          │
  └─────────────────────────────────────┘

  📊 CloudWatch Monitoring → All Layers
  🔒 Security Groups → Tier Isolation</pre>

  <hr>

  <h2>✅ Interview Demo Checklist</h2>
  <ul>
    <li><strong>Architecture Diagram:</strong> Draw 3-tier flow (User → ALB → EC2 → RDS)</li>
    <li><strong>ALB Access:</strong> Show public DNS working</li>
    <li><strong>Multiple EC2:</strong> Demonstrate 2+ instances in ASG</li>
    <li><strong>Auto Scaling:</strong> Trigger scaling with stress test</li>
    <li><strong>RDS Security:</strong> Prove private subnet access only</li>
    <li><strong>CloudWatch:</strong> Show live metrics & alarms</li>
    <li><strong>Security:</strong> Explain zero public IPs except ALB</li>
  </ul>

  <hr>

  <h2>📊 Implementation Status</h2>
  <table border="1" cellpadding="8" cellspacing="0">
    <thead>
      <tr>
        <th>Phase</th>
        <th>Component</th>
        <th>AWS Services</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Phase 1</strong></td>
        <td>MERN Development</td>
        <td>Local</td>
        <td>✅ Complete</td>
      </tr>
      <tr>
        <td><strong>Phase 2</strong></td>
        <td>VPC Network</td>
        <td>VPC, Subnets, SG</td>
        <td>⏳ Pending</td>
      </tr>
      <tr>
        <td><strong>Phase 3</strong></td>
        <td>EC2 Backend</td>
        <td>EC2, PM2</td>
        <td>⏳ Pending</td>
      </tr>
      <tr>
        <td><strong>Phase 4</strong></td>
        <td>RDS Database</td>
        <td>RDS</td>
        <td>⏳ Pending</td>
      </tr>
      <tr>
        <td><strong>Phase 5</strong></td>
        <td>Load Balancer</td>
        <td>ALB</td>
        <td>⏳ Pending</td>
      </tr>
      <tr>
        <td><strong>Phase 6</strong></td>
        <td>Auto Scaling</td>
        <td>ASG, Launch Template</td>
        <td>⏳ Pending</td>
      </tr>
      <tr>
        <td><strong>Phase 7</strong></td>
        <td>Monitoring</td>
        <td>CloudWatch</td>
        <td>⏳ Pending</td>
      </tr>
      <tr>
        <td><strong>Phase 8</strong></td>
        <td>S3 Storage</td>
        <td>S3</td>
        <td>⏳ Pending</td>
      </tr>
    </tbody>
  </table>

  <hr>

  <h2>🛠 Technical Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> React, HTML5, CSS3, JavaScript</li>
    <li><strong>Backend:</strong> Node.js, Express.js, PM2</li>
    <li><strong>Database:</strong> MySQL/PostgreSQL (RDS), MongoDB</li>
    <li><strong>Compute:</strong> EC2 (t3.micro), Auto Scaling Group</li>
    <li><strong>Networking:</strong> ALB, VPC, Public/Private Subnets, NAT Gateway</li>
    <li><strong>Storage:</strong> Amazon RDS, Amazon S3</li>
    <li><strong>Security:</strong> Security Groups, IAM Roles, Private Subnets</li>
    <li><strong>Monitoring:</strong> CloudWatch Metrics, Logs, Alarms</li>
    <li><strong>DevOps:</strong> Git, npm, AWS CLI</li>
  </ul>

  <hr>

  <p><strong>💯 Enterprise-Grade 3-Tier MERN Deployment on AWS</strong></p>

</body>
</html>
