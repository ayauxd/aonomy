# Aonomy Logistics Website

A modern, responsive website for Aonomy Logistics, a Nigerian customs clearance and shipping company.

## Features

- Modern, responsive design
- User-friendly interface
- Tracking functionality
- Custom duty verification form
- Mobile-optimized experience

## Local Development

### Prerequisites

- Node.js (v14 or higher)

### Running Locally

1. Clone this repository
2. Navigate to the project directory
3. Run the following command to start a local development server:

```bash
npm start
```

This will start a local server at http://localhost:3000 where you can view the website.

## Deployment to Vercel

### Prerequisites

- A [Vercel](https://vercel.com) account
- Vercel CLI (optional)

### Deployment Steps

#### Option 1: Using Vercel Dashboard

1. Log in to your Vercel account
2. Click "New Project"
3. Import your Git repository or upload the project files
4. Configure your project settings (or use the defaults)
5. Click "Deploy"

#### Option 2: Using Vercel CLI

1. Install Vercel CLI globally:

```bash
npm install -g vercel
```

2. Navigate to the project directory
3. Run the following command:

```bash
vercel
```

4. Follow the prompts to complete the deployment

#### Option 3: Direct Deployment

1. Install Vercel CLI globally:

```bash
npm install -g vercel
```

2. Navigate to the project directory
3. Run the following command for production deployment:

```bash
vercel --prod
```

## Project Structure

```
aonomy/
├── index.html          # Main HTML file
├── package.json        # Project configuration
├── README.md           # Project documentation
└── src/
    ├── css/
    │   └── styles.css  # Main stylesheet
    ├── js/
    │   └── main.js     # JavaScript functionality
    └── images/         # SVG images (inline in HTML)
```

## Customization

- **Colors**: Edit the CSS variables in `src/css/styles.css` to change the color scheme
- **Content**: Update the text in `index.html` to customize the content
- **Functionality**: Modify `src/js/main.js` to change the interactive features

## License

MIT