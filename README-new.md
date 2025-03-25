# Aonomy Website Redesign

A modern, responsive website for Aonomy Logistics, inspired by WeFreight design principles.

## Features

- Modern, responsive design with split-screen hero section
- User-friendly interface with intuitive navigation
- Interactive service tabs with SVG illustrations
- Custom duty verification form
- Integrated chatbot for customer support
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
├── index-new.html        # Main HTML file (redesigned)
├── package.json          # Project configuration
├── vercel.json           # Vercel deployment configuration
├── README-new.md         # Project documentation
└── src/
    ├── css/
    │   ├── styles.css    # Original stylesheet
    │   └── styles-new.css # Redesigned stylesheet
    ├── js/
    │   ├── main.js       # Original JavaScript
    │   └── main-new.js   # Redesigned JavaScript with chatbot
    └── images/           # SVG images (inline in HTML/JS)
```

## Redesign Highlights

1. **Split-Screen Hero Section**: Inspired by WeFreight's design, the hero section now features a split-screen layout with a clear value proposition on the left and tracking functionality on the right.

2. **Service Tabs with SVG Illustrations**: The services section now features interactive tabs with SVG illustrations that change dynamically when users select different services.

3. **Integrated Chatbot**: A new chatbot feature has been added to provide instant support to users, answering common questions about tracking, quotes, and customs clearance.

4. **Quick Action Quote Form**: A prominent quote form has been added to the top of the page, making it easy for users to request shipping quotes.

5. **Modern Color Scheme**: The redesign maintains Aonomy's brand colors (deep blue, gold, and teal) while applying them in a more modern and consistent way.

## Implementation Notes

- The redesign uses inline SVGs instead of image files for better performance and scalability.
- The chatbot is implemented with vanilla JavaScript and can be easily extended with more advanced functionality.
- The design is fully responsive and works well on all screen sizes.

## Switching Between Original and Redesigned Versions

To view the original version:
- Open `index.html` in your browser
- Use the original CSS and JS files

To view the redesigned version:
- Open `index-new.html` in your browser
- The redesigned version uses the new CSS and JS files

## License

MIT