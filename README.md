#### **`💨 Instalación por termux`**

<details>
 <summary><b> 👉 Click para los ver Comandos</b></summary>

#### **🪄 Instalación manual por termux**
> copie y peguen en termux uno por uno 
```bash
termux-setup-storage 
```

```bash
apt update && apt upgrade && pkg install -y git nodejs ffmpeg imagemagick yarn && git clone https://github.com/REYESCDR/prueba&& cd prueba && yarn install && npm install
```

```bash
npm start
```
> si despues de poner el numero de WhatsApp, y sale letras en roja no se preocupe es normal 
---

#### **🟢 Activar en caso de detenerse en termux**

Si después de instalar el bot en Termux se detiene (pantalla en blanco, pérdida de conexión a Internet, reinicio del dispositivo), sigue estos pasos:

1. Abre Termux y navega al directorio del bot:
    ```bash
    cd prueba
    ```

2. Inicia el bot nuevamente:
    ```bash
    npm start
    ```

---

#### **🍬 Obtener otro codigo qr en termux**

Si después de instalar el bot en Termux y iniciar la session del bot (el numero se va a soporte, se cierra la conexión o demorastes al conectar), sigue estos pasos:

1. Abre Termux y navega al directorio del bot:
    ```bash
    cd prueba
    ```

2. Elimina la carpeta MiniSession:
    ```bash
    rm -rf MeguminSession
    ```

3. Inicia el bot nuevamente:
    ```bash
    npm start
    ```

---

### **😼 Para activar 24/7 (termux)**

> comando para obtener la bot 24/7 en termux

```bash
npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs
```

---

</details>

---
