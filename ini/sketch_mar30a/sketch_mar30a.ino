#include <ArduinoJson.h>
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}
void loop() {
  DynamicJsonDocument doc(300);

  doc["temperature"] = getTemperatureValue();
  doc["humidity"] =  getHumidityValue();
  doc["WL"] =  getHumidityValue();

  serializeJson(doc, Serial);
  Serial.println();
  delay(60000);
}

int getTemperatureValue() {
  return random(21, 26);
}


int getHumidityValue() {
  return random(44, 60);
}

int getWLevel() {
  return random(20, 90);
}
