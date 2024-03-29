
    const getSensorReadings = require('./get-sensor-readings')
    var admin = require('firebase-admin')
    
  
    
    const serviceAccount = require('path-to-your-firebase-key')

   
    
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "replace it with your database URL"
});

    const db = admin.database()
    const temperatureRef = db.ref('temperature')
    const humidityRef = db.ref('humidity')


    setInterval(() => {
      /**
       * Retrieve sensor readings
       */
      getSensorReadings((err, temperature, humidity) => {
        if (err) {
          
          return console.error(err)
        }

        
        temperatureRef.set(temperature)
        humidityRef.set(humidity)
      })
    }, 4000)
