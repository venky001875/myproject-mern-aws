<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

  <h1>✅ MERN 3-Tier Architecture on AWS</h1>
  <p>
    Working on a production-ready <strong>MERN stack application</strong> using <strong>3-Tier Architecture</strong> on <strong>AWS EC2</strong> with <strong>Auto Scaling</strong>, <strong>Load Balancing</strong>, <strong>Self-Managed MongoDB</strong>, and <strong>CloudWatch monitoring</strong>.
    Frontend served via <strong>React + ALB</strong>, backend on <strong>Node.js/Express EC2 instances</strong> in private subnets, and database hosted on a <strong>dedicated MongoDB EC2 instance in a private subnet</strong>.
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
        <td>EC2 Instances (Auto Scaling)</td>
        <td>Private Subnet</td>
      </tr>
      <tr>
        <td><strong>🔵 Tier 3</strong></td>
        <td>Database</td>
        <td>MongoDB (Self-Managed)</td>
        <td>EC2 Instance</td>
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
    <li>Database connection (MongoDB using MongoDB Compass locally)</li>
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
    <li>Backend EC2: No public IP assigned</li>
    <li>MongoDB EC2: No public IP assigned</li>
    <li>ALB: Public DNS accessible</li>
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
    <li>Backend configured to connect to MongoDB private IP (port 27017)</li>
  </ul>
  <p><strong>Pending:</strong> ⏳ Backend running on port 5000 internally</p>

  <h3>🗄 PHASE 4 – Database Setup</h3>
  <p><strong>Objective:</strong> Deploy secure, private MongoDB database layer.</p>
  <ul>
    <li>Launch separate EC2 instance in private subnet</li>
    <li>Install MongoDB Community Edition</li>
    <li>Bind MongoDB to private IP</li>
    <li>Enable authentication (username/password)</li>
    <li>Security Group: Allow port 27017 from Backend EC2 Security Group only</li>
    <li>EBS encryption enabled</li>
    <li>No public IP assigned</li>
  </ul>
  <p><strong>Pending:</strong> ⏳ Private MongoDB EC2 with zero public access</p>

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
  <ul>
    <li>Launch Template with AMI & user data</li>
    <li>Auto Scaling Group (min 2, max 4)</li>
    <li>Attached to ALB target group</li>
    <li>CPU scaling policy (60% threshold)</li>
  </ul>

  <h3>📊 PHASE 7 – CloudWatch Monitoring</h3>
  <ul>
    <li>CloudWatch metrics: CPU, Memory, Network</li>
    <li>Custom dashboards created</li>
    <li>Alarms for high CPU (>80%)</li>
    <li>SNS notifications configured</li>
  </ul>

  <h3>💾 PHASE 8 – S3 Static Storage</h3>
  <ul>
    <li>Amazon S3 bucket creation</li>
    <li>Backend integration for uploads</li>
    <li>S3 URLs stored in MongoDB</li>
    <li>IAM roles for secure access</li>
  </ul>

  <hr>

  <h2>🏗 Architecture Flow Diagram</h2>
  <pre>🌐 Internet Users (Browser)
        |
        | HTTPS (443)
        v
  ┌─────────────────────────────────────┐
  │        Application Load Balancer     │ ← Public Subnet
  └─────────────────┬───────────────────┘
                    | HTTP (5000)
                    v
  ┌─────────────────────────────────────┐
  │      EC2 Auto Scaling (Backend)     │ ← Private Subnet
  │     Node.js + Express + PM2         │
  └─────────────────┬───────────────────┘
                    | MongoDB (27017)
                    v
  ┌─────────────────────────────────────┐
  │     MongoDB EC2 Instance            │ ← Private Subnet
  │   (Authentication Enabled)          │
  │      No Public Access               │
  └─────────────────────────────────────┘
                    ^
                    |
  ┌─────────────────────────────────────┐
  │         Amazon S3 (Optional)        │
  └─────────────────────────────────────┘

  📊 CloudWatch Monitoring → All Layers
  🔒 Security Groups → Strict Tier Isolation</pre>

  <hr>

  <h2>🛠 Technical Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> React, HTML5, CSS3, JavaScript</li>
    <li><strong>Backend:</strong> Node.js, Express.js, PM2</li>
    <li><strong>Database:</strong> MongoDB (Self-Managed on EC2)</li>
    <li><strong>Compute:</strong> EC2 (t3.micro), Auto Scaling Group</li>
    <li><strong>Networking:</strong> ALB, VPC, Public/Private Subnets, NAT Gateway</li>
    <li><strong>Storage:</strong> Amazon S3, EBS</li>
    <li><strong>Security:</strong> Security Groups, IAM Roles, Private Subnets</li>
    <li><strong>Monitoring:</strong> CloudWatch Metrics, Logs, Alarms</li>
    <li><strong>DevOps:</strong> Git, npm, AWS CLI</li>
  </ul>

  <hr>

  <p><strong>💯 Enterprise-Grade 3-Tier MERN Deployment on AWS (Self-Managed MongoDB)</strong></p>

</body>
</html>