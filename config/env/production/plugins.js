module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'strapi-provider-email-brevo',
      providerOptions: {
        apiKey: env("SMTP_KEY"),
      },
      settings: {
        defaultSenderEmail: 'wongames@ficticious-email.com',
        defaultSenderName: 'Won Games (Ficticious)',
        defaultReplyTo: 'wongames@ficticious-email.com',
      },
    },
  },
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("CLOUDINARY_NAME"),
      api_key: env("CLOUDINARY_KEY"),
      api_secret: env("CLOUDINARY_SECRET"),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
});
