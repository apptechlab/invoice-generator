# Inovice generator

It is a web-based invoice generator application built with Next.js 13, TypeScript, React, and the Shadcn UI library. It provides an easy way to create and manage professional invoices.

![Invoice Generator Website image](/public/assets/img/invoify-web-app.png)

![To Download PDF](/public/assets/img/demo.png)
STEPS:
1. Click on generate PDF

2. Wait until it loads

3. You will get all the options like the screenshot above under the 
generate pdf button (Preview , Download, Print)

4. To save the invoice to history, click on save.

5. All history can be accessed from Load invoice button

### Additional Dependencies

- **Nodemailer:** Node.js module for sending emails.
- **Lucide Icons:** Collection of customizable SVG icons.

## Demo

> [!NOTE]

Follow these instructions to get Invoice generator up and running on your local machine.

### Prerequisites

- Node.js and npm installed on your system.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/apptechlab/invoice-generator.git
   cd invoice-generator
   ```
2. Install dependencies
   
   ```bash
   npm install
   ```
3. Create an .env.local file with this content (This step is for sending pdf to email feature):
   ```env
   NODEMAILER_EMAIL=your_email@example.com
   NODEMAILER_PW=your_email_password
   ```
4. Start development server

    ```bash
    npm run dev
    ```
5. Open your web browser and access the application at [http://localhost:3000](http://localhost:3000)
<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.