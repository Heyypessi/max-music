

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1381137638077235271", ], 
  mongodbUri : "mongodb+srv://prasad:prasad@musicbotyt.ouljyww.mongodb.net/?retryWrites=true&w=majority 
",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GlaceYT",
      password: "glaceyt",
      host: "5.39.63.207",
      port:  8262,
      secure: false
    }
  ]
}
