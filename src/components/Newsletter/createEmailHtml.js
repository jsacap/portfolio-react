export default function createEmailHtml(content) {
    // Adding inline CSS to ensure images do not exceed the width of the container
    const modifiedContent = content.replace(/<img /g, '<img style="max-width: 100%; height: auto;" ');

    return `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                
            </style>
        </head>
        <body>
            <table role="presentation" width="100%" style="border-collapse: collapse;">
                <tr>
                    <td align="center">
                        <table role="presentation" width="600" style="border-collapse: collapse;">
                            <tr>
                                <td style="padding: 20px; border: 1px solid #dcdcdc; background-color: #ffffff;">
                                    ${modifiedContent}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `;
}
