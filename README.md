# Hi 👋

### Tentang SPIN

<img width="200" height="200" alt="Logo SPIN" src="https://github.com/user-attachments/assets/2dc24c8e-dd14-4bfe-b972-0b499cec1308" />

### 🚀 SPIN — Smart Parking INABA

SPIN adalah aplikasi sistem manajemen parkir berbasis web yang dirancang untuk mendukung proses parkir kendaraan di lingkungan kampus secara digital. Sistem ini mendukung alur masuk-keluar kendaraan menggunakan QR Code, monitoring kendaraan secara real-time, dashboard admin, dashboard
petugas, dashboard pengendara, serta manajemen data parkir yang terintegrasi.


### 📌 Features

📊 Admin ( Sistem Monitoring )

- Statistik kendaraan masuk, keluar, dan sedang parkir
- Aktivitas terakhir kendaraan secara real-time
- Export laporan (Excel / PDF / CSV)
- Integrasi socket untuk update data live


💂 Petugas Parkir

- Login Petugas
- Dashboard monitoring parkir
- Scan QR Code kendaraan masuk/keluar
- Riwayat parkir kendaraan
- Notifikasi aktivitas parkir
- Profil petugas

🚘 Pengendara

- Registrasi & Login Pengendara
- Manajemen profil pengendara
- QR Code untuk kendaraan
- Dashboard status kendaraan
- Riwayat parkir pribadi
- Notifikasi status parkir

### 🏗️ Project Architecture

Project SPIN menggunakan pendekatan Client-Server Architecture:

- Frontend: React + TailwindCSS
- Backend: Express.js + Sequelize ORM
- Database: MySQL
- Real-time Communication: Socket.IO
- Cloud Infrastructure: AWS

### 🛠️ Tech Stack

🎨 Frontend

Frontend dibangun menggunakan modern stack React untuk UI interaktif dan responsif.

Main Dependencies:

- React 19
- React Router DOM
- Axios
- TailwindCSS v4
- Swiper (carousel/slider)
- Recharts (chart/statistics)
- React Hot Toast (notification)
- React Icons

Dev Tools:

- Vite
- ESLint
- vite-plugin-svgr

⚙️ Backend

Backend dikembangkan menggunakan Express.js sebagai REST API dan Sequelize sebagai ORM untuk mengelola database MySQL.

Main Dependencies:

- Express.js 5
- Sequelize ORM
- MySQL2 Driver
- JWT Authentication
- Bcrypt (password hashing)
- Multer (upload file)
- Nodemailer (email service)
- QRCode generator
- Redis (caching/session/queue) via ioredis
- Socket.IO (real-time update)
- PDFKit & ExcelJS (export report)
- CSV Export

Dev Tools:

- Nodemon

☁️ Cloud Infrastructure (AWS)

Backend SPIN mendukung deployment menggunakan AWS, termasuk:

- AWS EC2 (hosting server backend)
- AWS RDS MySQL (database managed service)
- AWS S3 (penyimpanan file/upload)
- AWS ElastiCache for Redis (caching/real-time analytic/session management)
- AWS Security Group (pengaturan firewall network)

Infrastruktur AWS dapat disesuaikan sesuai kebutuhan deployment (development / staging / production).

🔐 Authentication & Keamanan

SPIN menggunakan sistem autentikasi berbasis session-based + HttpOnly Cookie dengan fitur:

- Register & Login (Session Based)
- Forgot Password dengan OTP (Email)
- Verifikasi OTP
- Reset Password berbasis session (HttpOnly Cookie)
- Role-based access control (Admin, Petugas, Pengendara)
- Password hashing menggunakan bcrypt
- OTP & Session disimpan di Redisn


📧 Email Service

- Kirim OTP ke email
- Notifikasi perubahan password


📡 Real-Time System

- Aplikasi mendukung komunikasi real-time menggunakan Socket.IO, digunakan untuk:
- Update dashboard petugas secara live
- Informasi kendaraan masuk/keluar
- Update notifikasi tanpa reload


🗄️ Database Design

Database menggunakan MySQL dengan ORM Sequelize.

Beberapa tabel utama:

- role
- users
- admin_profile
- petugas_profile
- pengendara_profile
- kendaraan
- kendaraan_masuk
- kendaraan_keluar
- notifikasi
- notifikasi_admin
- notifikasi_user

Relasi database dikelola melalui Sequelize association.

⚙️ Environment Variables

Buat file atau edit isi file .env:

```
NODE_ENV=production
CLIENT_SIDE_URL= xxxxxx
PORT=4000
DB_NAME= xxxxxx
DB_HOST=xxxxxx
DB_USER=xxxxxx
DB_PW=xxxxxx
DB_DIALECT=mysql
JWT_SECRET_KEY=xxxxxx  
JWT_EXPIRES=xxxxxx
EMAIL_USER= xxxxxx
EMAIL_PASSWORD= xxxxxx
REDIS_HOST=xxxxxx
REDIS_PORT=10945
REDIS_USNM=default
REDIS_PW=xxxxxx

```

### ⚡Instalation & Setup

#### Step 1 : Clone repository

```

git clone https://github.com/SmartParkingINABA/SPIN.git
cd SPIN

```

#### 🎨 Frontend Setup

```

cd Front-end
npm install

```

#### Run Development

```

npm run dev

```

#### Frontend akan berjalan di port:

```

http://localhost:5173

```

Buka browser Anda dan kunjungi http://localhost:5173 di terminal. Jika semuanya berjalan lancar, Anda telah berhasil menjalankan aplikasi ini.


### ⚙️ Backend Setup

```

cd Back-end
npm install

```


#### Run Development Server

```

npm run dev

```


#### Backend akan berjalan di port:

```

http://localhost:4000

```

Buka browser Anda dan kunjungi http://localhost:4000 di terminal. Jika semuanya berjalan lancar, Anda telah berhasil menjalankan aplikasi ini.
