<div align="center">

# ✈️ React Flight Tracker

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" alt="Material-UI" />
</p>

<p align="center">
  <strong>A modern, real-time flight tracking application with glassmorphism UI design</strong>
</p>

<p align="center">
  Track live aircraft worldwide with beautiful, interactive maps and real-time data visualization
</p>

<div align="center">
  <img src="docs/react-flight-tracker_prview.gif" alt="Flight Tracker Preview" style="border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.3);" />
</div>

</div>

---

## 🌟 **Features**

<table>
<tr>
<td>

### 🎨 **Modern UI Design**
- **Glassmorphism Effects** - Translucent components with backdrop blur
- **Smooth Animations** - Micro-interactions and hover effects  
- **Multi-Theme Support** - Dark, Light, and Pineapple themes
- **Responsive Design** - Perfect on all screen sizes

</td>
<td>

### 🛰️ **Real-Time Tracking**
- **Live Flight Data** - Powered by OpenSky Network API
- **Interactive Maps** - Beautiful Mapbox integration
- **Aircraft Details** - Comprehensive flight information
- **Real-Time Updates** - ~5 second data refresh

</td>
</tr>
</table>

## 🚀 **Quick Start**

### Prerequisites
```bash
Node.js 16+ and npm
```

### Installation

```bash
# Clone the repository
git clone https://github.com/kammounmedaziz/flight-tracker.git
cd flight-tracker

# Install dependencies
npm install
```

### Environment Setup

Create a `.env.local` file in the root directory:

```env
# Mapbox Configuration (Required)
VITE_REACT_MAPBOX_TOKEN=your_mapbox_token_here

# OpenSky Network Configuration (Optional but Recommended)
VITE_REACT_OSKY_USERNAME=your_opensky_username
VITE_REACT_OSKY_PASSWORD=your_opensky_password
```

<details>
<summary><strong>🔑 How to get API keys</strong></summary>

#### Mapbox Token
1. Sign up at [mapbox.com](https://www.mapbox.com/)
2. Go to your [Account page](https://account.mapbox.com/)
3. Create a new access token
4. Copy and paste it into your `.env.local` file

#### OpenSky Network (Optional)
1. Register at [opensky-network.org](https://opensky-network.org/)
2. Use your credentials in the `.env.local` file
3. **Benefits**: Faster data updates (5s vs 10s delay)

</details>

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🛠️ **Tech Stack**

<div align="center">

| Frontend | Styling | Build Tool | APIs |
|----------|---------|------------|------|
| ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) | ![MUI](https://img.shields.io/badge/MUI-007FFF?style=flat&logo=mui&logoColor=white) | ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=FFD62E) | ![Mapbox](https://img.shields.io/badge/Mapbox-000000?style=flat&logo=mapbox&logoColor=white) |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) | ![Emotion](https://img.shields.io/badge/Emotion-C43BAD?style=flat&logo=css3&logoColor=white) | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white) | ![OpenSky](https://img.shields.io/badge/OpenSky_Network-FF6B35?style=flat&logo=airplane&logoColor=white) |

</div>

### Core Dependencies

```json
{
  "react": "^18.2.0",
  "typescript": "^5.1.6", 
  "@mui/material": "^5.14.5",
  "react-map-gl": "^7.1.9",
  "mapbox-gl": "^2.15.0",
  "vite": "^4.4.9"
}
```

---

## 🎨 **UI Showcase**

<div align="center">

### 🌙 **Dark Theme**
*Modern glassmorphism with blue and emerald accents*

### ☀️ **Light Theme** 
*Clean, minimal design with enhanced readability*

### 🍍 **Pineapple Theme**
*Vibrant teal and amber tropical color palette*

</div>

## 📱 **Screenshots**

<table>
<tr>
<td align="center">
<img src="https://via.placeholder.com/300x200/1e293b/3b82f6?text=Dark+Theme" alt="Dark Theme" style="border-radius: 8px;"/>
<br><strong>Dark Theme</strong>
</td>
<td align="center">
<img src="https://via.placeholder.com/300x200/f8fafc/2563eb?text=Light+Theme" alt="Light Theme" style="border-radius: 8px;"/>
<br><strong>Light Theme</strong>
</td>
</tr>
<tr>
<td align="center">
<img src="https://via.placeholder.com/300x200/134e4a/14b8a6?text=Pineapple+Theme" alt="Pineapple Theme" style="border-radius: 8px;"/>
<br><strong>Pineapple Theme</strong>
</td>
<td align="center">
<img src="https://via.placeholder.com/300x200/0f172a/10b981?text=Live+Data" alt="Live Data" style="border-radius: 8px;"/>
<br><strong>Live Flight Data</strong>
</td>
</tr>
</table>

---

## 🗺️ **Features Overview**

### Real-Time Flight Tracking
- 🛩️ **Live aircraft positions** updated every 5-10 seconds
- 📊 **Detailed flight information** including altitude, speed, and heading
- 🎯 **Interactive aircraft selection** with smooth animations
- 📍 **Real-time position tracking** with flight path visualization

### Modern User Interface
- 🌈 **Glassmorphism design** with backdrop blur effects
- ⚡ **Smooth animations** and micro-interactions
- 🎨 **Multiple themes** for different preferences
- 📱 **Fully responsive** design for all devices

### Advanced Mapping
- 🗺️ **Mapbox integration** with satellite and street views
- 🔍 **Zoom and pan** controls with smooth animations
- 📏 **Distance and bearing** calculations
- 🎯 **Precise aircraft positioning** with rotation indicators

---

## 🤝 **Contributing**

We welcome contributions! Here's how you can help:

<div align="center">

| 🐛 **Bug Reports** | ✨ **Feature Requests** | 🔧 **Pull Requests** |
|-------------------|------------------------|---------------------|
| Found a bug? Open an issue! | Have an idea? We'd love to hear it! | Ready to contribute? Submit a PR! |

</div>

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 **License**

<div align="center">

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE.md) file for details.

```
MIT © 2025 Flight Tracker Contributors
```

</div>

---

<div align="center">

### 🌟 **Show your support**

Give a ⭐️ if this project helped you!

<p>
  <a href="https://github.com/kammounmedaziz/flight-tracker/stargazers">
    <img src="https://img.shields.io/github/stars/kammounmedaziz/flight-tracker?style=social" alt="Stars">
  </a>
  <a href="https://github.com/kammounmedaziz/flight-tracker/network/members">
    <img src="https://img.shields.io/github/forks/kammounmedaziz/flight-tracker?style=social" alt="Forks">
  </a>
</p>

**Made with ❤️ by developers, for aviation enthusiasts**

</div>