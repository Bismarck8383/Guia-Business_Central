let introduccion = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Introducción</h2>
	<p class="parrafo">El lenguaje de aplicación (AL) es un lenguaje de programación que se usa para escribir código para Microsoft Dynamics 365 Business Central. Con AL, puede manipular datos, y las declaraciones y funciones pueden leer, escribir y cambiar datos en la base de datos de Business Central.</p>
	<p class="parrafo">Es importante que aprenda los conceptos básicos de desarrollo antes de comenzar a crear nuevas extensiones de AL para Business Central. También necesita comprender cómo definir variables y cómo usarlas.</p>
	<p class="parrafo">
	En este módulo, aprenderá a trabajar con variables y descubrirá las colecciones y los tipos de datos intrínsecos. Además, aprenderá más sobre el uso de asignaciones y las diferentes expresiones.
	</p>
	<p class="parrafo">Si quiere escribir código de programación para Business Central para manipular datos, conectarse a servicios web externos o realizar cálculos complejos, debe usar el lenguaje de aplicación (AL). El lenguaje de aplicación es un lenguaje de programación para Business Central y está escrito en Visual Studio Code.</p>
	<p class="parrafo">El lenguaje de aplicación le permite controlar la implementación de objetos e interactuar con el usuario. Además, el lenguaje de aplicación contiene un conjunto de funciones predefinidas que puede usar cuando escribe código, pero también puede desarrollar sus propias funciones personalizadas.</p>
	<p class="parrafo">En AL, puede tener desencadenadores de eventos o de funciones. Cada tipo de objeto de AL (Table, Page, CodeUnit, Report, etc.) tiene desencadenadores de eventos y sus nombres comienzan por On; por ejemplo, OnInsert, OnModify o OnDelete. Estos desencadenadores se inician cuando se produce un evento. Los desencadenadores disponibles dependen del tipo de objeto.</p>
	<p class="parrafo">También puede escribir sus propias funciones personalizadas en un objeto, que estarán accesibles en el objeto a través de desencadenadores de función. Estas funciones personalizadas se denominan Procedimientos.</p>
	<p class="parrafo">Al igual que en otros lenguajes de programación, el AL permite crear variables que puede usar en funciones para calcular o almacenar datos temporales.</p>
	<p class="parrafo">Microsoft Dynamics 365 Business Central es una aplicación completa de administración 
	empresarial. Se puede utilizar para agilizar los procesos comerciales en su empresa, conectar 
	departamentos individuales en toda la empresa y mejorar las interacciones con los clientes.</p>
	<div class="img-content">
	<img src="img/panel.png" alt="">
	</div>
	`;
	cuerpo.innerHTML= contenido;
}

let instalacionBussines = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Innstalacion de Bussines Central</h2>
	<p class="parrafo">Lo primero que debes de realizar es descargar la última versión de Business Central</p>
	<p class="parrafo"><a href="https://www.microsoft.com/en-us/download/details.aspx?id=104062">Descargar</a></p><br>
	<p class="parrafo"><a href="https://yzhums.com/26288/">Ultimas Versiones aquí</a></p>
	<div class="img-content">
	<img src="img/install.PNG" alt="">
	</div>
	<p class="parrafo">Pulsaremos instalación personalizada y seleccionaremos todo para instalar.</p>
	<h3>Requisitos mínimos para utilizar Business Central</h3>
	<div class="img-content">
	<img src="img/requisitos.PNG" alt="">
	</div>
	<p class="parrafo">Antes de que acceda a Business Central en línea, le recomendamos que verifique que su equipo o dispositivo móvil cumple o supera los requisitos mínimos del sistema para el producto. En este artículo se especifican los requisitos.</p>
	<p class="parrafo"><a href="https://docs.microsoft.com/es-es/dynamics365/business-central/product-requirements">Ver requisitos</a></p>

	`;

	cuerpo.innerHTML= contenido;

}

let instalacionVisual = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Instalacion de  Visual Studio Code</h2>
	<p class="parrafo">Nos descargamos el editor  con el que trabajaremos.</p>
	<p class="parrafo"><a href="https://code.visualstudio.com/download">Descargar Visual</a></p><br>
	<div class="img-content">
	<img src="img/visual.PNG" alt="">
	</div>
	<br>
	<p class="parrafo">Una vez instalado debemos instalar las extencion para el lenguaje AL y WALDO</p><br>
	<div class="img-content">
	<img src="img/AL.PNG" alt="">
	</div><br>
	<p class="parrafo">Waldo Extensiones</p>
	<div class="img-content">
	<img src="img/waldo.PNG" alt="">
	</div>	

	`;

	cuerpo.innerHTML= contenido;
}

let instalacionDoker = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Instalacion de Docker</h2>
	<p class="parrafo">Docker es el proyecto de software más conocido de todos los que facilitan una tecnología de virtualización basada en contenedores. Esta plataforma de código abierto está constituida por tres componentes principales, estos son, el motor de Docker, las imágenes Docker y el Docker Hub. Ejecutar un contenedor es posible gracias al motor Docker (Docker engine) y a las imágenesDocker, que bien pueden ser creadas por el usuario u obtenerse en el repositorio Docker Hub.</p>
	<p class="parrafo"><a href="https://www.docker.com/products/docker-desktop">Descargar Docker</a></p>
	<div class="img-content">
	<img src="img/docker.PNG" alt="">
	</div><br>
	<p class="parrafo">Guia de intslación de Docker</p>
	<p class="parrafo"><b>Nota : </b><br>Para realizar todos los pasos de instalación debemos tener permisos de administrador del sistema operativo, sin ellos no podremos obtener una instalación correcta.</p>
	<p class="parrafo"><a href="https://docs.docker.com/desktop/install/windows-install">Guia Docker</a></p>
	<div class="img-content">
	<img src="img/dockerReq.PNG" alt="">
	</div><br>
	<p class="parrafo">Habilite la característica WSL 2 en Windows. Para obtener instrucciones detalladas, consulte la documentación de Microsoft.</p>
	<p class="parrafo"><a href="https://docs.microsoft.com/en-us/windows/wsl/install">Documentacion WSL 2</a></p>
	<div class="img-content">
	<img src="img/wsl.PNG" alt="">
	</div><br>
	<p class="parrafo">
	Es muy importante que quede bien configurado el  WSL 2 en Windows , así cuando levantemos Docker no nos de problemas.
	</p>


	`;

	cuerpo.innerHTML= contenido;

}
/*====================
	Levantar Docker
	=====================*/
	let levantarDoker = () =>{
		let cuerpo = document.querySelector(".bodyContent");
		let contenido = `

		
		<h2 class="Subtitulos">Trabajar con imágenes y contenedores de Docker</h2>
		<p class="parrafo">Docker es el entorno de contenedor de software líder para todas las plataformas. Permite a los usuarios empaquetar aplicaciones con todas sus dependencias y distribuir ese paquete a otras máquinas. Estas maquinas se llaman hosts y pueden ejecutar un paquete como un entorno completamente aislado que está virtualizado. Un paquete se llama imagen.</p>
		<p class="parrafo">Una imagen de Docker es una plantilla con el número mínimo de archivos del sistema operativo y de aplicación que necesita para ejecutarse. Todo lo que necesita para ejecutar una aplicación está en la imagen. Las imágenes de Docker se almacenan en un registro de Docker donde los usuarios pueden cargar y descargar imágenes. El registro más conocido es Docker Hub, pero para Business Central (y otros productos de Microsoft), Microsoft hospeda su propio registro.</p>
		<p class="parrafo">Cada imagen está construida sobre una imagen base que contiene los archivos del sistema operativo. Los contenedores de Windows tienen cuatro imágenes base:</p>
		<div class="contentList">
		<ul>
		<li><b>Windows Server Core: </b>admite aplicaciones .NET Framework</li>
		<li><b>Nano Server: </b>creado para aplicaciones .NET Core</li>
		<li><b>Windows: </b> proporciona el conjunto completo de API de Windows</li>
		<li><b>Windows IoT Core: </b>creado para aplicaciones de IoT</li>
		</ul>
		</div>
		<p class="parrafo">El tamaño de la imagen depende en gran medida del tamaño de la imagen base. Las imágenes de Business Central se basan en la imagen de Windows Server Core.</p>
		<p class="parrafo">Una imagen de Docker a menudo se confunde con una máquina virtual, pero es diferente. No necesita un sistema operativo completo para ejecutarse porque usa el kernel del sistema operativo host. Para obtener el mejor rendimiento y menos problemas, los archivos base de la imagen se ajustan a la versión de su sistema operativo. Además, una imagen no tiene GUI y no puede conectarse mediante el protocolo de escritorio remoto (RDP) a lo que esté en la imagen.</p>
		<p class="parrafo">Cuando ejecuta la imagen, en realidad crea una instancia de esa imagen. Como resultado, todos los cambios que se crean se almacenan sobre la imagen, por lo que esta no se modifica. Una instancia de una imagen se conoce como contenedor. Puede crear instancias de varios contenedores a partir de la misma imagen, y todos almacenarán sus cambios en diferentes archivos y no interferirán entre sí.</p>
		<p class="parrafo">Los componentes principales de Docker son el <b>motor de Docker</b> y el <b>cliente de Docker</b>. El motor es el proceso o aplicación que implementa el trabajo real, mientras que el cliente se utiliza para comunicarse con el motor. </p>
		<p class="parrafo">Un contenedor de Docker se puede utilizar para configurar un entorno de desarrollo o prueba únicamente; Microsoft no admite contenedores de Docker para Business Central en un entorno de producción. Puede eliminar y volver a crear rápidamente un contenedor de Docker, razón por la cual todos los contenedores de Business Central se crean con la base de datos de Cronus. Puede iniciar un contenedor, desarrollar y probar su característica en la base de datos de Cronus y detener su contenedor. El mejor enfoque es crear un script en PowerShell que pueda usar para crear rápidamente un contenedor y guardar ese script, en lugar de intentar guardar el contenedor.</p>
		<h3>Instalar Docker en Windows</h3>
		<p class="parrafo">Para comenzar con Docker, primero debe instalarlo en la máquina de desarrollo. El tipo de instalación depende del sistema operativo. La instalación es diferente en una máquina con Windows 10 que en una con Windows Server. Debe contar al menos con Windows 10 Professional o Enterprise con la Actualización de aniversario (versión 1607), Windows Server 2016 o Windows Server 2019.</p>
		<p class="parrafo">Los contenedores de Windows en Docker pueden ejecutarse en dos modos distintos de aislamiento de tiempo de ejecución:</p>
		<div class="contentList">
		<ul>
		<li>Aislamiento de procesos</li>
		<li>Aislamiento de Hyper-V</li>
		</ul>
		</div>
		<p class="parrafo">Las diferencias entre estos modos se tratarán más adelante en este módulo. Dado que los contenedores de Windows pueden ejecutarse en dos modos distintos, tendrá que instalar o activar Hyper-V en la máquina de desarrollo. En Windows 10, Hyper-V debe ejecutar Docker, aunque no utilice el aislamiento de Hyper-V. Para instalar Hyper-V, también debe utilizar otros comandos de PowerShell en máquinas con Windows 10 y Windows Server.</p>
		<p class="parrafo">En Windows, busque Windows PowerShell y luego ejecútelo como <b>administrador</b>.</p>
		<div class="img-content2">
		<img src="img/docker01.png" alt="">
		</div>
		<p class="parrafo">En Windows 10, ejecute el siguiente comando para instalar Hyper-V:</p>
		<p class="parrafo"><b>Enable-WindowsOptionalFeature -Online -FeatureName Hyper-V</b></p>
		<p class="parrafo">En Windows Server, puede utilizar el siguiente comando:</p>
		<p class="parrafo"><b>Install-WindowsFeature Hyper-V</b></p>
		<p class="parrafo">Es posible que desee ejecutar Docker en una máquina virtual en lugar de hacerlo en su máquina local. Es posible que se produzca esta situación, pero debe configurar la opción Virtualización anidada, que no se trata en este módulo. Para obtener más información, consulte <a href="https://learn.microsoft.com/es-es/virtualization/hyper-v-on-windows/user-guide/nested-virtualization">Ejecutar Hyper-V en una máquina virtual con la virtualización anidada</a> .</p>
		<p class="parrafo">Después de realizar la instalación de Hyper-V, puede instalar Docker.</p>
		<p class="parrafo">Esta sección comienza con Windows Server, donde puede utilizar el módulo PowerShell publicado por Microsoft denominado DockerMicrosoftProvider. Este módulo habilita la característica de contenedor de Windows e instala el cliente y el motor de Docker.</p>
		<p class="parrafo"><b>1.</b>Abra <b>Windows PowerShell</b> como administrador (sesión de PowerShell con privilegios elevados) y ejecute el siguiente comando:</p>
		<p class="parrafo"><b>Install-Module -Name DockerMsftProvider -Repository PSGallery -Force</b></p>
		<p class="parrafo">Escriba Y (Sí) para aceptar.</p>
		<p class="parrafo"><b>2.</b>Instale el paquete con el comando Install-Package y escriba A (Sí a todo).</p>
		<p class="parrafo"><b>Install-Package -Name Docker -ProviderName DockerMsftProvider</b></p>
		<p class="parrafo"><b>3.</b>Reinicie la máquina.</p>
		<p class="parrafo"><b>Restart-Computer -Force</b></p>
		<p class="parrafo">En máquinas con Windows 10, no puede utilizar el módulo DockerMicrosoftProvider. Debe descargar e instalar Docker Desktop (<a href="https://docs.docker.com/desktop/install/windows-install/">Docker Desktop para Windows</a> ). Para ello, debe crear una cuenta gratuita de Docker. Durante la instalación, puede establecer el tipo de contenedor predeterminado en Contenedores de Windows. También puede cambiar el tipo después de la instalación. Por tanto, puede hacer clic con el botón derecho en el elemento Docker de la bandeja del sistema Windows y luego seleccionar Cambiar a contenedores de Windows.</p>
		<div class="img-content2">
		<img src="img/docker02.png" alt="">
		</div>
		<p class="parrafo">Después de la instalación, puede probar si Docker se ha instalado correctamente. Docker, y otros contenedores específicos, no son nuevos e incluso se han utilizado de forma considerable en el mundo Linux. Por tanto, trabajar con Docker implica trabajar con comandos. También tiene a su disposición otras herramientas de la interfaz gráfica del usuario que puede utilizar para ejecutar los comandos. En este módulo utilizará los comandos de Docker con la consola PowerShell y una extensión en Visual Studio Code.</p>
		<p class="parrafo">Para probar la instalación, puede ejecutar el siguiente comando con el fin de recuperar la versión instalada.</p>
		<p class="parrafo"><b>docker version</b></p>
		<h3>Usar BcContainerHelper</h3>
		<p class="parrafo">BcContainerHelper es una colección de scripts y cmdlets de PowerShell creados por Microsoft para ayudarle, como desarrollador, a crear y administrar contenedores para el desarrollo con Business Central. BcContainerHelper también es útil en un entorno DevOps para configurar canalizaciones de compilación que utilizan contenedores. Estos scripts proporcionan una forma sencilla de llevar a cabo muchas de las acciones más utilizadas en un contenedor de Business Central.</p>
		<p class="parrafo">Antes de poder comenzar, debe instalar este módulo en PowerShell. Abra un comando de PowerShell y use el cmdlet install-module.</p>
		<p class="parrafo"><b>install-module bccontainerhelper -Force</b></p>
		<h3>Usar BcContainerHelper</h3>
		<p class="parrafo">BcContainerHelper es una colección de scripts y cmdlets de PowerShell creados por Microsoft para ayudarle, como desarrollador, a crear y administrar contenedores para el desarrollo con Business Central. <b>BcContainerHelper</b>  también es útil en un entorno DevOps para configurar canalizaciones de compilación que utilizan contenedores. Estos scripts proporcionan una forma sencilla de llevar a cabo muchas de las acciones más utilizadas en un contenedor de Business Central.</p>
		<p class="parrafo">Para crear un nuevo contenedor, puede utilizar el cmdlet <b>New-BcContainer</b> en lugar del comando <b>docker run</b> . En el script, el cmdlet usa el comando <b>docker run</b>, pero solo proporciona un acceso y uso más fáciles.</p>
		<p class="parrafo">Antes de poder comenzar, debe instalar este módulo en PowerShell. Abra un comando de PowerShell y use el cmdlet install-module.</p>
		<p class="parrafo"><b>install-module bccontainerhelper -Force</b></p>
		<h3>Crear un nuevo contenedor de Business Central</h3>
		<p class="parrafo">Para crear un nuevo contenedor de Business Central, puede utilizar el cmdlet <b>New-BcContainer</b> . También puede hacer algo aún más sencillo: usar el cmdlet <b>New-BcContainerWizard</b> . Con este asistente, crear un nuevo contenedor de Business Central es más fácil. Este cmdlet es parte de <b>BcContainerHelper</b>. Sin embargo, es posible que haya una versión más reciente del script disponible en línea. Le recomendamos que utilice este script para iniciar el asistente.</p>
		<p class="parrafo"><b>Invoke-Expression (New-Object System.Net.WebClient)DownloadString("http://aka.ms/bcdockerscript")</b></p>
		<div class="img-content2">
		<img src="img/docker03.png" alt="">
		</div>
		<p class="parrafo">El asistente le ayudará a lo largo de los distintos pasos:</p>
		<p class="parrafo"><b>1.</b>Aceptar la licencia del usuario final.</p>
		<p class="parrafo"><b>2.</b>Seleccionar un contenedor local o una VM de Azure.</p>
		<div class="img-content">
		<img src="img/docker04.png" alt="">
		</div>
		<p class="parrafo"><b>3.</b>Configurar la autenticación deseada.</p>
		<div class="img-content">
		<img src="img/docker05.png" alt="">
		</div>
		<p class="parrafo"><b>4.</b>Configurar un nombre para el contenedor.</p>
		<p class="parrafo"><b>5.</b>Seleccionar una versión.</p>
		<div class="img-content">
		<img src="img/docker06.png" alt="">
		</div>
		<p class="parrafo"><b>6.</b>Seleccionar un país(es = España).</p>
		<div class="img-content">
		<img src="img/docker07.png" alt="">
		</div>
		<p class="parrafo"><b>7.</b>nstalar el Test Toolkit.</p>
		<div class="img-content">
		<img src="img/docker08.png" alt="">
		</div>
		<p class="parrafo"><b>8.</b>Asignar usuarios del Plan Premium si lo tuvieramos .</p>
		<p class="parrafo"><b>9.</b>Crear usuarios de prueba.</p>
		<p class="parrafo"><b>10.</b>Cargar una licencia(sí disponemos de una, sino la opción sin licencia).</p>
		<div class="img-content">
		<img src="img/docker09.png" alt="">
		</div>
		<p class="parrafo"><b>11.</b>Utilizar la base de datos de demostración de Cronus o conectarse a una base de datos existente.</p>
		<div class="img-content">
		<img src="img/docker10.png" alt="">
		</div>
		<p class="parrafo"><b>12.</b>Configurar DNS.</p>
		<p class="parrafo"><b>13.</b>Seleccionar proceso o aislamiento de Hyper-V.</p>
		<div class="img-content">
		<img src="img/docker11.png" alt="">
		</div>
		<p class="parrafo"><b>14.</b>Seleccionar el límite de memoria.</p>
		<p class="parrafo"><b>15.</b>Guardar la imagen.</p>
		<div class="img-content">
		<img src="img/docker12.png" alt="">
		</div>
		<p class="parrafo"><b>16.</b>Crear un script de PowerShell.</p>
		<p class="parrafo">El resultado y el paso final del proceso del asistente implican la creación de un script de PowerShell. Este script de PowerShell usará el cmdlet <b>New-BcContainer</b>  para ejecutar el contenedor. Puede guardar este script para usarlo más adelante.</p>
		<div class="img-content">
		<img src="img/docker13.png" alt="">
		</div>
		<p class="parrafo">El script generado se puede utilizar siempre que quiera crear un nuevo contenedor. El script generado usa el cmdlet <b>Get-BcArtifactUrl</b> para recuperar un vínculo al artefacto de Business Central. Este artefacto contiene la versión especificada de Business Central.</p>
		<div class="img-content">
		<img src="img/docker14.png" alt="">
		</div>
		<p class="parrafo">El cmdlet tiene algunos parámetros obligatorios, como <b>containerName</b> y <b>accept_eula</b>. El cmdlet <b>New-BcContainer</b> ofrece la práctica opción de <b>-updateHosts</b>, que crea automáticamente una entrada en su archivo de host local para registrar el nombre del contenedor con la dirección IP del contenedor.</p>
		<p class="parrafo">De forma predeterminada, la opción creará un contenedor con autenticación de Windows y le solicitará sus credenciales. Si usa sus credenciales locales de Windows, habilitará el inicio de sesión único (SSO). Para utilizar un nombre de usuario y una contraseña, puede utilizar la opción <b>-auth NavUserPassword</b>.</p>
		<div class="img-content">
		<img src="img/docker15.png" alt="">
		</div>
		<p class="parrafo">Esta opción mostrará información útil en la ventana de salida que puede proporcionar a Microsoft cuando haga preguntas o informe de errores. Asegúrese de incluir siempre la salida completa.</p>
		<h3>Eliminar un contenedor de Business Central</h3>
		<p class="parrafo">Eliminar un contenedor es sencillo con el comando Remove-BcContainer.</p>
		<p class="parrafo"><b>Remove-BCContainer -containerName MyDevContainer</b></p>

		`;

		cuerpo.innerHTML= contenido;

	}

/*================
Crear Nuevo Proyecto
=====================*/

let crearNuevoProyecto = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Crear un nuevo proyecto</h2>
	<p class="parrafo"> Para crear nuestro proyecto deberemos de poner en la paleta de comandos: “AL: Go!” con la combinacion de teclas Ctrl + Shift + P.</p>

	<div class="img-content">
	<img src="img/alGO.PNG" alt="">
	</div><br>
	<p class="parrafo">Seguido nos pedirá la ubicación donde deseamos almacenar el proyecto y el nombre del 
	proyecto.</p>
	<div class="img-content">
	<img src="img/ubica.PNG" alt="">
	</div><br>
	<p class="parrafo">Lo siguiente que debemos indicar es la versión que vamos a utilizar:</p>
	<p class="parrafo">Por último, nos indica si deseamos crearlo en el Cloud o en Local: seleccionamos local en 
	nuestro caso: “Your own server”.</p>
	<p class="parrafo">Una vez creado el proyecto deberemos de configurarlo, para ello iremos al archivo 
	“launch.json” y modificaremos los siguiente parámetros: en <b>Server : "http://bclocal" </b> contendra el nombre del localhost establecido en docker.</p>
	<div class="img-content">
	<img src="img/launch.PNG" alt="">
	</div><br>
	<div class="img-content">
	<img src="img/selecdocker.PNG" alt="">
	</div><br>
	<p class="parrafo">Descargaremos los <b>Symbols</b> con la combinación de teclas  Ctrl + Shift + P abrimos la paleta de comandos y escribimos <b> Al: Download Symbols</b> </p>
	<div class="img-content">
	<img src="img/symbols.PNG" alt="">
	</div><br>
	<p class="parrafo">Ya tendremos listo nuestro proyecto para empezar a trabajar.</p>
	<p><b>Nota : </b> En caso de tener errores al descargar los symbols lee el siguiente articulo para solucionar el problema.</p>
	<p class="parrafo"><a href="https://yzhums.com/1441">Solución Error Symbols</a></p>


	`;

	cuerpo.innerHTML= contenido;

}

/*Creacion de tablas*/

let crearTabla = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	
	<h2 class="Subtitulos">Creación de tablas</h2>
	<p class="parrafo">Para poder trabajar con variables y funciones, primero tiene que aprender algunos conceptos importantes. Los identificadores, la sintaxis y las variables son conceptos fundamentales de AL.</p>
	<p class="parrafo">Un identificador es el nombre de un elemento de programación, mientras que una variable es la ubicación de la memoria donde se almacenan los datos. Puede usar un identificador para dar un nombre a su variable para poder usarla.</p>
	<p class="parrafo">Sintaxis describe las reglas gramaticales para usar estos identificadores. La sintaxis de los identificadores se determina en función del lenguaje de la aplicación y algunas prácticas recomendadas.</p>
	<p class="parrafo">Existen algunas reglas gramaticales para usar identificadores. Dentro de un objeto, todos los identificadores tienen que ser únicos. Por lo tanto, dentro de un objeto, no puede declarar dos variables con el mismo identificador (o nombre).</p>

	<p class="parrafo">Cuando defina una variable mediante un identificador, es preferible que el primer carácter sea un guion bajo o una letra. Cuando utilice un carácter especial o un espacio en el identificador, debe poner el identificador entre comillas dobles.</p>
	<p class="parrafo">Aunque el lenguaje de la aplicación no distinga entre mayúsculas y minúsculas, no diferencia entre letras mayúsculas y minúsculas en los identificadores. Recomendamos que cree identificadores con PascalCase. PascalCase significa que comienza el nombre de la variable con una letra mayúscula. Si su nombre es una combinación de dos palabras, la segunda palabra también comienza con una letra mayúscula. Por ejemplo, si tiene una variable para almacenar el nombre de un cliente, puede usar CustomerName, que es un ejemplo de notación en PascalCase.</p>
	<p class="parrafo">La variable también debe tener un ámbito que defina dónde puede obtener acceso a la variable y usarla.

	Una variable se puede definir con un ámbito global o local. Si define el ámbito de la variable como global, la variable estará disponible en cualquier punto del objeto. Por lo tanto, en cada desencadenador, en cualquier lugar donde desee escribir declaraciones de código, tendrá esa variable disponible. Cuando el ámbito sea local, solo podrá obtener acceso a esa variable en el desencadenador específico del procedimiento donde se declaró.</p>
	<p class="parrafo">Una tabla se puede visualizar como matriz bidimensional formada por columnas y filas. Una tabla es una conjunto de datos relacionados que se mantienen en un formato estructurado de columnas y filas dentro de una base de datos. Dynamics 365 Business Central proporciona tablas para almacenar información de clientes, datos de proveedores, datos de artículos, etc.</p>
	<p class="parrafo">Una tabla consta de dos partes: los datos de la tabla y una descripción de la tabla. Los datos de la tabla contienen los registros reales con sus campos de datos. En la descripción de la tabla, puede definir qué tipo de tabla es, qué tipo de datos contendrá y cómo se comportarán.</p>
	<p class="parrafo">Por lo tanto, debe examinar las propiedades de la tabla y los desencadenadores de la tabla, ambos disponibles en el nivel de tabla. En las propiedades de la tabla, puede configurar el comportamiento de la tabla. En los desencadenadores de la tabla, tiene que escribir código que se ejecutará en ciertos momentos.</p>
	<p class="parrafo">La descripción de una tabla también incluye campos que definen qué tipo de datos puede contener la tabla. Un campo también tiene propiedades y desencadenadores. La descripción de la tabla también incluye información sobre las claves de la tabla. Una clave es necesaria para crear registros únicos, pero también para definir cómo puede ordenar los datos.</p>
	<div class="img-content2">
	<img src="img/table3.PNG" alt="">
	</div>
	<h3>Creando Tabla Persona</h3>
	<div class="img-content2">
	<img src="img/tabla1.PNG" alt="">
	</div>
	<p class="parrafo">En el enlace siguientes tienes un video como crear un tabla dentro de un proyecto.</p>
	<p class="parrafo"><a href="https://www.youtube.com/watch?v=KScp95TOVh8">Video Tutorial de Crear Tabla </a></p>
	<h3>Propiedades de Tablas</h3>
	<ul>
	<li><b>Caption: </b>Contiene el nombre de la tabla.</li>
	<li><b>Description:</b> Es la propiedad de uso para la documentación</li>
	<li><b>DataPerCompany: </b>: Este indica si solo es de esta empresa o común entre todas las 
	que tengamos.</li>
	<li><b>Permissions: </b> Esto nos permite otorgar permisos a los usuarios de la tabla.
	</li>
	<li><b>LookupPageId: </b> Esto nos permite indicar que Pagina es la predeterminada de la</li>
	<li><b>DrillDownPageID: </b> Esto nos permite definir qué página es la predeterminada para 
	profundizar en el detalle de soporte para los datos.
	</li>
	</ul>
	<h3>Tipos de datos fundamentales</h3>
	<p class="parrafo">Un tipo de datos fundamental no se puede dividir en subvalores y siempre tiene un valor.</p>
	<span><b>Numeric</b></span>
	<ul>
	<li>Action</li>
	<li>Integer</li>
	<li>BigInteger</li>
	<li>Decimal</li>
	<li>Option</li>
	<li>Char</li>
	<li>Byte</li>
	<li>Duration</li>
	</ul>
	<span><b>String</b></span>
	<ul>
	<li>Text</li>
	<li>Code</li>
	</ul>
	<span><b>Boolean</b></span>
	<ul>
	<li>True</li>
	<li>False</li>
	</ul>
	<span><b>Fechas</b></span>
	<ul>
	<li>Date</li>
	<li>Time</li>
	<li>DateTime</li>
	</ul>
	<p class="parrafo">El tipo de datos <b>Option</b> es un tipo de enumerador de base cero y, por lo tanto, permite convertir valores de opción en enteros. Por esa razón, un tipo de datos Option es un tipo de datos numérico, ya que los valores de opción se almacenan como números enteros.</p>
	<p class="parrafo">El tipo de datos <b>Char</b> está formado por un solo carácter y, por lo tanto, también se almacena como un número. Está usando el número de caracteres ASCII. Solo puede tener 256 caracteres, por lo que un carácter solo puede tener un valor de 0 a 255.</p>
	<p class="parrafo">El tipo de datos <b>Action</b> no está disponible como un tipo de datos para un campo de una tabla, pero se usa para especificar la acción que el usuario realiza en una página. Los métodos PAGE.RUNMODAL y RUNMODAL (que se abordarán más adelante en esta ruta de aprendizaje) devuelven un valor del tipo de datos Action. Están disponibles las siguientes acciones:</p>
	<p><b>Ok</b></p>
	<p><b>Cancel</b></p>
	<p><b>LookupOk</b></p>
	<p><b>LookupCancel</b></p>
	<p><b>Yes</b></p>
	<p><b>No</b></p>
	<p><b>RunObject</b></p>
	<p><b>RunSystem</b></p>
	<h3>Tipos de datos complejos</h3>
	<p class="parrafo">Puede usar tipos de datos complejos si desea trabajar con registros en tablas, imágenes (mapas de bits) o archivos de disco. Estos tipos de datos pueden almacenar múltiples valores. El lenguaje de la aplicación contiene numerosos tipos de datos Complejos:</p>
	<p><b>BigText</b></p>
	<p><b>BLOB</b></p>
	<p><b>CodeUnit</b></p>
	<p><b>DateFormula</b></p>
	<p><b>Dialog</b></p>
	<p><b>File</b></p>
	<p><b>Fieldref</b></p>
	<p><b>GUID</b></p>
	<p><b>InStream y OutStream</b></p>
	<p><b>KeyRef</b></p>
	<p><b>Page</b></p>
	<p><b>Query</b></p>
	<p><b>Record</b></p>
	<p><b>RecordID</b></p>
	<p><b>RecordRef</b></p>
	<p><b>Report</b></p>
	<p><b>System</b></p>
	<p><b>TableFilter</b></p>
	<p><b>Variant</b></p>
	<p><b>List y Dictionary</b></p>
	<p class="parrafo">El tipo de datos <b>Record</b> hace referencia a registros de una tabla específica. Los registros contienen varios valores, ya que incluyen múltiples campos.</p>
	<h3>Ejemplo Tabla Persona</h3>
	<p class="parrafo">En la tabla persona podemos ver la estructura de un tabla con sus campos.</p>
	<div class="img-content2">
	<img src="img/tablaPersona.PNG" alt="">
	</div>
	<h2>Identificar los diferentes tipos de tablas</h2>
	<p class="parrafo">Business Central contiene diferentes tipos de tablas según su implementación técnica y su uso funcional.</p>
	<h3>Tipos de tabla por implementación técnica</h3>
	<div class="contentList">  
	<ul>
	<li><b>Tablas de bases de datos:</b> a mayoría de las tablas de la base de datos son tablas de base de datos, que son el tipo de tabla que normalmente se ve. Usted tendrá derechos de lectura y escritura en las tablas de la base de datos. Las tablas de clientes, las tablas de proveedores y las tablas de artículos son ejemplos de este tipo de tabla.</li>
	<li><b>Tablas del sistema:</b> las tablas del sistema son únicas, porque estas tablas y sus datos son necesarios para que el sistema funcione. Las tablas del sistema se guardan en la base de datos y tendrán números de objetos superiores a dos millones. La tabla de la empresa, la tabla de perfiles y la tabla de permisos son ejemplos de este tipo de tabla.</li>
	<li><b>Tablas virtuales:</b> puede encontrar la definición de una tabla virtual en la base de datos, pero los datos se crean en tiempo de ejecución, por lo que no se almacenan en la base de datos. En su calidad de desarrollador no tendrá derecho de escritura en las tablas virtuales. La tabla de sesión activa es un ejemplo.</li>
	<li><b>Tablas temporales:</b> una tabla temporal solo existe en la memoria de un cliente. Conserva una imagen o una copia de otra tabla de base de datos. No tiene datos y se usa con frecuencia en la publicación de rutinas e informes de documentos.</li>
	</ul>
	</div>
	<h3>Tipos de tabla por uso funcional</h3>
	<p class="parrafo">Business Central distingue entre nueve tipos de tablas con un uso funcional diferente. En el siguiente diagrama se muestra un ejemplo para ayudarlo a hacerse una idea de cómo funcionan estas tablas en una solución.</p>
	<div class="img-content2">
	<img src="img/table4.PNG" alt="">
	</div>
	<p class="parrafo">Es importante saber en qué se diferencian los distintos tipos de tablas. Al crear tablas nuevas, tiene que determinar el tipo de tabla que necesita y seguir la misma estructura que las tablas ya existentes. La tabla que elija se ajustará a su solución en la aplicación Business Central. Como resultado, todos comprenderán su solución y será más fácil actualizarla más adelante.</p>
	<div class="contentList">
	<ul>
	<li><b>Tablas principales: </b> las tablas principales contienen información sobre las entidades más importantes del módulo, los temas principales de su área funcional. Las tablas de clientes, de proveedores y de artículos son ejemplos de estas tablas. </li>
	<li><b>Tablas complementarias: </b> probablemente, enriquecerá los datos maestros con datos complementarios. Puede almacenar datos relacionados con países, como el código y la descripción del país, en las tablas complementarias. Estas tablas no son tan importantes como las tablas principales, pero almacenan información adicional sobre los datos maestros. Las tablas de divisas o de idiomas son un ejemplo de este tipo de tabla.

	</li>
	<li><b>Tablas de configuración: </b>  cuando cree una solución, probablemente necesite la configuración de un determinado módulo. Puede establecer la configuración de los datos y organizarlos en una tabla de configuración. Las tablas de configuración de contabilidad y la tabla de configuración de ventas y cobros son ejemplos de este tipo de tabla.</li>
	<li><b>Tablas de registro: </b> este tipo de tabla funciona como una tabla de contenido para su tabla contable correspondiente. Registra tipos de información históricos y transaccionales. La tabla de registro de movimientos de contabilidad y la de registro de movimientos de producto son ejemplos de este tipo de tabla.</li>
	<li><b>Tablas secundarias: </b> esta tablas contienen una combinación de información de la tabla principal y las tablas complementarias, como, por ejemplo, información de artículos y proveedores. La tabla de productos proveedor y la tabla de A/F Libro amortización son ejemplos de este tipo de tabla.

	</li>
	<li><b>Tablas de libro mayor: </b> en las tablas de libro mayor, puede encontrar la información transaccional del dominio funcional relacionado. Las tablas de movimientos de cliente y las de movimiento de productos son ejemplos de este tipo de tabla.</li>
	<li><b>Tablas del diario: </b> todas las transacciones se reservan por medio de diarios, por lo que es la tabla de entrada de transacciones principal. La tabla del diario de compras y la tabla del diario de productos son ejemplos de este tipo de tabla.</li>
	<li><b>Tablas de documentos: </b> al introducir transacciones, necesitará documentos como, por ejemplo, una oferta de venta o un pedido de venta. Las tablas de documentos son tablas transaccionales secundarias. Estas tablas siempre se componen de dos tablas: una tabla con la información del encabezado y una tabla con los detalles de la línea. Por ejemplo, la tabla de encabezado de venta y la tabla de línea de venta son ejemplos de este tipo de tabla. Estas tablas contienen información como, por ejemplo, pedidos de venta u ofertas de venta.</li>
	<li><b>Tablas de historial de documentos: </b> las tablas de historial de documentos son versiones históricas de las tablas de documentos. Cuando publica documentos de las tablas de documentos, pasan por una tabla de diario y luego acaban en una tabla de historial de documentos. La tabla de cabecera de facturas de ventas y la tabla de línea de factura de ventas son ejemplos de tablas de historial de documentos.</li>
	</ul>
	</div>

	`;

	cuerpo.innerHTML= contenido;

}

/*Crear page card*/
let crearPageCard = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Creación de Un Page Card</h2>
	<p class="parrafo">Las páginas de tarjetas se diseñan cuando desea permitir que los usuarios vean, creen y modifiquen registros (datos maestros y de referencia) en una tabla, como un cliente, un proveedor o un artículo.</p>
	<p class="parrafo"><b>Ejemplo del Código de una Page Card</b></p>
	<div class="img-content2">
	<img src="img/PageCard.PNG" alt="">
	</div><br>
	<p class="parrafo">En el ejemplo vemos como podemos crear una page card, que nos servirá para visualizar los campos de la tabla persona.</p>
	<p class="parrafo">En el siguiente enlace podrás ver de manera más explicita como poder crear una Page Card.</p>
	<p class="parrafo"><a href="https://www.youtube.com/watch?v=d4fNXF9YSic">Crear Page Card Video >></a> </p>

	`;

	cuerpo.innerHTML= contenido;

}
/*Page Card*/
let crearPageList = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Creación de Una Page List</h2>
	<p class="parrafo">Desde la página de lista, los usuarios pueden seleccionar un registro y abrirlo en la página de tarjeta o documento para verlo y editarlo.</p>
	<div class="img-content2">
	<img src="img/pagelist.PNG" alt="">
	</div><br>
	<p class="parrafo">En el siguiente ejemplo , hemos creado una Page List, se pasa como referencia el nombre de la tabla, en este caso seria  <b>"SourceTable = Persona"</b> 
	y también  referenciamos hacia la Page Card <br><b>"CardPageId = PersonaCard".</b> </p>
	<p class="parrafo">Para Ver PResionamos CRTL + F5 y nos mostrara la interfaz de la página persona. </p>
	<div class="img-content2">
	<img src="img/pagelist2.PNG" alt="">
	</div><br>
	<p class="parrafo">Presionamos en nuevo y agregamos un registro a la base de datos persona</p>
	<div class="img-content2">
	<img src="img/pagelist3.PNG" alt="">
	</div>
	<p class="parrafo">Agregamos más clientes asi tenemos más registros.</p>
	<div class="img-content2">
	<img src="img/pagelist4.PNG" alt="">
	</div>
	<p class="parrafo">En las páginas de las tarjetas podemos reorganizar u ocultar el contenido como deseen los clientes obtener los datos.</p>

	`;

	cuerpo.innerHTML= contenido;

}
/*
Crear una codeunist
*/

let crearCodeunnits = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Creación de Una Codeunits</h2>
	<p class="parrafo">
	Una Cedeunits es un contenedor para que se llamen fragmentos de código AL desde otros objetos. Estas
	los fragmentos de código se denominan procedimientos. Los procedimientos se pueden llamar desde cualquiera de los otros
	Tipos de objetos de Business Central que pueden contener código AL. Las unidades de código también se pueden exponer
	(publicado) como servicios web. Esto permite que los procedimientos dentro de una Codeunits publicada sean
	invocado por llamadas externas o locales.
	</p>
	<p class="parrafo">
	Las codeunits se adaptan estructuralmente para contener solo procedimientos. Aun cuando los procedimientos
	podrían colocarse en otros tipos de objetos, los otros tipos de objetos tienen superestructuras que se relacionan
	a su uso principal diseñado, como páginas e informes.</p>
	<p class="parrafo">Las codeunits solo como contenedores para los procedimientos codificados AL. No tienen auxiliar
	procedimientos, ningún método de interacción directa con el usuario y ningún procesamiento predefinido. Incluso si nosotros
	están creando solo uno o dos procedimientos y están estrechamente relacionados con la actividad principal
	de un objeto en particular, y si estos procedimientos son necesarios tanto desde el interior como desde el exterior de
	el informe, la mejor práctica sigue siendo ubicar los procedimientos en una codeunits.</p>
	<p class="parrafo">Las <b>Codeunits</b> son en realidad archivos donde podremos guardar nuestras funciones o procesos, que luego podremos utilizarlos desde otras partes de nuestro proyecto.</p>
	<p class="parrafo"><a href="https://www.youtube.com/watch?v=yQ2JUpKCfs0">Crear Codeunits Video >></a></p>
	<div class="img-content2">
	<img src="img/codeunit1.PNG" alt="">
	</div><br>
	<p class="parrafo">En el siguiente ejemplo vemos como es la sintaxis de una codeunits.</p>
	<p class="parrafo">Para acceder al resto de funciones, puede usar el desencadenador OnAction.</p>

	`;

	cuerpo.innerHTML= contenido;

}
/*
actions*/
let crearAction = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Creación de los Actions</h2>
	<p class="parrafo">El elemento Actions representa el conjunto de acciones que están disponibles para realizarse en un mensaje cuando se cumplan las condiciones.</p>
	<p class="parrafo">En Dynamics 365 Business Central, las acciones se muestran en la parte superior de cada página, lo que se denomina barra de acciones. En este tema, aprenderá acerca de los diferentes tipos de acciones y cómo puede permitir que los usuarios localicen rápidamente las acciones que desean usar.</p>
	<div class="img-content2">
	<img src="img/actions1.PNG" alt="">
	</div>
	<p class="parrafo">En la imagen vemos como creamos un botón en la Page List de Persona, donde llama a la Codeunit funciones, que al presionar ella mostrara un mensaje en pantalla con el contenido de la codeunit.</p>
	<p class="parrafo"></p>
	<div class="img-content">
	<img src="img/actions2.PNG" alt="">
	</div>
	<div class="img-content2">
	<img src="img/actions3.PNG" alt="">
	</div>
	<h3>Tipos de acciones</h3>
	<p class="parrafo">Cada página tiene un conjunto diferente de acciones según el tipo de página y los procesos que admite la página. Para crear el conjunto apropiado de acciones para una página en particular, debe tener una buena comprensión de los procesos comerciales de su cliente.</p>
	<p class="parrafo">Cada proceso en una organización tiene varias acciones asociadas. Debe intentar crear un conjunto completo de acciones que reflejen todas las tareas y procesos que se realizan.</p>
	<p class="parrafo">
	Puede elegir entre los siguientes menús de acciones colocar las acciones en el área especificada.
	</p>
	<div class="img-content2">
	<img src="img/actions4.PNG" alt="">
	</div>

	`;

	cuerpo.innerHTML= contenido;

}

/*Enum*/
let ennum = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Enumeraciones</h2>
	<p class="parrafo">Un tipo de enumeración, también conocido como enumeración en programación, es una palabra clave utilizada para declarar un tipo que consiste en un conjunto de constantes con nombre. La lista de constantes con nombre se denomina lista de enumeración. Las enumeraciones se pueden usar como campos de tabla, variables locales y globales, y parámetros..</p>
	<p class="parrafo">
	Para declarar un en AL debe especificar un ID y un nombre. La lista de enumeración consta de valores y cada uno de los valores se declara con un identificador y un valor. El identificador de valor es el valor ordinal de la lista de enumeración y debe ser único. Cuando los valores de enumeración se muestran en la interfaz de usuario, se ordenan por el orden de declaración. Además, si la extensión B extiende la extensión A, los valores de enumeración declarados en la extensión A se muestran antes de los valores de enumeración declarados en la extensión B.enum
	</p>
	<p class="parrafo">En el siguiente ejemplo crearemos un Enum que se llamara Provincias, el cual usaremos en nuestra tabla Persona, adicionaremos un campo que tendrá para elegir las diferentes comunidades de España.</p>
	<div class="img-content2">
	<img src="img/ennum1.PNG" alt="">
	</div>
	<p class="parrafo">Agregamos el campo a nuestra tabla Persona, en este caso lo llamaremos Comunidad, Que obtendrá los valores de nuestra Enum Provincias.</p>
	<div class="img-content2">
	<img src="img/ennum2.PNG" alt="">
	</div>
	<p class="parrafo">Agregamos el campo Comunidad en nuestra PageList y nuestra PageCard.</p>
	<div class="img-content2">
	<img src="img/ennum3.PNG" alt="">
	</div>
	<p class="parrafo">Observamos que en la página Persona en el campo Comunidad se despliega las enumeraciones antes definidas con los nombres de las diferentes comunidades de España.</p>
	<div class="img-content2">
	<img src="img/ennum4.PNG" alt="">
	</div>

	`;

	cuerpo.innerHTML= contenido;

}

/*Opciones*/
let opciones = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Opciones</h2>
	<p class="parrafo">El tipo de datosb  <b>Option</b>  es un tipo de enumerador de base cero y, por lo tanto, permite convertir valores de <b>opción</b>  en enteros. Por esa razón, el tipo de datos Option es un tipo de datos numéricos, ya que los valores de <b>opción</b> se almacenan como números enteros.</p>
	<p class="parrafo">Para definir una variable de tipo <b>Option</b>, no puede usar la propiedad OptionMembers que se usa en un campo de tipo de datos <b>Option</b>. Debe enumerar las opciones disponibles como una lista separada por comas después de definir la variable.</p>
	<p class="parrafo">En el siguiente ejemplo vamos a agregar un campo a la tabla Persona, donde se pueda agregar el color de ojos, utilizara un option.</p>
	<div class="img-content2">
	<img src="img/option1.PNG" alt="">
	</div>
	<p class="parrafo">Después de agregar el campo color de ojos en la tabla Persona, agregaremos el mismo campo en la pageList y en la pageCard para visualizarlo en la interfaz.</p>
	<div class="img-content">
	<img src="img/option2.PNG" alt="">
	</div>
	<p class="parrafo">En la interfaz vemos como tenemos las diferentes opciones del campo color de ojos.</p>

	`;

	cuerpo.innerHTML= contenido;

}
/*Table relation*/

let tableRelation = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Relaciones entre tablas</h2>
	<p class="parrafo">La propiedad TableRelation le permite establecer búsquedas en otras tablas. Esta propiedad mostrará un menú desplegable en las páginas, donde un usuario puede seleccionar un valor de la tabla vinculada.. </p>
	<p class="parrafo">En este ejemplo vamos a crear una tabla que se llame Profesor, en el cual tendrá un IdProfesor, pero a su vez ese IdProfesor tendrá  el, Id de una persona, en este caso la relación será de la tabla Profesor hacia la tabla Persona a través del campo Id_Persona</p>
	<div class="img-content2">
	<img src="img/relation1.PNG" alt="">
	</div>
	<p class="parrafo">Con nuestra tabla profesor creada, crearemos también las diferentes páginas para poder visualizar en la interfaz, ProfesorList y ProfesorCard.</p>
	<div class="img-content2">
	<img src="img/relation2.PNG" alt="">
	</div>
	<p class="parrafo">En la interfaz vemos como en el campo Id_Persona con alias Nombre profesor, al seleccionar uno de ellos queda seleccionado el nombre del profesor.</p>
	<div class="img-content">
	<img src="img/relation3.PNG" alt="">
	</div>
	<h3>Relación de tabla filtrada</h3>
	<p class="parrafo">Una relación de tabla normal muestra todos los registros de la tabla vinculada. Con una relación de tabla filtrada, puede limitar los registros que se muestran mediante el uso de uno o varios filtros en los registros de la tabla. Como resultado, una relación de tabla filtrada solo muestra un subconjunto de los registros.</p>
	<p class="parrafo">En este ejemplo se muestra una aplicación sencilla de la propiedad para crear una consulta filtrando entre los registros para incluir sólo aquellos en los que los gastos de compra son superiores a 10.000.</p>
	<div class="img-content">
	<img src="img/table5.PNG" alt="">
	</div>

	`;

	cuerpo.innerHTML= contenido;

}

/*====================
Caldfiels
========================*/
let calcFields = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Que es un CALCFIELDS ?</h2>
	<p class="parrafo">Los CALCFIELDS son consultas de registros que se almacenan en campos virtuales que luego podemos visualizarlos en nuestras páginas.
	También puede utilizar la función CALCFIELDS para calcular objetos binarios grandes (BLOB).</p>
	<p class="parrafo">En el ejemplo siguiente se abre la tabla 18 (Customer) como una variable RecordRef denominada CustRecordref. La función FIND (RecordRef) selecciona el primer registro de la tabla y, a continuación, recorre todos los registros hasta que no se encuentra ningún registro. Para cada registro, la función FIELD (RecordRef) crea una variable FieldRef que se denomina MyFieldref para el campo Balance Due (campo 66), que es un campo de flujo. Se llama a la función CALCFIELD para actualizar el campo antes de que se muestren el ID de cliente y el saldo adeudado. De lo contrario, el saldo adeudado por cada registro se establecerá en 0.</p>
	<p class="parrafo">En este ejemplo se requiere que cree las siguientes variables y constantes de texto en las ventanas de C/AL Globals.

	</p>
	<div class="img-content2">
	<img src="img/calcfield1.PNG" alt="">
	</div>
	<p class="parrafo">Dentro de la Codeunit "CodenunitTest.al" creamos una función en la que nos mostrara el saldo de nuestros clientes, la función se llamara <b>UseCalcField()</b> </p>
	<div class="img-content2">
	<img src="img/calcfield2.PNG" alt="">
	</div>
	<p class="parrafo">En la PageLits de Persona agregaremos los Actions para que llamemos a nuestra función.</p>
	<div class="img-content2">
	<img src="img/calcfield3.PNG" alt="">
	</div>
	<p class="parrafo">El resultado al precionar en Acciones y luego en el boton Calcfield se nos abrira una venta como mensaje donde veremos los datos del cliente con el saldo en cuenta.</p>
	<div class="img-content2">
	<img src="img/calcfield4.PNG" alt="">
	</div>


	`;

	cuerpo.innerHTML= contenido;

}
/*============================
	Flowfield
	==========================*/
	let flowfield = () =>{
		let cuerpo = document.querySelector(".bodyContent");
		let contenido = `

		<h2 class="Subtitulos">Uso de FlowField</h2>
		<p class="parrafo">FlowFields no son campos físicos que se almacenan en la base de datos. Son una descripción de un cálculo y una ubicación para que se muestre el resultado. Dado que la información de FlowFields solo existe en tiempo de ejecución, los valores de FlowFields se inicializan automáticamente a 0 (cero).</p>
		<h3> Tipos  de  FlowFields</h3>

		<table class="tabla1">
		<tr>
		<th>Tipo de FlowField</th>
		<th>Tipo de Campo</th>
		<th>Descripción</th>
		</tr>
		<tr>
		<th>Sum</th>
		<td>Decimal,Integer,BigInteger o Duration</td>
		<td>Suma de un conjunto especificado en una columna de una tabla.</td>
		</tr>
		<tr>
		<th>Average</th>
		<td>Decima,Integer,BigInteger o Duration</td>
		<td>Valor medio de un conjunto especificado en una columna de una tabla.</td>
		</tr>
		<tr>
		<th>Exist</th>
		<td>Booleano</td>
		<td>Indica si existen registros en un conjunto especificado de una tabla.</td>
		</tr>
		<tr>
		<th>Count</th>
		<td>Entero</td>
		<td>  Número de registros de un conjunto especificado en una tabla.</td>
		</tr>
		<tr>
		<th>Min</th>
		<td>Cualquier</td>
		<td>  El valor mínimo de una columna de un conjunto especificado en una tabla.</td>
		</tr>
		<tr>
		<th>Max</th>
		<td>Cualquier</td>
		<td>  Valor máximo de una columna de un conjunto especificado en una tabla.</td>
		</tr>
		<tr>
		<th>Lookup</th>
		<td>Cualquier</td>
		<td>  Busca un valor en una columna de otra tabla.</td>
		</tr>
		</table><br>
		<p class="parrafo">En el siguiente Ejemplo crearemos una Page List que nos muestre  el ID del cliente, su nombre y si este tiene facturas pendientes por pagar.</p>
		<div class="img-content2">
		<img src="img/flowfield.PNG" alt="">
		</div>
		<p class="parrafo">
		FlowFields aumenta el rendimiento en actividades como el cálculo de facturas del cliente. En los sistemas de bases de datos tradicionales, esto implica una serie de accesos y cálculos antes de que un resultado esté disponible. Al usar FlowFields, el resultado está disponible de inmediato.
		</p>
		<div class="img-content2">
		<img src="img/flowfield1.PNG" alt="">
		</div>
		<p class="parrafo">En nuestra interfaz veremos la información extraída de nuestros Flowfields utilizados, vemos que nos muestra el Id del cliente, Nombre cliente y la cantidad de facturas por pagar.</p>
		<div class="img-content2">
		<img src="img/flowfield2.PNG" alt="">
		</div>

		`;

		cuerpo.innerHTML= contenido;

	}
/*==========================	
		Array
		=====================*/
		let arrayMetodo= () =>{
			let cuerpo = document.querySelector(".bodyContent");
			let contenido = `

			<h2 class="Subtitulos">Uso de Colecciones</h2>
			<p class="parrafo"><b>AL </b> dmite tres tipos de colecciones. Una colección es un tipo complejo que contiene múltiples valores en una variable. Todas esas colecciones están fuertemente tipificadas, lo que significa que no puede tener valores con diferentes tipos en la misma colección. Por ejemplo, no puede agregar valores de fecha en una colección que solo permite valores enteros. Los tres tipos de colecciones que AL admite son:</p>
			<div class="contentList">
			<ul>
			<li>Array</li>
			<li>List</li>
			<li>Diccionary</li>
			</ul>
			</div>
			<h3>Método Array</h3>
			<p class="parrafo">Un Array es una estructura de datos que contiene muchas variables, a las que se accede a través de índices calculados. Un índice es la ubicación de la variable almacenada en una matriz. Las variables contenidas en una matriz también se denominan elementos de la matriz. La matriz siempre almacena elementos del mismo tipo de datos.</p>
			<p class="parrafo">Una array contiene varios valores. Estos valores se almacenan en los elementos del array. Puede acceder a estos valores mediante el uso del índice, que también puede ser un valor almacenado en otra variable. Con este diseño, puede crear un bucle en el que incremente una determinada variable para recorrer cada elemento de una array. Puede definir cuántas dimensiones tendrá la array mediante el uso de la propiedad Dimension.</p>
			<p class="parrafo">Al crear una variable de un tipo de datos de array, primero debe definir cuántos elementos tendrá  el array. El Array más utilizado es el Array unidimensional, que es una lista de elementos con el mismo tipo de datos.</p>
			<div class="img-content">
			<img src="img/array1.PNG" alt="">
			</div>
			<p class="parrafo">
			En el siguiente ejemplo, dentro de una función declaramos un Array que tendrá 5 elementos y será de tipo texto en 
			sus campos, definimos una variable Num de tipo Integer que nos servirá como contador para recorrer el
			Array de Ciudades mediante un bucle for, luego mostraremos en una ventana de mensaje el nombre de las
			ciudades hasta el final de la extensión del array.
			</p>
			<div class="img-content2">
			<img src="img/array2.PNG" alt="">
			</div>
			<p class="parrafo">En el siguiente ejemplo instanciamos un Array de tipo text de extensión de 10,
			pero tendremos un segundo Array  que copiara información del primer Array, pero le diremos 
			que desde la posición 3 y un máximo de 5 campos.</p>
			<div class="img-content2">
			<img src="img/array3.PNG" alt="">
			</div>
			<p class="parrafo">Observamos que al ejecutar el action, nos mostrara en pantalla desde el campo 3,
			en este caso desde Barcelona en adelante.</p>
			<div class="img-content2">
			<img src="img/array4.PNG" alt="">
			</div>
			<p class="parrafo"><b>Nota</b></p>
			<p class="parrafo">Una matriz tiene un rango que determina el número de índices que es el tiempo que 
			se tarda en llegar a un elemento. Y si hay elementos que se repiten, su rango será el mismo que su
			primera aparición en la matriz. El rango de una matriz también se conoce como la dimensión de la matriz. 
			Una matriz con un rango de uno se denomina matriz unidimensional. Una matriz con un rango mayor que uno se 
			denomina matriz multidimensional. Las matrices multidimensionales de tamaño específico a menudo se denominan
			matrices bidimensionales, matrices tridimensionales, etc. Cada dimensión de una matriz tiene una longitud
			asociada, que es un número integral mayor o igual que cero. El número máximo de dimensiones es 10 y el 
			número total de elementos en todas las dimensiones es 1.000.000.</p>

			`;

			cuerpo.innerHTML= contenido;
		}

		let listas = () =>{
			let cuerpo = document.querySelector(".bodyContent");
			let contenido = `
			<h2 class="Subtitulos">Método List</h2>
			<p class="parrafo">El tipo de datos <b>List</b> se puede comparar con una array. El tipo List solo se puede usar con tipos fundamentales y representa una lista de valores fuertemente tipificados a los que se puede acceder por índice.</p>
			<p class="parrafo">Un tipo de datos List no requiere que defina cuántos elementos desea almacenar por adelantado (mientras que un tipo de datos Array sí lo requiere).</p>
			<p class="parrafo">Los métodos siguientes están disponibles en instancias del tipo de datos List.</p>

			<table class="tabla1">
			<tr>
			<th>Nombre del método</th>
			<th> Descripción</th>
			</tr>
			<tr>
			<th>Add(T)</th>
			<td>Agrega un valor al final de la lista.</td>
			</tr>
			<tr>
			<th>AddRange(T [, T,...])</th>
			<td> Agrega los elementos de la colección especificada al final de la lista.</td>
			</tr>
			<tr>
			<th>AddRange(List of [T])</th>
			<td> Agrega los elementos de la colección especificada al final de la lista.</td>
			</tr>
			<tr>
			<th>Contains(T)</th>
			<td> Determina si un elemento está en la Lista.</td>
			</tr>
			<tr>
			<th>Count()</th>
			<td> Obtiene el número de elementos contenidos en la lista.</td>
			</tr>
			<tr>
			<th>Get(Integer, var T)</th>
			<td>Obtiene el elemento en el índice especificado.</td>
			</tr>
			<tr>
			<th>Get(Integer)</th>
			<td> Obtiene el elemento en el índice especificado. Este método generará un error si el índice está fuera del intervalo válido.</td>
			</tr>
			<tr>
			<th>GetRange(Integer, Integer)</th>
			<td> Obtenga una copia superficial de una variedad de elementos en la fuente.</td>
			</tr>
			<tr>
			<th>GetRange(Integer, Integer, var List of [T])</th>
			<td>Obtenga una copia superficial de una variedad de elementos en la fuente.</td>
			</tr>
			<tr>
			<th>IndexOf(T)</th>
			<td> Busca el valor especificado y devuelve el índice basado en uno de la primera aparición dentro de toda la lista.</td>
			</tr>
			<tr>
			<th>Insert(Integer, T)</th>
			<td> Inserta un elemento en la lista en el índice especificado.</td>
			</tr>
			<tr>
			<th>LastIndexOf(T)</th>
			<td> Busca el valor especificado y devuelve el índice basado en uno de la última aparición dentro de toda la lista.</td>
			</tr>
			<tr>
			<th>Remove(T)</th>
			<td> Quita la primera aparición de un valor especificado de la lista.</td>
			</tr>
			<tr>
			<th>RemoveAt(Integer)</th>
			<td> Quita el elemento en el índice especificado de la Lista.</td>
			</tr>
			<tr>
			<th>RemoveRange(Integer, Integer)</th>
			<td>Quita una serie de elementos de la lista.</td>
			</tr>
			<tr>
			<th>Reverse()</th>
			<td> Invierte el orden de los elementos de toda la lista.</td>
			</tr>
			<tr>
			<th>Set(Integer, T)</th>
			<td>Establece el elemento en el índice especificado.</td>
			</tr>
			<tr>
			<th>Set(Integer, T, var T)</th>
			<td> Establece el elemento en el índice especificado.</td>
			</tr>
			</table>
			<br>
			<p class="parrafo">La Lista solo se puede usar con tipos simples, es decir, puede tener una Lista de [Entero] pero no puede tener una Lista de [Blob]. Del mismo modo, el tipo de datos List no admite la retención de registros instanciados. Para este propósito, use tablas temporales.</p>
			<p class="parrafo">Las listas están indexadas basadas en 1, es decir, la indexación de una lista comienza con 1.</p>
			<p class="parrafo">En el ejemplo creamos una lista de la tabla Cliente, donde mostraremos en mensaje el nombre y correo de cada cliente, lo recorremos con la funcción Foreach así nos muestra uno por uno.</p>
			<div class="img-content2">
			<img src="img/List1.PNG" alt="">
			</div>


			`;

			cuerpo.innerHTML= contenido;

		}
/*=================
Diccionary
==========*/
let diccionary = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Método diccionario</h2>
	<p class="parrafo">Representa una colección desordenada de claves y valores. El tipo de datos Diccionario está optimizado para una búsqueda rápida de valores.</p>
	<p class="parrafo">Los métodos siguientes están disponibles en instancias del tipo de datos Dictionary.</p>
	<table class="tabla1">
	<tr>
	<th>Nombre del método</th>
	<th>  Descripción</th>
	</tr>
	<tr>
	<td>Add(TKey, TValue)</td>
	<td>  Agrega la clave y el valor especificados al diccionario.</td>
	</tr>
	<tr>
	<td>ContainsKey(TKey)</td>
	<td>  Determina si el diccionario contiene la clave especificada.</td>
	</tr>
	<tr>
	<td>Count()</td>
	<td>  Obtiene el número de pares clave/valor contenidos en el diccionario.</td>
	</tr>
	<tr>
	<td>Get(TKey, var TValue)</td>
	<td>  Obtiene el valor asociado a la clave especificada.</td>
	</tr>
	<tr>
	<td>Get(TKey)</td>
	<td>  Obtiene el valor asociado a la clave especificada.</td>
	</tr>
	<tr>
	<td>Keys()</td>
	<td>  Obtiene una colección que contiene las claves del diccionario.</td>
	</tr>
	<tr>
	<td>Remove(TKey)</td>
	<td>  Quita el valor con la clave especificada del diccionario.</td>
	</tr>
	<tr>
	<td>Set(TKey, TValue)</td>
	<td>  Establece el valor asociado a la clave especificada.</td>
	</tr>
	<tr>
	<td>Set(TKey, TValue, var TValue)</td>
	<td>  Establece el valor asociado a la clave especificada.</td>
	</tr>
	<tr>
	<td>Values()</td>
	<td>  Obtiene una colección que contiene los valores del diccionario.</td>
	</tr>
	</table><br>
	<p class="parrafo">Cada adición al diccionario consta de un valor y su clave asociada. Cada clave de un diccionario debe ser única. Una clave no puede ser nula, pero un valor puede serlo, sólo cuando el tipo de valor es un tipo de referencia.</p>
	<p class="parrafo">El tipo de datos Dictionary no admite la retención de registros instanciados. Para este propósito, use tablas temporales.</p>
	<p class="parrafo">En el ejemplo siguiente, la variable representa el tipo de datos Dictionary para almacenar un valor que representa el número de apariciones para cada carácter en el archivo . Usando el método, se obtiene el número de ocurrencias para el carácter en la posición . Si devuelve false, significa que no hay ningún valor asociado a ese carácter, por lo que se agrega el valor 1. Si devuelve true, significa que el valor ya existe, por lo que se agrega al valor. El método agrega el par {key:value} al diccionario.countercustomerNameGetiiic + 1Add</p>
	<div class="img-content2">
	<img src="img/diccionary.PNG" alt="">
	</div>
	<p class="parrafo">Vemos un segundo ejemplo donde como agregar datos a un diccionario y leerlos</p>
	<div class="img-content2">
	<img src="img/diccionary2.PNG" alt="">
	</div>

	`;

	cuerpo.innerHTML= contenido;

}

/*====================
	table extención
	====================*/
	let tableExtend = () =>{
		let cuerpo = document.querySelector(".bodyContent");
		let contenido = `
		<h2 class="Subtitulos">Introduccións de las  extensiones de tabla  </h2>
		<p class="parrafo"><b>* </b>El objeto ExtensiónDeTabla se usa para extender tablas ya existentes de la aplicación Business Central. Es importante conocer los siguientes puntos clave de los objetos ExtensiónDeTabla.</p>
		<p class="parrafo"><b>* </b>Con una extensión de tabla, puede modificar algunas propiedades de la tabla, pero no todas. Por ejemplo, no puede cambiar las propiedades Id. y el Nombre.</p>
		<p class="parrafo"><b>* </b>Puede agregar campos nuevos y modificar algunas propiedades de campos ya existentes, pero no puede eliminar campos que ya existan. Si tiene un campo del tipo Texto o Código y desea cambiar 
		la longitud de ese campo, no puede hacerlo porque no es posible.</p>
		<p class="parrafo"><b>* </b>Puede crear claves nuevas secundarias pero no modificar ni eliminar claves ya existentes.</p>
		<p class="parrafo">La creación de una extensión de tabla es igual que la creación de una tabla, se usa el fragmento ttableext. Además, puede agregar campos como agregaría campos a una tabla normal mediante el fragmento tfield.</p>
		<p class="parrafo">Todas las extensiones de tablas tienen un nombre propio. Como se ha comentado anteriormente en el módulo Trabajar con tablas en Dynamics 365 Business Central, le recomendamos que utilice un prefijo o sufijo en el
		nombre del objeto para que sea único. Por cada campo de la extensión de tabla, tiene que especificar un prefijo o sufijo en el nombre del campo.</p>
		<div class="img-content2">
		<img src="img/extendtable.PNG" alt="">
		</div>
		<p class="parrafo">En este ejercicio vemos como agregamos un campo con nombre Facebook donde el campo facebook guardara la URL del cliente que nos lleve a su cuenta personal.</p>
		<div class="img-content2">
		<img src="img/extendtable2.PNG" alt="">
		</div>
		<p class="parrafo">Creamos la extencion de la Page en este caso seria la "Customer card", así podremos visualizar el nuevo campo en la tabla Customer.</p>
		<div class="img-content2">
		<img src="img/extendtable3.PNG" alt="">
		</div>
		<p class="parrafo">En la Parte visual de la tabla Customer podemos ver nuestro campo Facebook creado.</p>
		<div class="img-content2">
		<img src="img/extendtable4.PNG" alt="">
		</div>

		<p class="parrafo">Una extensión de tabla le permite sobrescribir algunas propiedades en la tabla y los campos. Sin embargo, la lista de propiedades que se pueden modificar es limitada.</p>
		<p class="parrafo">Solo puede cambiar las siguientes propiedades de tabla con una extensión de tabla:</p>
		<div class="contentList"> 
		<ul>
		<li>Caption</li>
		<li>DataCaptionFields</li>
		<li>Description</li>
		<li>DrillDownPageId</li>
		<li>LookupPageId</li>
		</ul>
		</div>
		<p class="parrafo">Del mismo modo, solo puede cambiar las siguientes propiedades de campo:</p>
		<div class="contentList">
		<ul>
		<li>BlankZero</li>
		<li>Caption</li>
		<li>CaptionClass</li>
		<li>Description</li>
		<li>OptionCaption (solo para la opción de tipo de datos)</li>
		<li>TableRelation</li>
		<li>Width (indica el tamaño de visualización de un campo en una página y no especifica la longitud de un campo en una tabla).</li>
		</ul>
		</div>
		<p class="parrafo">En este modulo hemos aprendido a crear una extensión de tabla con el fragmento ttableext.
		Una extensión de tabla se usa para agregar campos a una tabla existente. También puede usar extensiones de tabla para modificar 
		las propiedades de los campos existentes.</p>
		<p class="parrafo">No todas las propiedades del objeto Tabla están disponibles en el objeto ExtensiónDeTabla.</p>
		<p class="parrafo">Cuando agregue campos adicionales a una tabla existente, debe asegurarse de no utilizar los mismos 
		números o nombres de los campos ya existentes. Use prefijos o sufijos para identificar sus campos de forma exclusiva.</p>
		`;

		cuerpo.innerHTML= contenido;
	}

	/*=============================
		Reportes
		====================================*/

		let reportes = () =>{
			let cuerpo = document.querySelector(".bodyContent");
			let contenido = `
			
			<h2 class="Subtitulos">Creación de reportes</h2>
			<p class="parrafo"><b>Introducción</b></p>
			<p class="parrafo">Puede crear un objeto de informe en el entorno de desarrollo del lenguaje AL para definir el modelo de datos o el conjunto de datos de un informe. Puede estructurar y resumir información en un informe e imprimir documentos como ofertas de venta y facturas. En el proceso de diseño de informes se explican los pasos habituales de la creación de un nuevo informe. Puede crear el conjunto de datos de un informe agregando elementos de datos y columnas.</p>
			<p class="parrafo">Los informes se utilizan para imprimir o mostrar información de una base de datos. Puede usar un informe para estructurar y resumir información y para imprimir documentos como ofertas de venta y facturas.</p>
			<p class="parrafo">La creación de un informe consta de dos tareas principales:</p>
			<div class="contentList">
			<ul>
			<li>Crear el modelo de datos subyacente</li>
			<li>Definir el diseño visual que muestra los datos.</li>
			</ul>
			</div>
			<p class="parrafo">El objeto de informe define el modelo de datos subyacente y especifica de qué tablas y campos de la base de datos se extraerán los datos. Cuando se ejecuta el informe, esos datos se muestran en un diseño específico: el diseño visual, que determina el contenido y el formato de un informe cuando se visualiza e imprime.</p>
			<p class="parrafo">Puede crear el diseño de un informe organizando los elementos de datos y las columnas y especificando el formato general, como la fuente y el tamaño del texto. Dos tipos de diseños de informes son diseños de definición del informe del cliente (RDL) y diseños de Word. Los diseños RDL se definen en el Generador de informes de Microsoft SQL Server Reporting Services. Los diseños de Word se crean utilizando Microsoft Word. Los diseños de Word se basan en un documento de Word que incluye una parte XML personalizada que representa el conjunto de datos del informe.</p>
			<p class="parrafo">Al introducir el acceso directo<b> treport, </b>   se creará el diseño básico de un objeto de informe cuando esté utilizando la característica Extensión de AL en Visual Studio Code.</p>
			<p class="parrafo">En el siguiente ejemplo se muestra la lógica de muestra del uso del acceso directo treport.</p>
			<div class="img-content2">
			<img src="img/reporte1.PNG" alt="">
			</div> 
			<p class="parrafo">En el siguiente ejemplo crearemos un reporte sobre la tabla que estuvimos trabajando, la tabla <b>Persona</b> obtendremos mediante una reporte todos los datos que necesitemos.</p>
			<div class="img-content2">
			<img src="img/reporte2.PNG" alt="">
			</div> 
			<p class="parrafo">En el <b>dataitem(Persona; Persona)</b> le especificamos la tabla que usaremos para crear nuestro reporte.</p>
			<p class="parrafo">Al ejecutar nuestro programa se creara un archivo xml con los datos de nuestro reporte.</p>
			<div class="img-content2">
			<img src="img/reporte3.PNG" alt="">
			</div> 
			<p class="parrafo">Daremos click derecho sobre nuestro archivo creado Persona_report.rdl y lo editaremos con Power BI Report Builder.</p>
			<div class="img-content2">
			<img src="img/reporte4.PNG" alt="">
			</div> 
			<p class="parrafo">Para poder Visualizar nuestro reporte entraremos a la interfaz de Business Central y en la barra de busqueda introducimos PersonaReporte y le damos a la opcion imprimir, en el veremos los datos optenidos.</p>
			<div class="img-content2">
			<img src="img/reporte5.PNG" alt="">
			</div> 


			<p class="parrafo">Para crear un informe, puede usar el fragmento treport. Este fragmento genera el esqueleto del objeto de informe y, al usarlo, puede continuar diseñando un informe.
			El conjunto de datos de un informe contiene los elementos de datos del informe. Puede agregar uno o más elementos de datos a un informe. Puede utilizar el fragmento tdataitem para agregar un elemento de datos a un informe y el fragmento tcolumn para agregar una columna a un elemento de datos.</p>
			<p class="parrafo"> <a href="https://www.youtube.com/watch?v=0wh1TCYGryA">Video como crear un Reporte</a></p>

			`;

			cuerpo.innerHTML= contenido;

		}
/*===============================
	EVENTOS
	================================*/
	let eventos = () =>{
		let cuerpo = document.querySelector(".bodyContent");
		let contenido = `
		<h2 class="Subtitulos">Eventos en AL (Business Central)</h2>
		<p class="parrafo">En Microsoft Business Central también encontraremos algo básico a la hora de programar y/o usar un sistema que consiste en los eventos, de hecho, los eventos están presentes durante la ejecución de cualquier programa informático sea Web, escritorio y/o móvil. Un evento básicamente se produce cuando realizamos una acción en particular dentro de dicho programa. Por ejemplo, hacer clic en un botón.</p>
		<p class="parrafo">El uso de eventos es un concepto de programación probado y establecido que puede facilitar la actualización de la aplicación y limitar o incluso eliminar la necesidad de modificaciones de código en aplicaciones personalizadas debido a los cambios en la plataforma.</p>
		<p class="parrafo">Puede usar eventos para diseñar la aplicación para reaccionar a acciones o comportamientos específicos que se producen. Los eventos permiten separar la funcionalidad personalizada de la lógica de la aplicación.</p>
		<p class="parrafo"> Mediante el uso de eventos en la aplicación donde normalmente se realizan personalizaciones, puede reducir el costo de las modificaciones de código y las actualizaciones a la aplicación original.</p>
		<div class="contentList">
		<ul>
		<li>Las modificaciones de código a la funcionalidad personalizada se pueden realizar sin tener que modificar la aplicación original.</li>
		<li>Los cambios en el código de aplicación original se pueden realizar con un impacto mínimo en las personalizaciones.</li>
		</ul>
		</div>
		<p class="parrafo">En la tabla siguiente se describen todos los tipos de eventos diferentes:</p>
		<table class="tabla1">
		<tr>
		<th>Tipos de eventos</th>
		<th>Descripción</th>
		</tr>
		<tr>
		<td><b>BusinessEvent</b></td>
		<td>Especifica el método que se va a tratar como publicador de eventos de tipo de negocio.</td>
		</tr>
		<tr>
		<td><b>IntegrationEvent</b></td>
		<td>Especifica el método que se va a usar el publicador de eventos de tipo de integración.</td>
		</tr>
		<tr>
		<td><b>InternalEvent</b></td>
		<td>Especifica el método para ser un publicador de eventos interno.</td>
		</tr>
		<tr>
		<td><b>Global</b></td>
		<td>Especifica el método para que sea un publicador de eventos interno.</td>
		</tr>
		<tr>
		<td><b>Trigger</b></td>
		<td>El tiempo de ejecución publica los eventos de desencadenador.</td>
		</tr>
		</table>
		<p class="parrafo">El proceso para implementar estos eventos es ligeramente diferente. Para obtener más información sobre los diferentes tipos, consulte Tipos de eventos.</p>
		<p class="parrafo">Más información en la guía de Business Central<a href="https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-events-in-al"> Aquí</a></p>
		<h3>Cómo funcionan los eventos</h3>
		<p class="parrafo">El principio básico es que se programan eventos en la aplicación para ejecutar un comportamiento personalizado cuando se producen. Los eventos de AL se modelan después de Microsoft .NET Framework. Hay tres participantes importantes involucrados en eventos: el evento, un editor y un suscriptor.</p>
		<div class="contentList">
		<ul>
		<li>Un <b>evento</b> es la declaración de la ocurrencia o cambio en la aplicación. Un evento se declara mediante un método AL, que se conoce como una función de publicador de eventos. Un método de publicador de eventos se compone únicamente de una firma y no ejecuta ningún código.</li>
		<li>Un <b>publicador</b> es el objeto que contiene el método de publicador de eventos que declara el evento. El editor expone un evento en la aplicación a los suscriptores, esencialmente proporcionándoles un punto de conexión en la aplicación.</li>
		<li>Un <b>suscriptor</b>  escucha y controla un evento publicado. Un suscriptor es un método AL que se suscribe a un método de publicador de eventos específico e incluye la lógica para controlar el evento. Cuando se genera un evento, se llama al método de suscriptor y se ejecuta su código. Un suscriptor permite a los socios conectarse a la funcionalidad principal de la aplicación sin tener que realizar modificaciones de código tradicionales. Cualquier proveedor de soluciones de Dynamics 365, que también incluye Microsoft, puede usar suscriptores de eventos.</li>
		</ul>
		</div>


		<p class="parrafo"><b>Nota : </b> Debemos tener en cuenta que en Business Central no se puede tocar (modificar) el código nativo, tal como se hacía en Microsoft Dynamics NAV. En Business Central, únicamente se pueden suscribirse a eventos y manejarlos desde algún CodeUnit personalizado.</p>
		<p class="parrafo">En el Siguiente ejemplo vemos como implementar un evento suscriptor.</p>
		<div class="img-content2">
		<img src="img/event1.PNG" alt="">
		</div>
		<p class="parrafo">En la imagen vemos que mediante una codeunit "Event Suscribers" no suscribimos a un evento de la tabla Customer, lo llamamos <b>"OnBeforeValidateEventPhoneNo"</b>, el mismo llamara una Procedure Local que tendrá las diferentes validación para el campo teléfono de la tabla clientes.</p>
		<p class="parrafo">
		En las validaciones le decimos que el campo teléfono no podrá tener caracteres especiales o letras, sino nos dará error..
		</p>
		<p class="parrafo">Al establecer los argumentos de acuerdo con la siguiente tabla. Para argumentos opcionales, si no desea establecer un valor, use un valor vacío ( ''). En este caso, se utiliza el valor predeterminado, si lo hay.     </p>
		<table class="tabla1">
		<tr>
		<th>Argumento</th>
		<th>  Descripción</th>
		<th>Opcional</th>
		</tr>
		<tr>
		<td><b>&lt;Event Publisher Object Type&gt;</b></td>
		<td>Especifique el tipo de objeto que publica el evento. Este argumento puede ser Codeunit, Page, Report, Tableo XMLPort.</td>
		<td>no</td>
		</tr>
		<tr>
		<td><b>&lt;Event Publisher Object&gt;</b></td>
		<td>  Especifique el objeto que publica el evento. Puede establecer este argumento en el ID, como 50100, o la forma recomendada es utilizar el nombre del objeto mediante la sintaxis &lt;Object Type&gt;::"&lt;Object Name&gt;", como Codeunit::"MyPublishers", o para activadores de bases de datos Database::"Customer".</td>
		<td>no</td>
		</tr>
		<tr>
		<td><b>&lt;Published Event Name&gt;</b></td>
		<td>Especifique el nombre del método que publica el evento en el objeto especificado por el &lt;Event Publisher Object&gt;parámetro.</td>
		<td>no</td>
		</tr>
		<tr>
		<td><b>&lt;Published Event Element Name&gt;</b></td>
		<td>Especifica el campo de la tabla al que pertenece el evento desencadenante. Este argumento solo requiere un valor para los eventos desencadenantes de la base de datos, es decir, cuando &lt;Event Publisher Object Type&gt;se establece en Tabley el &lt;Published Event Name&gt;argumento es un evento desencadenante de validación, como OnAfterValidateEvent.</td>
		<td>no</td>
		</tr>
		<tr>
		<td><b>&lt;SkipOnMissingLicense&gt;</b></td>
		<td>Establézcalo en truepara omitir la llamada al método de suscriptor de eventos si la licencia del usuario no cubre la unidad de código del suscriptor de eventos. Si false, se arroja un error y la ejecución del código se detiene. falsees el predeterminado.</td>
		<td>sí</td>
		</tr>
		<tr>
		<td><b>&lt;SkipOnMissingPermission&gt;</b></td>
		<td>Establézcalo en truepara omitir la llamada al método de suscriptor de eventos si el usuario no tiene los permisos correctos para la unidad de código del suscriptor de eventos. Si false, se arroja un error y la ejecución del código se detiene. falsees el predeterminado.</td>
		<td>sí</td>
		</tr>
		</table>
		<br>

		<p class="parrafo"> <b>Nota: <br></b>Hay un par de cosas que pueden facilitar la definición de un método de suscriptor de eventos. Puede usar el <b>teventsub</b> fragmento para comenzar. Luego, al escribir el método abreviado de teclado 
		<b>Ctrl+Espacio</b> , se muestra IntelliSense para ayudarlo a completar los argumentos de los atributos y descubrir qué eventos están disponibles. O use el atajo de teclado 
		<b>Shift+Alt+E</b> para buscar el evento al que desea suscribirse e inserte el código.</p>
		<div class="img-content2">
		<img src="img/event2.PNG" alt="">
		</div>
		<p class="parrafo"> Observamos que al escribir texto en el campo teléfono nos salta un error y no podremos guardar los cambios hasta introducir números enteros dentro del campo teléfono.</p>
		<p class="parrafo">Documentación de Creación de un método de suscriptor de eventos <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-subscribing-to-events">Aquí</a>.</p>
		<p class="parrafo">Videos sobre como funciona los eventos : </p>
		<div class="contentList">
		<ul>
		<li><a href="https://www.youtube.com/watch?v=_MiBa2Fms1g">Single Instance EventSubscribers in AL and Business Central</a></li>
		<li><a href="https://www.youtube.com/watch?v=vLCdLmrXmZE">Easy implement Event Subscribers in AL</a></li>
		</ul>
		</div>


		`;

		cuerpo.innerHTML= contenido;

	}

/*
let tableRelation = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `


	`;

	cuerpo.innerHTML= contenido;

	}
	*/