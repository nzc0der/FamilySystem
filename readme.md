# Family Dashboard

![Platform](https://img.shields.io/badge/platform-Raspberry%20Pi-pink)
![Python](https://img.shields.io/badge/python-3.11+-blue)
![License](https://img.shields.io/badge/license-MIT-lightgrey)
![Status](https://img.shields.io/badge/status-active-success)
![Maintenance](https://img.shields.io/badge/maintained-yes-brightgreen)

A self-hosted family dashboard designed to run on a Raspberry Pi.

---

## Table of Contents

1. [What Is This?](#1-what-is-this)
2. [System Requirements](#2-system-requirements)
3. [Installation](#3-installation)
4. [First-Run Setup](#4-first-run-setup)
5. [Configuring the systemd Service](#5-configuring-the-systemd-service)
6. [Accessing the Dashboard](#6-accessing-the-dashboard)
7. [Auto-Update and Backup System](#7-auto-update-and-backup-system)
8. [Manual Backup and Restore](#8-manual-backup-and-restore)
9. [Safe Manual Reset](#9-safe-manual-reset)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. What Is This?

This is a personal family dashboard system designed to run on a Raspberry Pi.

It was originally created as a small project to build something useful and learn more about backend systems, automation, and self-hosting.

---

## 2. System Requirements

| Requirement         | Version / Notes                               |
|---------------------|-----------------------------------------------|
| Hardware            | Raspberry Pi 400 (or any Raspberry Pi model)  |
| Operating System    | Raspberry Pi OS (Debian Bookworm / Bullseye)  |
| Python              | 3.11 or later                                 |
| Git                 | Any recent version (for auto-update)          |
| Network             | Connected to local Wi-Fi or Ethernet          |

**No OS modifications or additional hardware are required.**

Install system dependencies:

```bash
sudo apt update
sudo apt install -y python3 python3-pip python3-venv git
