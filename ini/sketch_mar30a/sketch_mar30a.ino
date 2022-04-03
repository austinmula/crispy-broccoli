#include <LiquidCrystal_I2C.h>
#include <ArduinoJson.h>
#include <dht.h>

#define dht_apin A0 // Analog Pin sensor is connected to
#define Float_Switch 9
dht DHT;
LiquidCrystal_I2C lcd(0x27, 16, 2); // I2C address 0x27, 16 column and 2 rows

int ledPin = 4;
int pirPin = 3;
int pirStat = 0;
int alarm = 8;
int temp, humidity, WL;
String FS,P;

void setup()
{
  lcd.init(); // initialize the lcd
  lcd.backlight();
  pinMode(alarm, OUTPUT);
  pinMode(pirPin, INPUT);
  pinMode(Float_Switch, INPUT_PULLUP);
  light();
  Serial.begin(9600);
}

void loop()
{
  flswitch();
  motion();
  ht();
  waterlevel();

   DynamicJsonDocument doc(300);
  //  StaticJsonDocument <300> doc;   //Declaring static JSON buffer

  doc["temperature"] = temp;
  doc["humidity"] =  humidity;
  doc["WL"] =  WL;
  doc["FS"] =  FS;
  doc["Motion"] =  P;

  serializeJson(doc, Serial);
  Serial.println();
  delay(15000);
}


void flswitch() {
  if (digitalRead(Float_Switch) == HIGH)
  {
    //   Serial.println("full!!!");
    lcd.setCursor(8, 1);         // move cursor to   (0, 0)
    lcd.print("FS=Full :D");
    FS="FULL";

  }

  else
  {
    //    Serial.println("Water empty!!!");
    lcd.setCursor(8, 1);         // move cursor to   (0, 0)
    lcd.print("FS=empty");
    tone(alarm, 200, 300);
    FS="empty";
    delay(500);
    
  }
}

void waterlevel() {
  //  Serial.print("water level= ");
  //  Serial.println(analogRead(A1));
  WL = analogRead(A1);
  lcd.setCursor(0, 1);         // move cursor to   (0, 0)
  lcd.print("WL=");
  lcd.setCursor(3, 1);         // move cursor to   (0, 0)
  lcd.print(analogRead(A1));

}



void light() {

  lcd.setCursor(2, 0);         // move cursor to   (2, 1)
  lcd.print("Iot Hydroponics"); // print message at (2, 1)
  lcd.setCursor(2, 1);         // move cursor to   (2, 1)
  lcd.print("Mula & Najash"); // print message at (2, 1)
  delay(10000);
  lcd.clear();

}

void motion() {
  pirStat = digitalRead(pirPin);
  if (pirStat == HIGH) {            // if motion detected
    digitalWrite(ledPin, HIGH);  // turn LED ON
    //Serial.println("Hey I got you!!!");
    P="ON";
  }
  else {
    digitalWrite(ledPin, LOW); // turn LED OFF if we have no motion
    P="OFF";
  }
}


void ht()
{
  DHT.read11(dht_apin);

  //Serial.print("Current humidity = ");
  //Serial.print(DHT.humidity);
  humidity = DHT.humidity;
  lcd.setCursor(1, 0);         // move cursor to   (0, 0)
  lcd.print("H=");
  lcd.setCursor(3, 0);         // move cursor to   (0, 0)
  lcd.print(DHT.humidity);
 // Serial.print("%  ");
 // Serial.print("temperature = ");
 // Serial.print(DHT.temperature);
 temp = DHT.temperature;
  lcd.setCursor(9, 0);         // move cursor to   (0, 0)
  lcd.print("T=");
  lcd.setCursor(11, 0);         // move cursor to   (0, 0)
  lcd.print(DHT.temperature);
 // Serial.println("C  ");

  delay(5000);//Wait 5 seconds before accessing sensor again.
}
