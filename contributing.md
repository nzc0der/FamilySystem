# Contributing to Family Dashboard

Thank you for your interest in contributing! We welcome contributions to make this family dashboard even better.

## How to Contribute

### 1. Reporting Bugs
- Check the issues tab to see if the bug has already been reported.
- If not, create a new issue with a clear title and description.
- Include steps to reproduce the bug and any relevant logs or screenshots.

### 2. Suggesting Enhancements
- Open an issue to discuss your idea before starting work.
- Explain the benefit of the enhancement and how it fits the project's goal.

### 3. Submitting Pull Requests
1. **Fork** the repository.
2. **Clone** your fork to your local machine (or Raspberry Pi).
3. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes**. Ensure you follow the project's coding style (Python PEP 8 for backend, clean HTML/CSS/JS for frontend).
5. **Test your changes** thoroughly.
6. **Commit** your changes with descriptive messages:
   ```bash
   git commit -m "feat: add weather widget support"
   ```
7. **Push** to your fork and **open a Pull Request** against the main repository.

## Development Setup

Since this project is designed for Raspberry Pi, you can develop on the Pi itself or on a computer with Python 3.11+.

1. **Create a Virtual Environment**:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
2. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
3. **Run the Dashboard**:
   ```bash
   python3 server.py
   ```

## Code Style
- **Python**: Follow PEP 8 guidelines.
- **Frontend**: Use semantic HTML and keep CSS organized.
- **Documentation**: Update the README if you add new features or change setup steps.

## Code of Conduct
Please be respectful and constructive in all interactions within this project.

## License
By contributing, you agree that your contributions will be licensed under the MIT License.
