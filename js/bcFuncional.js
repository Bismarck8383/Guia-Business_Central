/*============================
	Introducción business Central
	===============================*/

	let introBc = () =>{
		let cuerpo = document.querySelector(".bodyContent");
		let contenido = `
		<h2 class="Subtitulos">Introducción a Business Central</h2>
		<p class="parrafo">Dynamics 365 Business Central, creada y optimizada para la pequeña y mediana empresa, es una aplicación para las empresas que han dejado atrás las aplicaciones empresariales de nivel básico.</p>
		<p class="parrafo">Las empresas en desarrollo a menudo superan el software de contabilidad básico o los sistemas de planificación de recursos empresariales (ERP) heredados que no pueden tratar el inventario y las transacciones en aumento, carecen de integración con otros sistemas de línea de negocio y tienen limitaciones de informes. Las empresas también se deben enfrentar a la logística de proporcionar servicios que tengan más escalabilidad, movilidad y disponibilidad en la nube.</p>
		<p class="parrafo">Estas son las características típicas de un sistema de solución empresarial integral en la nube:</p>
		<div class="contentList">
		<ul>
		<li>Basado en la nube</li>
		<li>Base de datos común</li>
		<li>Compatible con varios dominios de negocio</li>
		<li>Funcionalidades integradas y modulares</li>
		<li>Disponibilidad de datos en tiempo real</li>
		<li>Roles laborales y autorización</li>
		</ul>
		</div>

		<p class="parrafo">Todas estas características distintivas de una solución empresarial integral en la nube se encuentran dentro de Business Central, que lo prepara a usted y a su organización para conectar las operaciones financieras, las ventas, los proyectos, los servicios y las operaciones.</p>
		<p class="parrafo">Con Business Central, puede administrar las operaciones financieras, automatizar y proteger su cadena de suministro, vender de forma más elegante, mejorar el rendimiento del servicio al cliente y de los proyectos, y optimizar las operaciones.</p>
		<p class="parrafo">Business Central conecta a personas y procesos con una solución única, unificada y completa en la nube, y proporciona a las organizaciones una vista integral de sus negocios.</p>
		<p class="parrafo">Como muestra la siguiente ilustración, Business Central extrae automáticamente los sistemas y los procesos, lo que permite a los usuarios administrar las finanzas, las ventas, los servicios y las operaciones.</p>
		<div class="img-content2">
		<img src="img/diagram.png" alt="">
		</div>
		<p class="parrafo">Business Central permite a las organizaciones:</p>
		<div class="contentList">
		<ul>
		<li>Trabajar desde la nube.</li>
		<li>Obtener acceso a datos precisos, actuales, para tomar decisiones de la manera más informada posible.</li>
		<li>Hacer que los datos estén disponibles inmediatamente en cualquier lugar y en cualquier dispositivo después de que se hayan introducido en el sistema.</li>
		<li>Compartir los datos de forma rápida y sencilla con personas clave de la empresa.

		</li>
		<li>Aumentar la visibilidad a través de las cadenas de suministro para obtener un mayor control de los procesos de compra.</li>
		<li>Maximizar las oportunidades de ingresos y prestar un mejor servicio a los clientes con recomendaciones y presupuestos integrados, así como el seguimiento del progreso de los proyectos con datos en tiempo real de los recursos disponibles.</li>
		<li>Acelerar el cierre financiero y generar informes con precisión, mientras se garantiza la conformidad.</li>
		<li>Simplificar las operaciones de fabricación y almacenamiento para ofrecer los productos a tiempo y reducir los costes.</li>
		<li>Usar Microsoft AppSource para conectar con aplicaciones de terceros para llevar correctamente los negocios, incluidos sistemas de nóminas, banca, CRM y otros sistemas específicos del sector.</li>
		<li>Ayudar a proteger la información del acceso no autorizado mediante sistemas y configuración de seguridad avanzada.</li>
		<li>Integrar otros servicios en la nube de Microsoft, como Microsoft 365.</li>
		</ul>

		</div>

		`;

		cuerpo.innerHTML= contenido;

	}
	/*=======================
		Suscripciones
		==========================*/


		let suscripciones = () =>{
			let cuerpo = document.querySelector(".bodyContent");
			let contenido = `
			<h2 class="Subtitulos">Identificar los tipos de suscripción disponibles para Business Central</h2>
			<p class="parrafo">Business Central está disponible tanto para los usuarios internos como externos.</p>
			<p class="parrafo">La siguiente ilustración aclara la diferencia entre los usuarios internos y externos.</p>
			<div class="img-content2">
			<img src="img/internal-external-users.png" alt="">
			</div>
			<h3>Requisitos de licencia para usuarios internos</h3>
			<p class="parrafo">La funcionalidad de Business Central se ofrece a través del usuario de Business Central Essentials o Premium. La licencia principal es por suscripción del usuario designado.</p>
			<p class="parrafo">Con Business Central, debe obtener la licencia de al menos un usuario Business Central Essentials o Premium. El acceso adicional a la funcionalidad del servicio por parte de otros usuarios se autoriza con la licencia de Dynamics 365 Business Central Team Members.</p>
			<h3>Usuario designado</h3>
			<p class="parrafo">La licencia de suscripción del usuario o SL, se asigna en base a un "usuario designado", lo que significa que cada usuario requiere una licencia de suscripción de usuario independiente. La SL de usuario no se puede compartir, pero una persona con una SL de usuario puede acceder al servicio mediante varios dispositivos.</p>
			<h3>No permanente</h3>
			<p class="parrafo">La SL de usuario permite a los usuarios con derechos no permanentes (sin derechos de adquisición) usar el servicio de Dynamics 365 Business Central. Siempre que esté al día con los pagos de su suscripción y se adhiera a las condiciones del producto y a las condiciones del servicio en línea, tendrá acceso a la versión más actualizada de Business Central.</p>
			<h3>Tipos de licencia por suscripción de Microsoft Dynamics 365</h3>
			<p class="parrafo">Microsoft Dynamics 365 simplifica la obtención de licencias para las aplicaciones empresariales. En las suscripciones de usuario de Microsoft Dynamics 365 se clasifican a los usuarios en dos tipos: usuarios completos y usuarios adicionales.</p>
			<h3>Usuarios completos</h3>
			<p class="parrafo">Los usuarios completos son aquellos cuyo trabajo requiere el uso de la funcionalidad de las aplicaciones empresariales con muchas funciones. Los ejemplos de usuarios completos son los vendedores, representantes del servicio al cliente, empleados de finanzas, supervisores y directores de cadena de suministro. También nos hemos referido anteriormente a estos usuarios como usuarios profesionales o usuarios avanzados. Estos usuarios completos disponen de una licencia de suscripción de Dynamics 365 Business Central.</p>
			<h3>Usuarios adicionales</h3>
			<p class="parrafo">Los usuarios adicionales suelen representar un porcentaje significativo de usuarios de una organización que puede consumir datos e informes de sistemas empresariales o completar tareas ligeras como la introducción de tiempo o gastos, y las actualizaciones de registro de RR. HH. De forma alternativa, estos usuarios también pueden ser usuarios más frecuentes del sistema que no requieren capacidades de usuario completas. Los usuarios adicionales reciben licencias con los miembros del equipo de Dynamics 365 Business Central.</p>
			<div class="img-content">
			<img src="img/full-additional-users.png" alt="">
			</div>
			<p class="parrafo">Los miembros de equipo de Dynamics 365 Business Central requieren que al menos otro usuario tenga licencia con Dynamics 365 Business Central Essentials o Dynamics 365 Business Central Premium.</p>
			<h3>Dynamics 365 Business Central Essentials</h3>
			<p class="parrafo">La funcionalidad que se ofrece con Essentials incluye:</p>
			<div class="contentList">
			<ul>
			<li>Gestión financiera</li>
			<li>Administración de relaciones con clientes</li>
			<li>Administración de proyectos</li>
			<li>Administración de cadenas de suministros</li>
			<li>Gestión de Recursos Humanos</li>
			<li>Gestión de almacenes</li>
			</ul>
			</div>
			<h3>Dynamics 365 Business Central Premium</h3>
			<p class="parrafo">La funcionalidad que se ofrece con Premium incluye:</p>
			<div class="contentList">
			<ul>
			<li><b>Todas las funciones de Essentials</b></li>
			<li>Administración de servicios</li>
			<li>Fabricación</li>
			</ul>
			</div>
			<h3>Team Members</h3>
			<p class="parrafo">Los derechos de uso de Dynamics 365 Business Central Team Members son los siguientes:</p>
			<div class="contentList">
			<ul>
			<li>Leer cualquier cosa de Dynamics 365 Business Central.</li>
			<li>Actualizar los datos y movimientos existentes en Dynamics 365 Business Central: los datos existentes se definen como registros, ya sean del cliente, del proveedor o de productos, que ya están creados. Los movimientos indican aquellos movimientos en los que se permite, desde una perspectiva contable, actualizar información específica, por ejemplo, una fecha de vencimiento en los movimientos del cliente.</li>
			<li>Aprobar o rechazar las tareas en todos los flujos de trabajo asignados a un usuario.</li>
			<li>Crear, editar o eliminar una oferta.</li>
			<li>Crear, editar o eliminar información personal.</li>
			<li>Especificar un parte de horas para los trabajos.</li>
			<li>Usar Power Apps para Dynamics 365.</li>
			<li>El módulo de aplicación Team Members no se puede personalizar con más de 15 entidades personalizadas, que están disponibles para la licencia de Dynamics 365 Team.</li>
			</ul>
			</div>
			<h3>Requisitos de licencia para usuarios externos</h3>
			<p class="parrafo">Los usuarios externos son clientes finales y usuarios de terceros de la organización o de sus filiales y no requieren SL para tener acceso a Dynamics 365. El acceso de los usuarios externos se incluye en las SL de los usuarios internos de la organización.</p>
			<p class="parrafo">Los usuarios externos no pueden utilizar ningún cliente proporcionado por la Interfaz de programación de aplicaciones (API) de Dynamics 365 Business Central, como el cliente web, la aplicación de iPad o iPhone, o la aplicación de Android.</p>
			<p class="parrafo">Además, los usuarios externos incluyen proveedores externos que no tienen una relación similar a la de un empleado con la organización o sus filiales (por ejemplo, proveedores de soporte técnico de TI que prestan servicios a varias organizaciones de clientes). Sin embargo, el acceso de usuario externo no se aplica al cliente o a los contratistas, proveedores o agentes de la filial del cliente que proporcionan procesos empresariales en nombre del cliente o que utilizan Microsoft Dynamics 365 para gestionar cualquier parte de su negocio.</p>
			<p class="parrafo">En este sentido, un cliente no puede utilizar Microsoft Dynamics 365 para proporcionar servicios de externalización de procesos de negocio a sus clientes.</p>


			`;

			cuerpo.innerHTML= contenido;

		}
/*===============
 Configuracion
 ===============*/

 let configuracion = () =>{
 	let cuerpo = document.querySelector(".bodyContent");
 	let contenido = `
 	<h2 class="Subtitulos">Cambiar la configuración básica</h2>
 	<p class="parrafo">En la página<b> Mi configuración</b>, puede ver y cambiar la configuración básica de su Business Central. Los cambios que realice sólo afectan a su área de trabajo; no a las áreas de trabajo de otros usuarios.</p>
 	<p class="parrafo">Al abrir en Mi configuración veremos las siguientes opciones </p>
 	<div class="img-content2">
 	<img src="img/config1.PNG" alt="">
 	</div>
 	<h3>Cambiar el rol</h3>
 	<p class="parrafo">El rol pedido es Administrador de negocio, pero puede seleccionar otro rol para usar un área de trabajo que se adapte mejor a sus necesidades.</p>
 	<div class="contentList">
 	<ul >
 	<li>En la esquina superior derecha, elija el icono Configuración Configuración. y, a continuación, elija la acción Mi configuración.</li>
 	<li>En la página Mi configuración, en el campo Rol, seleccione el rol que desea usar de forma predeterminada. Por ejemplo, seleccione Contable.</li>
 	<li>Elija Aceptar.</li>
 	</ul>
 	</div>
 	<p class="parrafo">El rol determina la página de inicio, una pantalla de inicio que está designada para las necesidades específicas del trabajo en una empresa. Dependiendo de su rol, la página de inicio o el área de trabajo le brinda una descripción general del negocio, su departamento o sus tareas personales. También le ayuda a navegar por sus tareas diarias y encontrar el trabajo que le asignaron.</p>
 	<h3>Compañía</h3>
 	<p class="parrafo">Una empresa funciona como un contenedor de datos en Business Central. Puede haber múltiples empresas en una base de datos, pero solo se puede seleccionar una a la vez. La empresa predeterminada se llama CRONUS y solo contiene datos de demostración.</p>
 	<p class="parrafo">El campo Empresa muestra la empresa en la que trabaja actualmente y puede usarlo para cambiar a otra empresa. El nombre de la empresa siempre se muestra en la esquina superior izquierda y funciona como una acción que puede elegir para volver al área de trabajo.</p>
 	<h3>Fecha de trabajo</h3>
 	<p class="parrafo">La fecha de trabajo más utilizada es la fecha actual. Es posible que tenga que cambiar temporalmente la fecha de trabajo para realizar tareas como la finalización de las transacciones de una fecha que no sea hoy.</p>
 	<p class="parrafo">En todos los campos de fecha, escriba h para introducir rápidamente la fecha de hoy y escriba t para introducir rápidamente la fecha de trabajo, que es el valor en el campo Fecha de trabajo en la página Mi configuración.</p>
 	<p class="parrafo"><b>Nota <br> </b>Después de modificar la fecha de trabajo, si cierra la sesión o cambia a otra empresa, los datos de trabajo vuelven a la fecha de trabajo predeterminada. Por lo tanto, la próxima vez que inicie sesión o vuelva a cambiar a la empresa original, es posible que tenga que volver a establecer la fecha de trabajo.</p>
 	<p class="parrafo">La fecha de trabajo es fundamental en las páginas que se pueden editar. Siempre que la fecha de trabajo no se establezca en la fecha de hoy en una página editable, aparecen dos tipos de indicadores en la página:</p>
 	<div class="contentList">
 	<ul>
 	<li>Aparece un recordatorio en la parte superior de la página que le indica cuál es la fecha de trabajo establecida. El recordatorio proporciona un vínculo directo a la configuración de la fecha de trabajo en la página Mi configuración para que pueda cambiar la fecha si lo desea. Desde el recordatorio, también puede elegir descartarlo para el resto de la sesión. A menos que cambie la fecha de trabajo a "hoy", el recordatorio aparecerá la próxima vez que inicie sesión.</li>
 	<li>Si descarta el recordatorio, la fecha de trabajo aparecerá en el título de la página</li>
 	</ul>
 	</div>
 	<p class="parrafo">Si la fecha de trabajo no está establecida en el día actual (hoy), la fecha de trabajo actual aparece en la esquina superior izquierda de todas las páginas donde puede editar datos.</p>
 	<h3>Región</h3>
 	<p class="parrafo">El valor Región determina cómo se muestran o se forman las fechas, los tiempos, los números, y divisas. También determina qué carácter se usa como separador decimal cuando se usa un teclado numérico para introducir datos</p>
 	<h3>Zona horaria</h3>
 	<p class="parrafo">Define la zona horaria en la que se encuentra. Cuando inicia sesión por primera vez en Business Central, la zona horaria se establece en función de la dirección de su empresa. Cámbiela si no se ajusta a su ubicación física.</p>
 	<h3>Notificaciones</h3>
 	<p class="parrafo">Seleccione el vínculo Cambiar cuándo recibo notificaciones para ver o cambiar las notificaciones que recibe sobre determinados eventos o cambios de estado, cuando va a facturar a un cliente que tiene un saldo vencido o cuando el inventario disponible es inferior a la cantidad que va a vender, por ejemplo.</p>

 	<h3>Consejos didácticos</h3>
 	<p class="parrafo">Algunas páginas muestran un consejo didáctico con una breve introducción a la página. Desactive los consejos didácticos si no está interesado en ver estas breves introducciones cuando abra las páginas correspondientes. Si desactiva los consejos didácticos, aún puede abrir el consejo didáctico para una página específica eligiendo el título de la página en la esquina superior izquierda.</p>
 	<p class="parrafo">Videos tutoriales para familiarizarse con el uso de la aplicación <a href="https://www.youtube.com/channel/UCXgBG6LrPPIRO7yPToFBD8A/videos">Aquí</a></p>
 	`;

 	cuerpo.innerHTML= contenido;

 }
 /*============================
		Crear Empresa
		================================= */
		let crearEmpresa = () =>{
			let cuerpo = document.querySelector(".bodyContent");
			let contenido = `

			<h2 class="Subtitulos">Crear nuevas en empresas en Business Central</h2>
			<p class="parrafo">En Business Central, el contenedor para datos empresariales que pertenece a una unidad de negocio o entidad legal se denomina empresa. Cuando se registra en Business Central, recibe una empresa de demostración y una empresa vacía, Mi empresa. Cambiar entre las empresas es fácil, solo tiene que ir a Mi configuración y cambiar a la otra empresa. Pero también puede crear nuevas empresas en Business Central, según sus necesidades comerciales.</p>
			<p class="parrafo">Al crear una empresa nueva, una guía de configuración asistida le ayuda a obtener los elementos básicos. A continuación, puede importar datos relevantes de su sistema heredado u otra empresa en Business Central.</p>
			<div class="img-content2">
			<img src="img/crearEmpresa.PNG" alt="">
			</div>
			<h3>Elegir la plantilla adecuada</h3>
			<p class="parrafo">Si decide agregar una empresa al Business Central, puede utilizar la guía de configuración asistida Crear nueva empresa para comenzar. El asistente de configuración está disponible en la página Empresas y en la búsqueda en el campo Empresa en la página Mi configuración.</p>
			<p class="parrafo">El asistente de configuración ofrece dos plantillas y una opción en blanco:</p>
			<div class="contentList">
			<ul>
			<li><b>Evaluación - Datos de ejemplo</b><br>Crea una empresa similar a la compañía de demostración con datos de ejemplo y datos de configuración. Este tipo de empresa está a su disposición sin necesidad de cambiar a un período de prueba de 30 días, lo que hacen los otros tipos.</li>
			<li><b>Producción - Solo datos de configuración</b><br>Crea una empresa similar a Mi empresa con datos de configuración pero sin datos de ejemplo. Podrá usar esta empresa durante un periodo de evaluación de 30 días.</li>
			<li><b>Crear nuevo - No hay datos</b><br>Crea una empresa en blanco sin datos de configuración. Podrá usar esta empresa durante un periodo de evaluación de 30 días.</li>
			</ul>
			</div>
			<p class="parrafo">Si desea empezar fácilmente con una empresa nueva, elija Producción - Solo datos de configuración y, a continuación, importe sus propios datos empresariales, como clientes, productos, y proveedores. Seleccione la plantilla Nuevo si desea configurar todos los parámetros desde cero. En ese caso, puede utilizar la guía de configuración asistida Configuración de la empresa para obtener ayuda con los datos esenciales de configuración.</p>
			<p class="parrafo"><b>Nota</b><br>Al crear una empresa nueva, tarda algunos minutos antes de tener acceso en Business Central. El estado de configuración de la página Empresas muestra cuando la nueva empresa está lista. A continuación, puede cambiar a la nueva empresa mediante <b>Mi configuración.</b></p>
			<h3>Copiar una empresa</h3>
			<p class="parrafo">En la página Empresas, puede usar la acción Copiar para crear una segunda empresa basada en los contenidos de una empresa existente. Eso es útil, por ejemplo, cuando desea probar una empresa sin interrumpir los datos de producción.</p>
			<div class="img-content2">
			<img src="img/CopiarEmpresa.PNG" alt="">
			</div>
			<p class="parrafo"><b>Nota</b><br>Esta función no se puede utilizar para hacer una copia de seguridad de una empresa. Hacer una copia de seguridad de la empresa comienza exportando la base de datos como un archivo .bacpac.</p>
			<h3>Establecer la empresa</h3>
			<p class="parrafo">Cuando inicie sesión en una empresa nueva, se ejecutará el asistente Configuración de la empresa automáticamente y le ayudará a empezar. Se le pedirá información sobre su empresa, como la dirección, los datos bancarios y el método de cálculo de costes de inventario. Pedimos esta información porque se utiliza como base para muchas áreas en Business Central que no tendrá que configurar manualmente más adelante.</p>
			<p class="parrafo">Por ejemplo, Business Central incluye la dirección de su empresa en las facturas y otros documentos y su información bancaria en los pagos. El método de coste se utiliza para calcular los precios y la valoración del inventario.</p>
			<p class="parrafo">Una vez que tenga los elementos básicos, puede configurar las áreas restantes. A continuación, puede agregar datos empresariales, como clientes y proveedores.</p>
			

			`;

			cuerpo.innerHTML= contenido;

		}
/*======================
Paquetes Configuracion
===========================*/
let rapidStart = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Paquetes de configuración (Rapid start)</h2>
	<p class="parrafo">Los paquetes de configuración son agrupaciones de una clase concreta de datos. Estos pueden ser datos referentes a clientes, proveedores, productos, plan de cuentas, etc.</p>
	<p class="parrafo">Cada paquete de configuración está compuesto por una serie de tablas relacionadas. Es decir, si tenemos un paquete de datos para subir los datos de clientes, en este caso, deberemos añadir tablas relacionadas con estos, como por ejemplo la tabla 18 (Cliente), 287 (Banco cliente), 19 (descuento factura cliente), entre otras como pueden ser la 7002 (precio venta) o 5717 (referencia cruzada).</p>
	<p class="parrafo">Deberemos añadir todas aquellas tablas de las cuales tengamos datos, y queramos que estés se cubran al importar la ficha correspondiente.  </p>
	<h3> Crear un paquete de configuración.</h3>
	<p class="parrafo">El primer paso a realizar es la creación del paquete, para ellos nos iremos a los paquetes de configuración (podemos acceder a través del buscador tecleando “paquetes de configuración”) y le daremos a nuevo, en donde emergerá la siguiente ventana.</p>
	<div class="img-content">
	<img src="img/rapid1.png" alt="">
	</div>
	<p class="parrafo">En ella, deberemos asignar un código y descripción única que identifique nuestro paquete, una numeración de versión (este dato es opcional pero nos ayudará a llevar un control de versiones de un mismo paquete de configuración) y un Id. Idioma.</p>
	<h3>Seleccionar compos incluidos</h3>
	<p class="parrafo">A continuación, deberemos ir seleccionando los campos que nos interesan importar de cada tabla. Para ello clicaremos en “nº de campos disponibles” O nos iremos a Tabla – Campos.</p>
	<p class="parrafo">Independientemente de la opción elegida, marcaremos con un check los campos que vamos a incluir, y los campos que, además, queremos que se validen, como se ve en la siguiente imagen:</p>
	<div class="img-content2">
	<img src="img/rapid2.PNG" alt="">
	</div>
	<p class="parrafo">Antes de continuar, deberemos entender varios conceptos. En primer lugar, los campos que se muestran en la imagen  y las diferencias entre ellos.</p>
	<div class="contentList">
	<ul>
	<li><b>Número de campos disponibles:</b> Campos totales que contiene cada tabla.</li>
	<li><b>Número de campos incluidos:</b>  Son los campos que vamos a incluir en nuestro paquete.</li>
	<li><b>Número de campos para validar:</b> Son aquellos campos que Navision validará cada vez que se</li>
	</ul>
	</div>

	<p class="parrafo">Y, en segundo lugar, es necesario saber que existen campos que no podremos desmarcar, ya que son campos con información indispensable de la tabla seleccionada (clave única), por lo tanto, estos serán no editables. Estos campos son los que nos van a identificar cada registro.</p>
	<h3>Exportar a Excel</h3>
	<p class="parrafo">Una vez tengamos claro la tabla y los campos que vamos a necesitaremos, exportaremos a Excel las tablas que componen nuestro paquete de configuración y qeu nos servirá de plantilla para luego importar los datos. Para ello deberemos, clicar en el icono “Exportar a Excel” tal y como muestra la captura siguiente:</p>
	<div class="img-content2">
	<img src="img/rapid3.PNG" alt="">
	</div>
	<p class="parrafo">Como vemos en la imagen tenemos los datos de las tres tablas con sus campos seleccionadas.</p>
	<p class="parrafo">Videotutorial como crear paquetes de configuración, <a href="https://www.youtube.com/watch?v=_wMZ6FEnUbE&t=1s">aquí</a></p>

	`;

	cuerpo.innerHTML= contenido;

}
/*=================
	Serie Numerica
	====================*/
	let serieNumerica = () =>{
		let cuerpo = document.querySelector(".bodyContent");
		let contenido = `
		<h2 class="Subtitulos">Crear serie de números</h2>
		<p class="parrafo">Para cada empresa que configure, debe asignar códigos de identificación únicos a elementos como cuentas del libro mayor, cuentas de clientes y proveedores, 
		facturas y otros documentos. La numeración es importante no solo para la identificación. Un sistema de numeración bien diseñado también hace que la empresa sea más manejable y 
		fácil de analizar, y puede reducir la cantidad de errores que ocurren en la entrada de datos.</p>
		<p class="parrafo"><b>Nota</b> <br>
		De forma predeterminada, no se permiten espacios en la serie de números porque el historial exacto de las transacciones financieras debe estar disponible para auditoría, por ley,
		y por lo tanto debe seguir una secuencia ininterrumpida sin números eliminados.
		</p>
		<p>Si desea permitir brechas en ciertas series de números, consulte primero con su auditor o gerente de contabilidad para asegurarse de cumplir con los requisitos legales
		en su país/región.</p>
		<p class="parrafo"><b>Recomendación</b><br>
		Recomendamos que utilice los mismos códigos de series de números que aparecen en la página Lista de series de números en la empresa de demostración CRONUS. Es posible que los
		códigos como P-INV+ no tengan sentido inmediato para usted, pero Business Central tiene una serie de configuraciones predeterminadas que dependen de estos códigos de series de
		números.
		</p>
		<p class="parrafo">Un sistema de numeración se crea configurando uno o más códigos para cada tipo de datos maestros o documentos. Por ejemplo, puede configurar un código para 
		numerar clientes, otro código para numerar facturas de venta y otro código para numerar documentos en diarios generales. Después de configurar un código, debe configurar al 
		menos una línea de serie numérica. La línea de la serie numérica contiene información como el primer y último número de la serie y la fecha de inicio. Puede configurar más de una 
		línea de serie numérica por código de serie numérica, con una fecha de inicio diferente para cada línea. Las series se utilizarán consecutivamente, comenzando cada serie en la 
		fecha de inicio respectiva.</p>
		<p class="parrafo"><b>Importante</b><br>
		La longitud máxima de un número en una serie de números es de 20 caracteres. Hay algunas situaciones en las que Business Central agregará un número con una identificación generada
		por el sistema. Por ejemplo, cuando se utilizan documentos como facturas para aplicar transacciones, como pagos, Business Central genera identificadores para las transacciones 
		aplicadas. El identificador se compone de un número de una serie de números y una identificación asignada por el sistema de seis caracteres, como -12345. Si espera procesar más de 
		9999 documentos en diarios bancarios o GIRO, o diarios de recibos de efectivo, configure series numéricas para esos tipos de documentos para que incluyan menos de 14 caracteres.
		</p>
		<p class="parrafo">Por lo general, configura su serie de números para insertar automáticamente el siguiente número consecutivo en nuevas tarjetas o documentos que cree. Sin embargo,
		también puede configurar una serie de números para permitir que ingrese manualmente el nuevo número. Especifique esto con la casilla de verificación Números de manual .</p>
		<p class="parrafo">Si desea utilizar más de un código de serie numérica para un tipo de datos maestros, por ejemplo, si desea utilizar diferentes series numéricas para diferentes 
		categorías de elementos, puede utilizar relaciones de series numéricas.</p>
		<h3>Para crear una nueva serie numérica</h3>
		<ul>
		<li><b>1.</b> Elija el icono de busqueda, ingrese <b>No. Serie</b> y luego elija el enlace relacionado.</li>
		<li><b>2.</b> Elija la acción <b>Nuevo</b>.</li>
		<li><b>3.</b> En la Nueva Linea, complete los campos según sea necesario. pase el cursor sobre un campo para leer una breve descripción. <br><br>
		<div class="img-content2"><img src="img/devol1.PNG" alt=""></div>
		</li>
		<li><b>4.</b> Elija la acción Líneas.</li>
		<li><b>5.</b> En la página Nº Líneas de serie , rellene los campos para definir el uso real y el contenido de la serie de números que creó en el paso 2.</li>
		<li><b>6.</b>  Repita el paso 5 para tantos usos diferentes de la serie numérica que necesite. El campo Fecha de inicio define qué línea de serie numérica está activa.</li>
		</ul><br>
		<div class="img-content"><img src="img/devol2.PNG" alt=""></div>
		<p class="parrafo"><b>Nota</b> <br>Para permitir que los usuarios especifiquen números manualmente cuando registran un nuevo cliente o proveedor, por ejemplo, seleccione el campo
		Números manuales en la propia serie de números. Para no permitir la <b>numeración manual</b>, borre el campo.</p>
		<p class="parrafo">Puede asignar series de números a las plantillas que configura para los diferentes tipos de clientes y proveedores que su personal de ventas y compradores agregan 
		con mayor frecuencia a su Business Central. En ese caso, configure la serie de números relevante, vincúlelos a través de relaciones y luego agregue la primera serie de números en la 
		relación relevante a la página de configuración correspondiente. Luego, cuando un usuario crea un cliente, elige la plantilla correspondiente y el nuevo cliente obtiene un número 
		asignado de la serie de números definida para esa plantilla.</p>

		`;

		cuerpo.innerHTML= contenido;

	}

/*===================
Periodo Contable
======================*/
let periodoContable = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Trabajar con períodos contables y años fiscales</h2>
	<p class="parrafo">Los períodos contables, también conocidos como períodos de informe, son períodos de tiempo para los cuales una empresa u organización informa el desempeño financiero al generar, por ejemplo, su estado de resultados o balance general. Por lo general, los períodos contables se refieren al año fiscal de la empresa, que puede contener varios períodos contables, como meses o trimestres.</p>
	<p class="parrafo">Para muchas empresas, el año fiscal no se alinea con el año calendario, por ejemplo, cuando el año fiscal finaliza el 30 de junio en lugar del 31 de diciembre. Para las empresas de nueva creación, el año fiscal podría incluso ser más largo que 12 meses.</p>
	<p class="parrafo">Business Central solo requiere períodos contables si desea cerrar un estado de resultados o ejecutar tareas de compresión de datos.</p>
	<p class="parrafo">Puede usar períodos contables en los informes, como cuando revisa las entradas registradas en la página Saldo/Presupuesto donde se especifica el intervalo de informes. Una de las opciones que puede especificar es informar por período contable. También puede crear un informe financiero que compare los resultados de diferentes períodos contables.</p>
	<h3>Creando un nuevo año fiscal</h3>
	<p class="parrafo">Puede crear períodos contables de forma masiva mediante el trabajo por lotes Crear año fiscal o manualmente.</p>
	<h3>Cómo crear periodos contables de forma masiva</h3>
	<p class="parrafo">Utilice el trabajo por lotes Crear año fiscal para dividir un año fiscal en períodos de igual longitud.</p>
	<div>
	<ul>
	<li><b>1.</b> Elija el Busque Página o lupa ícono, ingrese <b>Períodos contables</b> , luego elija el enlace relacionado.</li>
	<li><b>2.</b> Elija la acción <b>Proceso </b> y luego  <b>Crear nuevo ejercicio</b> .</li>
	<li><b>3.</b> En el campo <b>Fecha de inicio</b> , ingrese la fecha en la que comienza el año fiscal.</li>
	<li><b>4.</b> En el campo <b>Número de períodos</b> , ingrese el número de períodos contables en los que se dividirá el año fiscal. Puede haber hasta 365 períodos en un año.</li>
	<li><b>5.</b> En el campo <b>Duración</b>  del período , ingrese una duración para cada período. Los identificadores de duración incluyen 1M para un mes, 1T para un trimestre y 1Y para un año.</li>
	<li><b>6.</b> Elija <b>Aceptar</b> .</li>
	</ul> 
	</div>
	<div class="img-content">
	<img src="img/periodo1.PNG" alt="">
	</div>
	<h3>Cómo crear períodos contables manualmente</h3>
	<p class="parrafo">Si los períodos contables en su año fiscal tienen diferentes duraciones, como el calendario 4-4-5 que se usa en el comercio minorista, puede configurarlo manualmente.</p>
	<ul>
	<li><b>1. </b>Elija el Busque Página o Informe.ícono, ingrese<b>Períodos contables </b> , luego elija el enlace relacionado.</li>
	<li><b>2. </b>En el campo <b>Fecha de inicio</b>, ingrese la fecha en la que comienza el año fiscal. El campo <b>Nombre</b> mostrará el nombre del mes.</li>
	<li><b>3. </b>Elija la casilla de verificación <b> Nuevo año fiscal</b> para indicar que este es el primer período del año. Business Central usará este período para determinar qué períodos cerrar al final del año.</li>
	<li><b>4. </b> Repita los pasos 2 y 3 para cada período restante.</li>
	</ul>
	<h3>Cerrar un año fiscal</h3>
	<p class="parrafo">Cerrar el año fiscal es una de las tareas para cerrar los libros. Después de cerrar un año fiscal, las casillas de verificación Cerrado y Fecha de bloqueo se seleccionan para todos los períodos del año. No puede reabrir un año ni borrar las casillas de verificación.</p>
	<p class="parrafo"><b>Nota</b><br>Siempre debe tener al menos un año fiscal abierto. Al cerrar un año, asegúrese de que se haya creado un nuevo año. Además, tenga en cuenta que después de cerrar un año, no puede cambiar la fecha de inicio del año siguiente.</p>
	<ul>
	<li><b>1. </b> Elija el Busque Página o lupa ícono, ingrese <b>Períodos contables</b> y luego elija el enlace relacionado.</li>
	<li><b>2. </b>Elija la acción <b>Proceso </b> y luego <b>Fijar cierre</b>. </li>
	<li><b>3.</b> Le damos <b>Aceptar.</b></li>
	</ul>
	<h3>Contabilización de asientos en un ejercicio fiscal cerrado</h3>
	<p class="parrafo">Aunque un año fiscal esté cerrado, aún puede contabilizar entradas del libro mayor en él. Cuando lo hace, las entradas se marcan como contabilizadas en un año fiscal cerrado y se selecciona la casilla de verificación Entrada del año anterior . De forma predeterminada, la casilla de verificación no se muestra en la página, pero puede agregarla. Los siguientes pasos son cerrar las cuentas de la cuenta de resultados y trasladar los resultados del ejercicio a una cuenta del balance. Repita estos pasos cada vez que registre asientos en un año fiscal cerrado.</p>
	<p class="parrafo">Video Tutorial como Abrir un Periodo Contable<a href="https://www.youtube.com/watch?v=E1P-EFHtYtc"> Aquí</a>.</p>

	`;

	cuerpo.innerHTML= contenido;

}

/*=================
Resumen Ventas
==============*/
let resumenVentas = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Ventas en Business Central</h2>

	<p class="parrafo">Usted crea una factura de venta o una orden de venta para registrar su acuerdo con un cliente para vender ciertos productos en ciertos términos de entrega y pago.</p>
	<p class="parrafo">Debe usar <b>pedidos de venta</b>  si su proceso de ventas requiere que envíe partes de una cantidad de pedido, por ejemplo, porque la cantidad total no está disponible de inmediato. Si vende artículos entregándolos directamente de su proveedor a su cliente, como un envío directo, también debe usar órdenes de venta. En todos los demás aspectos, las órdenes de venta funcionan de la misma manera que las facturas de venta. Con los pedidos de venta, también puede utilizar la funcionalidad de promesa de pedido para comunicar ciertas fechas de entrega a sus clientes.</p>
	<p class="parrafo">Puede negociar con el cliente creando primero una cotización de venta, que puede convertir en una factura de venta o en una orden de venta cuando acuerde la venta. Después de que el cliente haya confirmado el acuerdo, puede enviar una confirmación de pedido para dejar constancia de su obligación de entregar los productos según lo acordado.</p>
	<p class="parrafo">Puede corregir o cancelar fácilmente una factura de venta registrada antes de que se pague. Esto es útil si desea corregir un error de escritura o si el cliente solicita un cambio al principio del proceso de pedido. Si se paga la factura de venta registrada, debe crear una nota de crédito de venta o una orden de devolución de venta para revertir la venta.</p>
	<p class="parrafo">Las buenas prácticas de ventas y marketing tienen que ver con cómo tomar las mejores decisiones en el momento adecuado. La funcionalidad de marketing en Business Central proporciona una descripción general precisa y oportuna de su información de contacto para que pueda atender a sus clientes potenciales de manera más eficiente y aumentar la satisfacción del cliente. </p>
	<p class="parrafo">La siguiente tabla describe una secuencia de tareas</p>
	<table class="tabla1">
	<tr>
	<th>A</th>
	<th>Ver</th>
	</tr>
	<tr>
	<td>Cree una tarjeta de cliente para cada cliente al que vende.</td>
	<td>  Registrar nuevos clientes</td>
	</tr>
	<tr>
	<td>Cree una cotización de venta para ofrecer productos en términos negociables antes de convertir la cotización en una factura de venta.</td>
	<td>Hacer cotizaciones de ventas</td>
	</tr>
	<tr>
	<td>Cree una factura de venta para registrar su acuerdo con un cliente para venderle ciertos productos en ciertos términos de entrega y pago.</td>
	<td>Factura Ventas</td>
	</tr>
	<tr>
	<td>Procese un pedido de ventas que implique envío parcial o envío directo.</td>
	<td>  Vender productos</td>
	</tr>
	<tr>
	<td>Comprenda lo que sucede cuando registra documentos de ventas.</td>
	<td>Publicación de ventas</td>
	</tr>
	<tr>
	<td>Prepárese para recoger artículos para el envío.</td>
	<td>  Imprimir la lista de selección</td>
	</tr>
	<tr>
	<td>Cumplir una orden de venta con múltiples envíos parciales.</td>
	<td>  Procesar envíos parciales</td>
	</tr>
	<tr>
	<td>Configure líneas de compra o venta estándar que pueda insertar rápidamente en documentos, por ejemplo, para pedidos de reabastecimiento recurrentes.</td>
	<td>Crear líneas de compras y ventas recurrentes</td>
	</tr>
	<tr>
	<td>Vincule una orden de venta a una orden de compra para vender un artículo de envío directo para que su proveedor lo entregue directamente a su cliente.</td>
	<td>Hacer envíos directos</td>
	</tr>
	<tr>
	<td>Haga que un proveedor envíe un artículo del catálogo a su almacén para que pueda enviar el artículo a su cliente.</td>
	<td>Crear pedidos especiales</td>
	</tr>
	<tr>
	<td>Realice una acción en una factura de venta registrada sin pagar para crear automáticamente una nota de crédito y cancelar la factura de venta o volver a crearla para que pueda hacer correcciones.</td>
	<td>Corregir o cancelar facturas de ventas impagas</td>
	</tr>
	<tr>
	<td>Cree una nota de crédito de ventas para revertir una factura de venta registrada específica para reflejar los productos que el cliente devuelve y el monto del pago que reembolsará.</td>
	<td>Procesar devoluciones de ventas o cancelaciones</td>
	</tr>
	<tr>
	<td>Gestione el compromiso de compra de su cliente en grandes cantidades entregadas en varios envíos a lo largo del tiempo.</td>
	<td>Trabajar con órdenes de venta abiertas</td>
	</tr>
	<tr>
	<td>Venda artículos de ensamblaje que no estén disponibles actualmente mediante la creación de un pedido de ensamblaje vinculado para suministrar la cantidad total o parcial del pedido de ventas.</td>
	<td>Vender artículos ensamblados a pedido</td>
	</tr>
	<tr>
	<td>Facture a un cliente una vez por envíos múltiples combinando los envíos en una factura.</td>
	<td>Combinar envíos en una sola factura</td>
	</tr>
	<tr>
	<td>Informe a sus clientes de las fechas de entrega de los pedidos calculando la fecha de capacidad para prometer o la fecha de disponibilidad para prometer.</td>
	<td>Calcular fechas prometedoras de pedidos</td>
	</tr>
	<tr>
	<td>Resuelva la confusión cuando existen dos o más registros para el mismo cliente.</td>
	<td>  Combinar registros duplicados</td>
	</tr>
	</table>

	`;

	cuerpo.innerHTML= contenido;

}
/*==================
Configuracion de Ventas
====================*/
let confiVentas= () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Configuración de Ventas</h2>
	<p class="parrafo">Antes de poder administrar los procesos de ventas, debe configurar las reglas y los valores que definen las políticas de ventas de la empresa.</p>

	<p class="parrafo">Debe definir la configuración general en la página <b>Ventas y cuentas por cobrar</b> , como qué documentos de ventas se requieren, cómo se registran sus valores y el tipo de líneas que se crearán de forma predeterminada. Esta configuración general generalmente se realiza una vez durante la implementación inicial.</p>
	<p class="parrafo">La configuración de ventas relacionadas con las finanzas, como los métodos de pago y las monedas, se tratan en la sección Configuración de finanzas. Para obtener más información, consulte <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/finance-setup-finance">Configuración de finanzas</a> .</p>
	<div class="img-content2">
	<img src="img/confiventas1.PNG" alt="">
	</div><br>
	<p class="parrafo">Algunos de los campos de Configuración de ventas y cobros:</p>

	<table class="tabla1">
	<tr>
	<th>Campo</th>
	<th>Descripción</th>
	</tr>
	<tr>
	<td><b>Advertencia falta stock</b></td>
	<td>Especifica si se muestra una advertencia al especificar una cantidad en un documento de venta que ponga el nivel de inventario del producto por debajo de cero.</td>
	</tr>
	<tr>
	<td><b>Redondeo factura</b></td>
	<td>Especifica si se redondean los importes para las facturas de venta. El redondeo se aplica tal como se especifica en el campo Precisión redondeo fact. (DL) en la ventana Configuración contabilidad.</td>
	</tr>

	<tr>
	<td><b>Albarán al facturar</b></td>
	<td>Especifica si al registrar una factura se crean automáticamente un envío registrado y una factura registrada.</td>
	</tr>
	<tr>
	<td><b>Copiar el nombre del cliente en movimientos</b></td>
	<td>Especifica si desea que la descripción de las fichas de clientes se copien en los movimientos de clientes durante el registro.</td>
	</tr>
	<tr>
	<td><b>Permitir diferen. IVA</b></td>
	<td>Permitir diferen. IVA</td>
	</tr>
	<tr>
	<td><b>Gr.regis. IVA negocio (precio)</b></td>
	<td>Especifica un grupo de registro de IVA de negocio para los clientes a los que desea aplicar el precio de producto con el IVA incluido.</td>
	</tr>
	<tr>
	<td><b>Nº serie cliente</b></td>
	<td>Especifica el código de la serie numérica que se va a utilizar para asignar números a los clientes.</td>
	</tr>
	<tr>
	<td><b>Nº serie oferta</b></td>
	<td>Especifica el código de la serie numérica que se va a utilizar para asignar números a las ofertas de venta.</td>
	</tr>
	<tr>
	<td><b>Nº serie alb. venta registrado</b></td>
	<td>Especifica el código de la serie numérica que se va a usar para asignar números a los envíos registrados.</td>
	</tr>
	<tr>
	<td><b>Archivar ofertas</b></td>
	<td>Especifica si desea archivar las ofertas de venta cuando se eliminan.</td>
	</tr>
	<tr>
	<td><b>Archivar pedidos</b></td>
	<td>Especifica si desea archivar los pedidos de venta cuando se eliminan.</td>
	</tr>
	</table>
	<p class="parrafo">En la siguiente tabla veremos los pasos que previamente debemos cumplir antes de realizar una oferta de venta a clientes de la empresa.</p>
	<table class="tabla1">
	<tr>
	<th>A</th>
	<th>Ver</th>
	</tr>
	<tr>
	<td>Cree una tarjeta de cliente para cada cliente al que venda.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-register-new-customers">Registrar nuevos clientes</a></td>
	</tr>
	<tr>
	<td>Permita que los clientes paguen a través de PayPal eligiendo el logotipo de PayPal en los documentos de ventas.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-enable-payment-service-extensions">Habilitar el pago del cliente a través de PayPal</a></td>
	</tr>
	<tr>
	<td>Ingresa los diferentes descuentos y precios especiales que otorgas a los clientes según artículo, cantidades y/o fecha.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-record-sales-price-discount-payment-agreements?tabs=current-experience">Registro de precio de venta, descuento y acuerdos de pago</a></td>
	</tr>
	<tr>
	<td>Configure los vendedores para que pueda asignarlos a contactos de clientes o medir el rendimiento de los vendedores como base para calcular la comisión o bonificación de ventas.</td>
	<td><a href="">Configurar vendedores</a></td>
	</tr>
	<tr>
	<td>Especifique para clientes individuales o para todos los clientes cómo se envían los documentos de ventas de forma predeterminada cuando elige la acción Registrar y enviar .</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-setup-salespeople">Configurar perfiles de envío de documentos</a></td>
	</tr>
	<tr>
	<td>Configure su correo electrónico para que contenga un resumen de la información en el documento de ventas que se está enviando.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/ui-how-send-documents-email">Enviar documentos por correo electrónico</a></td>
	</tr>
	<tr>
	<td>Use un servicio web de la UE para verificar el número de registro de IVA de un cliente.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/finance-setup-vat">Verificar números de registro de IVA</a></td>
	</tr>
	<tr>
	<td>Define los diferentes incoterms que ofreces a los clientes o que te ofrecen tus proveedores.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-set-up-shipment-methods">Configurar métodos de envío</a></td>
	</tr>
	<tr>
	<td>Ingrese información sobre los diferentes proveedores de transporte que utiliza, incluido un enlace a su servicio de seguimiento de paquetes.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-to-set-up-shipping-agents">Configurar agentes de envío</a></td>
	</tr>
	<tr>
	<td>Especifique los informes predeterminados que se utilizarán para diferentes tipos de documentos.</td>
	<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/across-report-selections">Selección de informes en Business Central</a></td>
	</tr>
	</table>

	`;

	cuerpo.innerHTML= contenido;

}
/*==========================
Crear Pedido de ventas
=========================*/
let pedidoVentas = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Crear pedido de Ventas</h2>

	<p class="parrafo">Para realizar un pedido venta se debe seguir los siguientes pasos:</p>
	<ul>
	<li><b>1.</b> En la Página principal en la lupa de busqueda escribimos <b>Pedido ventas.</b></li>
	<li><b>2.</b> Se nos abrira la página<b> Sales Order List (9305, List)</b> que nos mostrar información de la tabla <b>Sales Header (36)</b>.</li>
	<li><b>3.</b> En los botones de la parte superior seleccionamos <b>Nuevo</b>, se no abrira la página <b>Sales Order (42, Document)</b>.</li>
	<li><b>4.</b> En el campo <b>Nombre del cliente</b> seleccionamos el cliente al que le haremos la venta, al seleccionar el cliente veremos que nos traera la ficha del cliente. </li>
	<li><b>5.</b> Selecionamos el tipo de venta que haremos.</li>
	<li><b>6.</b> En  nuestro caso hemos seleccionado <b>Articulo</b>.</li>
	<li><b>7.</b> En el campo <b>Nº</b> Seleccionamos el artculo que venderemos. </li>
	<li><b>8.</b> En el campo <b>Cantidad</b>, especificamos la cantidad que venderemos.</li>
	<li><b>9.</b> Una vez terminado de agregar los articulos  de venta, En la parte superior en los botones seleccionamos <b>imprimir</b></li>
	<li><b>10.</b> Se nos abrira una ficha donde le daremos a <b>vista prevía</b>, así podremos visualizar un reporte de la oferta de venta. </li>
	</ul>
	<p class="parrafo">En la captura vemos la ventana donde haremos el pedido de venta. </p>
	<div class="img-content2">
	<img src="img/pedidoVenta1.PNG" alt="">
	</div><br>
	<p class="parrafo">La captura nos muestra la ventana  de confirmación de impresión de pedido de venta.</p>
	<div class="img-content2">
	<img src="img/pedidoVenta3.PNG" alt="">
	</div><br>
	<p class="parrafo">Reporte del pedido de venta, vista previa antes de imprimirlo o enviarlo al cliente.</p>
	<div class="img-content2">
	<img src="img/pedidoVenta2.PNG" alt="">
	</div><br>
	<p class="parrafo">Videotutorial Como configurar términos de pago como crear pedido de venta <a href="https://www.youtube.com/watch?v=u_T2trb2uCg">Aquí</a></p>

	`;

	cuerpo.innerHTML= contenido;

}
/*=================
Crear factura de ventas 
======================*/
let facturaVenta = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos"> Factura de Venta</h2>
	<p class="parrafo">Por lo general, puede crear una orden de venta o una factura de venta para registrar su acuerdo con un cliente para vender ciertos productos en ciertas condiciones de entrega y pago.</p>
	<p class="parrafo">Sin embargo, debe usar una orden de venta en lugar de una factura de venta si:</p>
	<div class="contentList">
	<ul>
	<li>Necesita enviar solo una parte de la cantidad de un pedido, por ejemplo, porque la cantidad total no está disponible.</li>
	<li>Envíe productos después de contabilizar las facturas de venta correspondientes.</li>
	<li>Venda artículos que su proveedor entrega directamente a su cliente, lo que se conoce como envío directo.Obtenga más información en <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-drop-shipment">Hacer envíos directos</a>  .</li>
	</ul>
	</div>
	<p class="parrafo">En todas las demás situaciones, las órdenes de venta y las facturas de venta funcionan de la misma manera. Obtenga más información sobre cómo utilizar los pedidos de venta en <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-sell-products">Vender productos</a> .</p>
	<p class="parrafo">Puede negociar con el cliente creando primero una cotización de venta, que puede convertir en una factura de venta cuando acuerde la venta. Obtenga más información en <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-make-offers">Hacer cotizaciones de venta </a> .</p>
	<h3>Para crear una factura de venta</h3>
	<ul>
	<li><b>1.</b> Elija el icono de busqueda, ingrese Facturas de ventas , luego elija el enlace relacionado.</li>
	<li><b>2.</b> En el campo Cliente , ingrese el nombre de un cliente existente.</li>
	<li><b>3.</b> Complete los campos restantes en la página Factura de venta según sea necesario. Pase el cursor sobre un campo para leer una breve descripción.</li>
	<li><b>4.</b> En la ficha desplegable Líneas , en el campo Tipo , seleccione el <b>tipo</b> de producto, cargo o transacción que registrará para el cliente en la línea de ventas.</li>
	<li><b>5.</b> En el campo <b>No.</b> , seleccione un registro para publicar de acuerdo con el valor en el campo Tipo . <br>
	Deje el campo No. en blanco en los siguientes casos:
	<div class="contentList">
	<ul>
	<li>Si la línea es para un comentario. Escriba el comentario en el campo Descripción .</li>
	<li>Si la línea es para un artículo del catálogo.</li>
	</ul>
	</div>
	</li>
	<li><b>6.</b> En el campo <b>Cantidad</b> , ingrese cuántas unidades del producto, cargo o transacción debe registrar la línea para el cliente.
	<br><b>Nota</b><br>
	Si el artículo es del tipo Servicio , o el campo Tipo contiene Recurso , entonces la cantidad es una unidad de tiempo, como horas, como se indica en el campo Código de unidad de medida en la línea.
	</li>
	<li><b>7.</b> Si desea otorgar un descuento, ingrese un porcentaje en el campo % <b>de descuento de línea</b> . El valor del campo Importe de la línea se actualiza en consecuencia. <br>
	Si se configuran precios de artículos especiales en la ficha desplegable Precios de venta y Descuentos de línea de venta en la ficha del cliente o del artículo, el precio y el importe en la línea de venta se actualizan automáticamente si se cumplen los criterios de precio.</li>
	<li><b>8.</b> En la opción <b>Registar</b>, <b>Vista previa de registro</b> podremos ver una vista previa de lo movimientos que afectuara nuestro registro. </li>
	<li><b>9.</b> Le damos <b>Registrar</b>, luego aceptar y nos mostrar un mensaje "La factura se registró con el número 103217 y se movió a la ventana de facturas de venta registradas."</li>
	</ul><br>
	<div class="img-content2">
	<img src="img/factura1.PNG" alt="">
	</div>
	<p class="parrafo">Vista previa de lo movimientos que efectuara el registro de la factura.</p>
	<div class="img-content2">
	<img src="img/factura2.PNG" alt="">
	</div>
	<h3>Facturas registradas</h3>
	<p class="parrafo">Una vez contabilizada la factura, podrá encontrarla en la lista de facturas contabilizadas. Tanto la lista Facturas de venta registradas como la lista Facturas de compra registradas muestran las facturas registradas con los números de factura finales. En la lista, puede buscar cada factura registrada y puede corregir o cancelar una factura registrada.</p>
	<p class="parrafo">Para cada factura registrada, puede buscar estadísticas, dimensiones y los asientos contables que son el resultado de la factura registrada. También puede imprimir o enviar la factura contabilizada.</p>
	<p class="parrafo">Factura archivada en el historico de facturas.</p>
	<div class="img-content2">
	<img src="img/factura3.PNG" alt="">
	</div>
	<p class="parrafo">Videotutorial como realizar una factura de venta, <a href="https://www.youtube.com/watch?v=HSNtfKoJi2k">aquí</a>.</p>

	`;

	cuerpo.innerHTML= contenido;

}
/*===================
Crear Plantilla Cliente
=====================*/
let crearPlantillaCliente = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Crear Plantillas de clientes</h2>
	<ul>
	<li><b>1.</b> Vamos a ir a clientes y vamos a acceder a una de las fichas para poder crear una plantilla.</li>
	<li><b>2.</b> Una vez estamos dentro de la ficha del cliente vamos a las opciones acciones y en el apartado de opciones despliego plantillas. </li>
	<li><b>3.</b> Aquí puedo generar un nuevo documento de plantilla, le selecciono un nombre, por ejemplo, nacional. </li>
	<li><b>4.</b>  Le puedo indicar un número de serie para que automáticamente asigna esta plantilla al sistema.</li>
	<li><b>5.</b> Le puedo informar también una información de dirección y contacto. Entro en el apartado de facturación y le indicaremos los grupos de registro.</li>
	<li><b>6.</b>  En este caso es un cliente nacional pues le indicamos y el respectivo código.</li>
	<li><b>7.</b>  También puede indicar un código de idioma y términos y formas de pago.</li>
	<li><b>7.</b>  Guardamos todos los cambios efectuados.</li>
	</ul>
	<div class="img-content2">
	<img src="img/plantilla1.PNG" alt="">
	</div>
	<p class="parrafo">Una vez creada la plantilla nos saldra como una de las opciones de plantilla al crear un nuevo cliente.</p>
	<div class="img-content">
	<img src="img/plantilla2.PNG" alt="">
	</div>
	<p class="parrafo">Videotutorial Como configurar términos de pago como crear plantillas <a href="https://www.youtube.com/watch?v=a0oh5zglX54">aquí</a>.</p>

	`;

	cuerpo.innerHTML= contenido;

}


/*=====================
		Clientes
		=====================*/
		let crearCliente = () =>{
			let cuerpo = document.querySelector(".bodyContent");
			let contenido = `
			<h2 class="Subtitulos">Registrar nuevos clientes</h2>

			<p class="parrafo">Los clientes son tu fuente de ingresos. Debe registrar cada cliente al que le vende como una tarjeta de cliente. Las tarjetas de cliente contienen la información necesaria para vender productos al cliente.</p>
			<p class="parrafo">Antes de que pueda registrar nuevos clientes, debe configurar varios códigos de venta para elegir cuando complete las tarjetas de clientes. Obtenga más información en <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-setup-sales">Configuración de ventas</a>.</p>
			<h3>Adición de nuevos clientes</h3>
			<p class="parrafo">Puede agregar nuevos clientes manualmente completando la página Tarjeta de cliente , o puede usar plantillas que contienen información predefinida. Por ejemplo, puede crear una plantilla para diferentes tipos de perfiles de clientes. El uso de plantillas ahorra tiempo al agregar nuevos clientes y ayuda a garantizar que la información sea correcta cada vez.</p>
			<p class="parrafo">Si creas:</p>
			<div class="contentList">
			<ul>
			<li>Múltiples plantillas para usar con más de un tipo de cliente, puede elegir la plantilla adecuada cuando agrega un cliente.</li>
			<li>Solo una plantilla, se utiliza para todos los nuevos clientes.</li>
			</ul>
			</div>
			<p class="parrafo">Después de crear una plantilla, puede usar la acción <b>Aplicar plantilla</b> para aplicarla a uno o más clientes seleccionados. Para crear una plantilla, complete la información que se reutilizará en la página <b>Tarjeta de cliente</b> y luego guárdela como plantilla. Obtenga más información en la sección Para guardar la tarjeta de cliente como plantilla.  Obtenga más información en la sección <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-register-new-customers#to-save-the-customer-card-as-a-template">Para guardar la tarjeta de cliente como plantilla</a>.</p>
			<p class="parrafo"><b>Nota</b><br>Puede ser útil personalizar la página Plantilla de cliente cuando crea una plantilla. Por ejemplo, es posible que desee agregar el campo Límite de crédito a una plantilla. Obtén más información en la sección Personaliza tu espacio de trabajo.</p>
			<h3>Para crear una nueva tarjeta de cliente</h3>
			<ul>
			<li><b>1.</b> Elija la lupa de busqueda, ingrese <b>Clientes</b>  y luego elija el enlace relacionado.</li>
			<li><b>2.</b> En la página <b>Clientes</b> , elija la acción <b>Nuevo</b>. <br>Si solo existe una plantilla de cliente, se abre una nueva tarjeta de cliente con algunos campos llenos de información de la plantilla.

			Si existe más de una plantilla de cliente, se abre una página desde la que puede seleccionar una plantilla de cliente. En ese caso, siga los siguientes dos pasos.</li>
			<li><b>3.</b> En la página Seleccionar una plantilla para un nuevo cliente , elija la plantilla que desea usar para la nueva tarjeta de cliente.</li>
			<li><b>4.</b> Elija el botón Aceptar . Se abre una nueva tarjeta de cliente con algunos campos llenos de información de la plantilla.</li>
			<li><b>5.</b> Proceda a completar o cambiar campos en la tarjeta de cliente según sea necesario. Pase el cursor sobre un campo para leer una breve descripción. <br>
			La acción <b>Precios y descuentos</b> proporciona opciones para administrar precios especiales o descuentos para un cliente cuando un pedido cumple con ciertos criterios. Ejemplos de tales criterios pueden ser cuando compran un determinado artículo, ordenan una cantidad mínima o compran antes de una fecha, como cuando finaliza una campaña.
			</li>
			</ul>
			<p class="parrafo">Plantilla de cliente para seleccionar.</p>
			<div class="img-content2">
			<img src="img/cliente1.PNG" alt="">
			</div>
			<br>
			<p class="parrafo">Después de crear la nueva tarjeta del cliente ya estará habilitado para realizar operaciones con él.</p>
			<div class="img-content2">
			<img src="img/cliente3.PNG" alt="">
			</div><br>
			<p class="parrafo">El cliente ahora está registrado y la tarjeta de cliente está lista para usarse en documentos de ventas.</p>
			<h3>Eliminación de tarjetas de clientes</h3>
			<p class="parrafo">Si ha registrado una transacción para un cliente, no puede eliminar la tarjeta del cliente porque es posible 
			que se necesiten las entradas del libro mayor para la auditoría. Para eliminar tarjetas de clientes con entradas del libro mayor, 
			comuníquese con su socio de Microsoft para hacerlo a través del código.</p>
			<p class="parrafo">Video Tutorial como crear un nuevo cliente <a href="https://www.youtube.com/watch?v=u_hwamiNs04">aquí</a>.</p>

			`;

			cuerpo.innerHTML= contenido;

		}

/*==============================
Configuracion terminos de Pago
==========================*/

let configTerminosPagos = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<h2 class="Subtitulos">Configuración de terminos de pagos</h2>
	<p class="parrafo">La configuración de los términos de pago, bajo este nombre encontramos la utilidad que tiene business central para calcular las fechas de vencimiento de nuestras facturas, el mantenimiento de términos de pago es común para clientes y proveedores por lo que tendremos que dar de alta todos los términos de pago que afecten a ambos mantenimientos. </p>
	<p class="parrafo">Para dar de alta un nuevo termino de pago, acederemos en la página en el icono de lupa escribiremos <b>Terminos de pagos</b> o <b> Condiciones de pagos</b></p>
	<ul>
	<li><b>1.</b> Presionamo sobre la opción de <b>Nuevo</b>.</li>
	<li><b>2.</b>  En el campo <b>código</b> que es alfanumérico, lo cual significa que podremos utilizar tanto números como letras recomendamos utilizar códigos visuales que sólo viendo el código sepamos el tipo de cálculo que realizará. </li>
	<li><b>3.</b> 
	Utilizaremos un 30 60 días es decir dos plazos por lo tanto en el campo código podemos informarlo de esta manera en el siguiente campo.</li>
	<li><b>4.</b> Tendremos que informar a business central cuánto tiempo ha de pasar entre la fecha de emisión del documento y el cálculo del vencimiento esta información se la tenemos que proporcionar a business central en formato de tiempo de business si queremos que calculé 30 días como es el caso ya tenemos que informar de esta manera 30 d.</li>
	<li><b>5.</b> Para informar el segundo plazo accederemos a <b>Navegar - Pagos - Plazos</b>  y aquí tenemos que informar el tanto por ciento del importe total del documento que será el primer vencimiento como son dos plazos pues será un 50 por ciento. </li>
	<li><b>6.</b>  En el siguiente campo que tenemos que informar es pasado este primer vencimiento cuánto tiempo tiene que pasar para calcular el segundo como hemos dicho que es un 30 60 habrán pasado 30 días se habrá calculado el primer vencimiento </li>
	<li><b>7.</b>para el siguiente vencimiento que han de pasar otros 30 días lo informamos y pasados esos 30 días cuál será el tanto por ciento del importe el otro 50% ya tenemos configurados nuestros plazos</li>
	<li><b>8.</b> Volvemos a la pantalla siguiente y el campo que nos encontramos es distribución del iva este campo es muy importante y por defecto business central coloca la opción de primer plazo pero según la legislación española cuando existen más de un vencimiento la distribución del iva tiene que ser proporcional por lo cual abriremos el campo de opciones y colocaremos el valor proporcional</li>
	<li><b>9.</b> El siguiente campo es número máximo díaz hasta fecha de vencimiento aquí podemos informar cuántos días dejamos que pasen entre la entrega del producto o el servicio para calcular el primer vencimiento a diferencia del primer campo de cálculo de fecha de vencimiento aquí no es necesario informarlo en tiempo en fórmula de tiempo ya que son siempre días por lo tanto si queremos que sean diez días pues colocaremos diez días.</li>
	<li><b>10.</b> Los tres campos que vienen a continuación hacen referencia al descuento de pronto pago en business central el descuento de pronto pago va asociado al termino de pago por lo cual significa que cada vez que utilicemos este término de pago business central calculará automáticamente el pronto pago que hayamos informado aquí podemos informar también en forma de tiempo qué fechas actuará este pronto pago es decir pasado cuántos días se puede aplicar este pronto pago o directamente como es lo más habitual el tanto por ciento del pronto pago que aplicaremos sobre este término de pago si es un 2% colocaremos el 2%</li>
	</ul>
	<div class="img-content2">
	<img src="img/termpago2.PNG" alt="">
	</div>

	<p class="parrafo">Paso 5 del Procedimiento:</p>
	<div class="img-content">
	<img src="img/termpago1.PNG" alt="">
	</div>
	<p class="parrafo">de esta manera hemos concluido la configuración de un nuevo término de pago.</p>
	<p class="parrafo">Videotutorial Como configurar términos de pago<a href="https://www.youtube.com/watch?v=Jfp8v2GlUzg"> Aquí</a></p>

	`;

	cuerpo.innerHTML= contenido;

}
/*=======================
	Pago Proveedores
	============================*/

	let pagoProveedores = () =>{
		let cuerpo = document.querySelector(".bodyContent");
		let contenido = `
		<h2 class="Subtitulos">Pago Proveedores</h2>
		<p class="parrafo">En Business Central, puede pagar a un proveedor mediante pagos electrónicos. Los pagos se exportarán a un archivo, que luego se transferirá al banco. Después, el banco transfiere los pagos de manera electrónica de su cuenta de banco a la cuenta de banco del beneficiario (proveedor).</p>
		<ul>
		<li><b>1.</b> En el icono de la lupa, escribimos <b>Diario de Pagos</b>.</li>
		<li><b>2.</b> En el campo <b>Nombre Sección </b> seleccionamos <b>Generales</b>.</li>
		<li><b>3.</b> Seleccionamos  <b>Preparar </b>, luego <b>Proponer pago proveedores</b>.</li>
		<li><b>4.</b> En  <b>importe Disponible</b>  Colocamos la cantidad de dinero que disponemos para pagar a los proveedore. <br>
		Los Pagos a proveedores se ejecutaran de acuerdo al orden de prioridad que tenga cada uno.
		</li>
		<li><b>5.</b> Para ver un informe de prueba de la cantidad de pagos pendientes, seleccionamos <b>Acciones</b> apartado <b>Registro</b> y lugo en <b>Informe prueba, Vista previa</b>, <br>
		Se nos abrira un reporte donde nos muestra  la cantidad que se debe en los pagos a proveedores. </li>
		<li><b>6.</b> El reporte tenemos la opción de poder imprimirlo.</li>
		<li><b>7.</b> Despues  <b>Proceso </b>, <b>Liquidar movimientos</b>, se nos abrira una venta con varias facturas por pagar.</li>
		<li><b>8.</b> <b>Proceso</b>, <b>Marcar id de liquidación</b>, aceptamos.</li>
		<li><b>9.</b> <b>Registrar e imprimir</b>, <b>Registrar</b>, aceptamos.</li>
		</ul>
		<div class="img-content2">
		<img src="img/pagoprovee.PNG" alt="">
		</div>
		<br>
		<div class="img-content2">
		<img src="img/pagoprovee1.PNG" alt="">
		</div><br>
		<div class="img-content2">
		<img src="img/pagoprovee2.PNG" alt="">
		</div><br>
		<p class="parrafo">Videotutorial como relizar pago a proveedores, <a href="https://www.youtube.com/watch?v=qbep1nVv91U">Aqui</a></p>

		`;

		cuerpo.innerHTML= contenido;

	}
	/*=====================
		Pago Clientes
		==========================*/

		let pagoCliente = () =>{
			let cuerpo = document.querySelector(".bodyContent");
			let contenido = `
			<h2 class="Subtitulos">Registro de pagos de Clientes</h2>
			<p class="parrafo">Dependiendo de las necesidades de su negocio, puede recibir pagos y registrar un pago de diferentes maneras: manualmente, automáticamente y a través de servicios de pago.</p>
			<p class="parrafo">Puede procesar los pagos directamente desde la tarjeta del cliente. Utilice la acción <b>Registrar pagos de clientes</b> para obtener una descripción general de las facturas pendientes de pago de ese cliente. Luego, marque la factura como pagada parcialmente o en su totalidad. Esta conciliación de pagos procesa los pagos de sus clientes al hacer coincidir los montos recibidos en su cuenta bancaria con las facturas de ventas no pagadas relacionadas y luego registra los pagos.</p>
			<p class="parrafo">En entornos comerciales donde el cliente paga algún tiempo después de la entrega, de acuerdo con las condiciones de pago, una factura de venta registrada permanece abierta (sin pagar) hasta que el departamento de Cuentas por cobrar verifica que se recibió el pago y lo aplica a la factura de venta registrada.</p>
			<p class="parrafo">En entornos comerciales donde el cliente paga de inmediato, por ejemplo, mediante PayPal o en efectivo, el pago se registra inmediatamente cuando registra la factura de venta, es decir, la factura de venta registrada se cierra como totalmente aplicada. Seleccione el método relevante en el campo <b>Código de método de pago</b> en la orden de venta. Para pagos electrónicos, como PayPal, también debe completar el campo <b>Servicio de pago</b>.</p>
			<p class="parrafo"><b>Nota</b><br>Si desea enviar a sus clientes recordatorios de pagos vencidos, primero debe configurar niveles y términos de recordatorio. Obtenga más información en Configurar términos y niveles de recordatorio .</p>
			<p class="parrafo">Para registrar un cobro a un cliente se debe seguir los siguientes pasos: </p>
			<ul>
			<li><b>1.</b> En el icono de busqueda,  ingrese  <b>Diario Recibo de efectivo</b> y luego elija el enlace relacionado.  <br>
			<li><b>2.</b> En la página diario de recibo de efectivo rellenamos los campos.</li>
			<li><b>3.</b>  En <b>Tipo de documento</b> ponemos pago.</li>
			<li><b>4.</b> En <b>Nº documento</b> Podemos Poner <b> Cobro 1</b>.</li>
			<li><b>5.</b> En <b>Tipo Mov</b> debe ser <b> Cliente.</b></li>
			<li><b>6.</b> En el campo <b>Nº cuenta </b> el ID del cliente.</li>
			<li><b>7.</b>  En el campo <b>tipo contrapartida</b> podemos elegir (cuenta, banco).</li>
			<li><b>8.</b> Una vez rellenado los campos le damos click en <b> Proceso </b> y luego <b> </b></li>
			<li><b>9.</b> En la página movimientos del clientes, seleccionamos la factura que deseamo pagar, <b>Proceso</b> y luego <b>marcar id liquidación </b>, seleccionadas las facturas a pagar le damos  <b>Aceptar</b>.</li>
			<li><b>10.</b> Nuevamente en la página <b>Diarios de recibo de efectivo</b> podemos ver una una vista previa del registro que se realizaran en <b> Registrar e imprimir</b> y <b>Vista previa del registro</b></li>
			<li><b>11.</b> Para Finalizar le damos <b>Registrar e imprimir</b> <b> Registrar</b> y <b>Aceptar</b>. <br>
			Para ver el movimiento contable entramos en la ficha del cliente, <b>Acciones , Relacionado, Historial</b>y <b>Movimientos</b>.</li>
			</ul><br>
			<p class="parrafo">Campos de la pagina Diario Recibo de efectivo rellenados. </p>
			<div class="img-content2"><img src="img/pagoCli.PNG" alt=""></div>
			<p class="parrafo">Seleccionar la factura que se realizara el cobro.</p>
			<div class="img-content2"><img src="img/pagoCli1.PNG" alt=""></div>
			<p class="parrafo">Vista previa de los movimientos contables que se ejecutaran.</p>
			<div class="img-content"><img src="img/pagoCli2.PNG" alt=""></div>
			<p class="parrafo">Vista del historial de movimientos contables del cliente.</p>
			<div class="img-content2"><img src="img/pagoCli3.PNG" alt=""></div>

			<p class="parrafo">Videoutorial como registrar un pago de un cliente, <a href="https://www.youtube.com/watch?v=1nKziXuV9GY">Aquí</a></p>
			<p class="parrafo">Videotutorial Liquidar movimientos de clientes ya registrados en Business Central, <a href="https://www.youtube.com/watch?v=DCAtOLlcAzo">aquí</a></p>

			`;

			cuerpo.innerHTML= contenido;

		}
	/*===========================
	Planificación de Almacenes
	===========================*/

	let planificacionAlmacen = () =>{
		let cuerpo = document.querySelector(".bodyContent");
		let contenido = `
		<h2 class="Subtitulos">Planificación de Almacenes</h2>
		<p class="parrafo">Las operaciones de producción requeridas para transformar los insumos en productos terminados deben planificarse diaria o semanalmente según el volumen y la naturaleza de los productos. Business Central ofrece funciones para satisfacer la demanda anticipada y real de ventas, ensamblaje y producción, así como funciones para la planificación de distribución utilizando unidades de almacenamiento y transferencias de ubicación.</p>
		<p class="parrafo"><b>Nota</b><br>Este tema describe principalmente la planificación para empresas involucradas en la gestión de fabricación o montaje, donde los pedidos de suministro resultantes pueden ser pedidos de producción, montaje, transferencia o compra. La interfaz principal para este trabajo de planificación es la página Hoja de trabajo de planificación .</p>
		<p class="parrafo">Business Central también admite la planificación del suministro para empresas mayoristas en las que los pedidos de suministro resultantes solo pueden ser pedidos de transferencia y compra. La interfaz principal para este trabajo de planificación es la página Hoja de trabajo de solicitud , que se describe indirectamente en este tema, ya que la mayoría de las funciones de planificación se aplican a ambas hojas de trabajo.</p>
		<p class="parrafo">La planificación puede verse como la preparación de las órdenes de suministro requeridas en los departamentos de compras, ensamblaje o fabricación para satisfacer la demanda de ventas o de artículos finales.</p>
		<p class="parrafo">La siguiente tabla describe una secuencia de tareas, con enlaces a los temas que las describen.</p>
		<table class="tabla1">
		<tr>
		<th>Descripción</th>
		<th>Ver</th>
		</tr>
		<tr>
		<td>Obtenga una breve introducción sobre cómo se puede utilizar el sistema de planificación para detectar y priorizar la demanda y sugerir un plan de suministro equilibrado.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/production-about-planning-functionality">Acerca de la funcionalidad de planificación</a></td>
		</tr>
		<tr>
		<td>Comprenda cómo funcionan todos los aspectos del sistema de planificación y cómo ajustar los algoritmos para cumplir con los requisitos de planificación en diferentes entornos.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/design-details-supply-planning">Detalles de diseño: planificación de suministro</a></td>
		</tr>
		<tr>
		<td>Aprenda cómo la lógica de planificación diferencia entre la demanda en las ubicaciones según la configuración de SKU y la demanda sin códigos de ubicación.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/production-planning-with-without-locations">Planificación con o sin ubicaciones</a></td>
		</tr>
		<tr>
		<td>Pronóstico de la demanda presentada por los componentes esperados de ventas y producción.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/production-how-to-create-a-forecast">Crear un pronóstico de demanda</a></td>
		</tr>
		<tr>
		<td>Cree órdenes de producción individuales o de proyecto a partir de una orden de venta para cubrir la demanda exacta de esa orden de venta.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/production-how-to-create-production-orders-from-sales-orders">Crear órdenes de producción a partir de órdenes de venta</a></td>
		</tr>
		<tr>
		<td>Utilice la página Planificación de pedidos para planificar manualmente la demanda de ventas o producción un nivel de BOM de producción a la vez.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/production-how-to-plan-for-new-demand">Plan para Nueva Demanda Orden por Orden</a></td>
		</tr>
		<tr>
		<td>Utilice la página Hoja de trabajo de planificación para ejecutar las opciones MPS y MRP para crear automáticamente un plan de suministro detallado o de alto nivel en todos los niveles de artículos.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/production-how-to-run-mps-and-mrp">Ejecute la planificación completa, MPS o MRP</a></td>
		</tr>
		<tr>
		<td>Utilice la página Hoja de trabajo de solicitud para crear automáticamente un plan de suministro detallado para cubrir la demanda de artículos que se reabastecen solo por compra o transferencia.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/production-about-planning-functionality#requisition-worksheet">Hoja de trabajo de solicitud</a></td>
		</tr>
		<tr>
		<td>Inicie o actualice una orden de producción como operaciones programadas aproximadas en el programa maestro de producción.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/production-how-to-replan-refresh-production-orders">Replanificar o actualizar órdenes de producción directamente</a></td>
		</tr>
		<tr>
		<td>Recalcular los calendarios de trabajo o centro de máquinas debido a cambios en la planificación.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/production-how-to-create-work-center-calendars#to-calculate-a-work-center-calendar">Para calcular un calendario de centro de trabajo</a></td>
		</tr>
		<tr>
		<td>Realice un seguimiento de la demanda del pedido (cantidad con seguimiento), la previsión, el pedido de venta abierto o el parámetro de planificación (cantidad sin seguimiento) que ha dado lugar a la línea de planificación en cuestión.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/production-how-track-demand-supply">Seguimiento de las relaciones entre la demanda y la oferta</a></td>
		</tr>
		<tr>
		<td>Vea el inventario disponible proyectado de un artículo en diferentes vistas y vea qué requisitos brutos, recibos de pedidos planificados y otros eventos influyen en él a lo largo del tiempo.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-availability-overview">Ver la disponibilidad de artículos</a></td>
		</tr>
		</table>
		<br>
		<p class="parrafo">¿Cuál es el nivel de almacén más adecuado para mi empresa en Business Central?</p>

		<p class="parrafo">Videotutorial Mejor almacén para  mi empresa, <a href="https://www.youtube.com/watch?v=D96h9e4t9zU">aquí</a></p>

		`;

		cuerpo.innerHTML= contenido;

	}
	/*===============================
	Administrar Inventario Almacén
	=================================*/
	let administrarInventario = () =>{
		let cuerpo = document.querySelector(".bodyContent");
		let contenido = `
		<h2 class="Subtitulos">Administrar Inventario</h2>
		<p class="parrafo">Para cada producto físico que intercambies, debes crear una ficha de artículo del tipo Inventario . Los artículos que ofrece a los clientes pero que no mantiene en inventario se pueden registrar como artículos de catálogo, que se pueden convertir en artículos de inventario cuando sea necesario. Puede aumentar o disminuir la cantidad de un artículo en el inventario registrándolo directamente en las entradas del libro mayor de artículos, como después de un conteo físico o si no registra compras.</p>
		<p class="parrafo">Los aumentos y disminuciones de inventario también se registran naturalmente cuando contabiliza documentos de compras y ventas, respectivamente. </p>
		<p class="parrafo">Las transferencias entre ubicaciones modifican las cantidades de inventario en los almacenes de su empresa.</p>
		<p class="parrafo">Para mejorar su visión general de los elementos y ayudarlo a encontrarlos, puede categorizarlos y asignarles atributos para buscarlos y ordenarlos.</p>
		<h3>Conciliación de inventario</h3>
		<p class="parrafo">Cuando registra transacciones de inventario, como envíos de ventas, facturas de compra o ajustes de inventario, los costos de artículos modificados se registran en entradas de valor de artículos. Para reflejar este cambio en el valor del inventario en sus libros financieros, los costos de inventario se registran automáticamente en las cuentas de inventario relacionadas en el libro mayor. Para cada transacción de inventario que registre, los valores apropiados se registran en la cuenta de inventario, la cuenta de ajuste y la cuenta COGS en el libro mayor.</p>
		<p class="parrafo">Aunque los costos de inventario se registran automáticamente en el libro mayor, aún es necesario asegurarse de que los costos de los bienes se transfieran a la transacción de venta saliente relacionada, especialmente en situaciones en las que vende bienes antes de facturar la compra de esos bienes. Esto se conoce como ajuste de costos. Los costos de los artículos se ajustan automáticamente cuando registra transacciones de artículos, pero también puede ajustar los costos de los artículos manualmente.</p>
		<h3>Tareas relacionadas con el inventario de almacén</h3>
		<p class="parrafo">En la tabla siguiente se describen las tareas relacionadas.</p>
		<table class="tabla1">
		<tr>
		<th>Descripción</th>
		<th>Ver</th>
		</tr>
		<tr>
		<td>Cree tarjetas de artículos para artículos de inventario que intercambie.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-register-new-items">Registrar nuevos artículos</a></td>
		</tr>
		<tr>
		<td>Estructura los artículos principales que vendes como kits que consisten en los componentes principales o que ensamblas por pedido o para almacenar.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-work-boms">Trabajar con listas de materiales</a></td>
		</tr>
		<tr>
		<td>Mantenga una visión general de los artículos y ayúdelo a encontrar y ordenar artículos organizándolos en categorías.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-categorize-items">Categorizar elementos</a></td>
		</tr>
		<tr>
		<td>Asigne atributos de artículos de diferentes tipos de valor a sus artículos para ayudarlo a ordenar y encontrar artículos.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-work-item-attributes">Trabajar con atributos de artículos</a></td>
		</tr>
		<tr>
		<td>Cree tarjetas de artículos especiales para los artículos que ofrece a los clientes pero que no mantiene en el inventario.</td>
		<td><a href="">Trabajar con elementos del catálogo</a></td>
		</tr>
		<tr>
		<td>Realice el conteo físico de su inventario con las páginas Orden de inventario físico y Registro de inventario físico.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-count-inventory-with-documents">Contar inventario usando documentos</a></td>
		</tr>
		<tr>
		<td>Realice conteos físicos, realice ajustes negativos o positivos y cambie información, como la ubicación o el número de lote, en las entradas del libro mayor de artículos.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-count-adjust-reclassify">Cuente, ajuste y reclasifique el inventario mediante diarios</a></td>
		</tr>
		<tr>
		<td>Vea la disponibilidad de artículos por ubicación, por período, por evento de compra o venta, o por su uso en listas de materiales (BOM) de ensamblaje o producción.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-availability-overview">Ver la disponibilidad de artículos</a></td>
		</tr>
		<tr>
		<td>Transfiera artículos de inventario entre ubicaciones mediante órdenes de transferencia, para administrar actividades de almacén o con el diario de reclasificación de artículos.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-transfer-between-locations">Transferir inventario entre ubicaciones</a></td>
		</tr>
		<tr>
		<td>Reserve inventario o artículos entrantes para órdenes de venta, órdenes de compra, órdenes de servicio, órdenes de ensamblado, órdenes de transferencia u órdenes de producción.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-to-reserve-items">Reservar artículos</a></td>
		</tr>
		<tr>
		<td>Configure el seguimiento de artículos para que pueda realizar un seguimiento de los números de serie de los artículos, por ejemplo, cuando necesite realizar un seguimiento de los artículos debido a las retiradas.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-setup-item-tracking">Configurar el seguimiento de artículos con números de serie, lote y paquete</a></td>
		</tr>
		<tr>
		<td>Asigne números de serie o números de lote a cualquier documento o línea de diario entrante o saliente.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-work-item-tracking">Trabajar con números de serie y de lote</a></td>
		</tr>
		<tr>
		<td>Encuentre dónde se utilizó cualquier número de serie o de lote en su cadena de suministro, como en situaciones de retiro.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-to-trace-item-tracked-items">Rastrear elementos: elementos rastreados</a></td>
		</tr>
		<tr>
		<td>Configure la descripción del artículo de un proveedor o cliente en su tarjeta de artículo para que pueda insertar rápidamente su descripción del artículo en los documentos comerciales.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-use-item-cross-refs">Usar referencias de elementos</a></td>
		</tr>
		<tr>
		<td>Administre operaciones comerciales en oficinas de ventas, departamentos de compras u oficinas de planificación de plantas en múltiples ubicaciones.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-responsibility-centers">Trabajar con centros de responsabilidad</a></td>
		</tr>
		<tr>
		<td>Utilice recursos con funciones específicas para varios servicios y elementos de servicio.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/service-how-setup-resource-allocation">Configurar asignación de recursos</a></td>
		</tr>

		</table>

		`;

		cuerpo.innerHTML= contenido;

	}
	/*===========================
	Gestionn de Almacenes
	=========================*/
	let gestionAlmacenes = () =>{
		let cuerpo = document.querySelector(".bodyContent");
		let contenido = `
		<h2 class="Subtitulos">Gestion de Almacenes</h2>

		<p class="parrafo">Después de recibir los bienes y antes de enviarlos, se llevan a cabo una serie de actividades internas del almacén para garantizar un flujo efectivo a través del almacén y para organizar y mantener los inventarios de la empresa.</p>
		<p class="parrafo">Las actividades típicas del almacén incluyen guardar artículos, mover artículos dentro o entre almacenes y seleccionar artículos para ensamblaje, producción o envío. El ensamblaje de artículos para la venta o el inventario también pueden considerarse actividades de almacén, pero se tratan en otra parte</p>
		<p class="parrafo">En grandes almacenes, estas distintas tareas de manipulación pueden separarse por departamentos y la integración gestionarse mediante un flujo de trabajo dirigido. En instalaciones más sencillas, el flujo está menos formalizado y las actividades de almacén se realizan con las denominadas ubicaciones y selecciones de inventario.</p>
		<p class="parrafo">Antes de poder realizar actividades de almacén, debe configurar el sistema para la complejidad relevante del procesamiento de almacén</p>
		<p class="parrafo">Las tareas relacionadas con el inventario de contar, ajustar y reclasificar artículos pueden implicar tareas de almacén que se deben realizar en las entradas de almacén antes de que puedan sincronizarse con las entradas del libro mayor de artículos relacionados.</p>
		<p class="parrafo">La siguiente tabla describe una secuencia de tareas, con enlaces a los temas que las describen.</p>
		<table class="tabla1">
		<tr>
		<th>Descripción</th>
		<th>Ver</th>
		</tr>
		<tr>
		<td>Registre la recepción (incluida la recepción en exceso) de artículos en ubicaciones de almacén, ya sea solo con una orden de compra, en configuraciones de ubicación simples, o con un recibo de almacén, en caso de procesamiento de almacén semiautomático o totalmente automatizado en la ubicación.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/warehouse-how-receive-items">Recibir artículos</a></td>
		</tr>
		<tr>
		<td>Omita los procesos de ubicación y selección para acelerar un artículo directamente desde la recepción o la producción hasta el envío.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/warehouse-how-to-cross-dock-items">Artículos Cross-Docking</a></td>
		</tr>
		<tr>
		<td>Ubique los artículos recibidos de compras, devoluciones de ventas, transferencias o salida de producción de acuerdo con el proceso de almacén configurado.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/warehouse-put-away-items">Guardar artículos</a></td>
		</tr>
		<tr>
		<td>Mover artículos entre contenedores en el almacén.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/warehouse-move-items"> Mover elementos</a></td>
		</tr>
		<tr>
		<td>Seleccione artículos para enviar, transferir o consumir en ensamblaje o producción, de acuerdo con el proceso de almacén configurado.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/warehouse-pick-items">Recogiendo artículos</a></td>
		</tr>
		<tr>
		<td>Registre el envío de artículos desde ubicaciones de almacén, ya sea solo con una orden de venta, en configuraciones de ubicación simples, o con un envío de almacén, en el caso de procesos de almacén semiautomáticos o totalmente automatizados en la ubicación.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/warehouse-how-ship-items">Enviar artículos</a></td>
		</tr>
		</table><br>
		<p class="parrafo">Videotutorial Configuración de almacenes y gestión de inventario, <a href="https://www.youtube.com/watch?v=EL-X4VJ4KXM">aquí</a> </p>

		`;

		cuerpo.innerHTML= contenido;

	}
/*===================
	Crear Producto
	========================*/
	let crearArticulo = () =>{
		let cuerpo = document.querySelector(".bodyContent");
		let contenido = `
		<h2 class="Subtitulos">Registrar nuevos artículos</h2>
		<p class="parrafo">Los artículos, entre otros productos, son la base de su negocio, los bienes o servicios que comercia. Cada artículo debe registrarse como una ficha de artículo.</p>
		<p class="parrafo">Las tarjetas de artículos contienen la información necesaria para comprar, almacenar, vender, entregar y contabilizar los artículos.</p>
		<p class="parrafo">La ficha del artículo puede ser de tipo <b>Inventario</b> , <b>Servicio</b>  o <b>Sin inventario</b> para especificar si el artículo es una unidad de inventario físico, una unidad de tiempo de mano de obra o una unidad física que no se rastrea en el inventario.</p>
		<p class="parrafo">Si compra el mismo artículo de más de un proveedor, puede conectar esos proveedores a la ficha del artículo. Los proveedores aparecerán en la página Catálogo de proveedores de artículos , de modo que pueda seleccionar fácilmente un proveedor alternativo.</p>
		<p class="parrafo">Los artículos del catálogo son artículos que usted ofrece a sus clientes pero no desea administrarlos en su sistema hasta que comience a venderlos. Los artículos del catálogo no son artículos regulares del tipo <b>Sin inventario</b> .</p>
		<p class="parrafo"><b>Nota </b> <br> Si existen plantillas de artículos para diferentes tipos de artículos, aparecerá una página cuando cree una nueva tarjeta de artículo desde donde puede seleccionar una plantilla apropiada. Si solo existe una plantilla de artículo, las nuevas tarjetas de artículo siempre usan esa plantilla.</p>
		<p class="parrafo">El siguiente procedimiento explica cómo crear una ficha de artículo desde cero.</p>
		<h3>Para crear una nueva ficha de producto</h3>
		<ul>
		<li><b>1.</b> Elija el Icono de la lupa, escriba  Productos y luego elija el enlace relacionado.</li>
		<li><b>2.</b> En la página de articulos  , elija la acción <b>Nuevo</b>. <br>Si solo existe una plantilla de artículo, se abre una nueva tarjeta de artículo con algunos campos llenos de información de la plantilla.</li>
		<li><b>3.</b> En la página <b>Seleccionar una plantilla para un nuevo elemento</b> , elija la plantilla que desea usar para la nueva tarjeta de elemento.</li>
		<li><b>4.</b> Elija el botón <b>Aceptar</b> . Se abre una nueva tarjeta de artículo con algunos campos llenos de información de la plantilla.</li>
		<li><b>5.</b> Proceda a completar o cambiar los campos en la ficha del artículo según sea necesario. Pase el cursor sobre un campo para leer una breve descripción.</li>
		</ul>
		<div class="img-content2">
		<img src="img/arti1.PNG" alt="">
		</div>
		<p class="parrafo">Puede ver o editar precios especiales o descuentos que otorga, o que su proveedor le otorga, para el artículo si se cumplen ciertos criterios, como el cliente, la cantidad mínima de pedido o la fecha de finalización. Para ello, elija las acciones Establecer precios especiales o Establecer descuentos especiales . Cada fila en, por ejemplo, la página Precios de venta representa un precio especial. Cada columna representa un criterio que se debe aplicar para otorgar a un cliente el precio especial que ingresa en el campo Precio unitario en la página Precios de venta .</p>
		<p class="parrafo">El artículo ahora está registrado y la ficha del artículo está lista para usarse en los documentos de compra y venta.</p>
		<h3>Eliminación de fichas de artículos</h3>
		<p class="parrafo">Si registró una transacción para un artículo, no puede eliminar la tarjeta porque las entradas del libro mayor pueden ser necesarias para la valoración o auditoría del inventario. Para eliminar tarjetas de artículos con entradas de libro mayor, comuníquese con el socio de Microsoft para hacerlo a través del código.</p>
		<h3>Categorías, atributos y variantes</h3>
		<p class="parrafo">Las categorías y los atributos son dos formas diferentes de agrupar artículos de inventario. La variante del artículo es una forma de indicar que un artículo específico está disponible en diferentes colores o tamaños, por ejemplo. Dependiendo de cómo configure su inventario, puede usar categorías para agrupar sillas versus escritorios y luego usar atributos para agrupar artículos verdes versus artículos azules, por ejemplo. Luego puede complementar esta configuración agregando variantes para cada tipo de silla y escritorio. Al agregar variantes, puede ejecutar informes como Disponibilidad de artículos por variante para identificar las diferencias entre las sillas azules y las sillas verdes, por ejemplo.</p>
		<p class="parrafo">Para especificar sus atributos realizaremos los sisguientes pasos:</p>
		<ul>
		<li><b>1.</b> En la ficha del articulo seleccionamos <b>Producto</b>, <b>Atributos</b>.</li>
		<li><b>2.</b> Se nos abrira una ventana <b>Editar - Valores de atributo de producto</b></li>
		<li><b>3.</b> Rellenamos los campos <b>Atributo</b> y <b>Valor</b>.</li>
		<li><b>4.</b>Le damos <b>Aceptar</b>.</li>
		</ul>
		<p class="parrafo">Ventana Editar atributos.</p>
		<div class="img-content2">
		<img src="img/arti2.PNG" alt="">
		</div>
		<p class="parrafo">Ficha del articulo con sus atributos.</p>
		<div class="img-content2">
		<img src="img/arti3.PNG" alt="">
		</div>

		<p class="parrafo">Videotutorial Como crear un nuevo producto, <a href="https://www.youtube.com/watch?v=pDuSfIWPlO4&list=PLyx3kyr4ant_aHVT5JXbKC4KOeO16N1Wv&index=1">aquí</a>.</p>

		`;

		cuerpo.innerHTML= contenido;

	}
	/*=====================
		Compras
		======================*/
		let compras = () =>{
			let cuerpo = document.querySelector(".bodyContent");
			let contenido = `

			<h2 class="Subtitulos">Compras</h2>
			<p class="parrafo">Crea una factura de compra o una orden de compra para registrar el costo de las compras y realizar un seguimiento de las cuentas por pagar. Si necesita controlar un inventario, las facturas de compra también se utilizan para actualizar dinámicamente los niveles de inventario para que pueda minimizar sus costos de inventario y brindar un mejor servicio al cliente. Los costos de compra, incluidos los gastos de servicio y los valores de inventario que resultan de la publicación de facturas de compra contribuyen a las cifras de ganancias y otros financieros en su área de trabajo.</p>
			<p class="parrafo">Debe usar órdenes de compra si su proceso de compra requiere que registre recibos parciales de una cantidad de pedido, por ejemplo, porque la cantidad total no estaba disponible con el proveedor. Si vende artículos entregándolos directamente de su proveedor a su cliente, como un envío directo, también debe usar órdenes de compra.</p>
			<p class="parrafo">Para obtener más información, consulte <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-drop-shipment"> Realizar envíos directos</a>. En todos los demás aspectos, las órdenes de compra funcionan de la misma manera que las facturas de compra.</p>
			<p class="parrafo">Puede hacer que las facturas de compra se creen automáticamente mediante el uso del servicio OCR (reconocimiento óptico de caracteres) para convertir las facturas en PDF de sus proveedores en documentos electrónicos, que luego se convierten en facturas de compra mediante un flujo de trabajo. Para usar esta funcionalidad, primero debe registrarse en el servicio OCR y luego realizar varias configuraciones. Para obtener más información, consulte  <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/across-income-documents">Documentos entrantes</a>.</p>
			<p class="parrafo">Los productos pueden ser tanto artículos de inventario como servicios. Para obtener más información, consulte <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-register-new-items">Registrar elementos nuevos</a>.</p>
			<p class="parrafo">Para todos los procesos de compra, puede incorporar un flujo de trabajo de aprobación, por ejemplo, para exigir que el gerente de contabilidad apruebe las compras grandes. Para obtener más información, consulte <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-use-approval-workflows">Usar flujos de trabajo de aprobación</a>.</p>
			<p class="parrafo">La siguiente tabla describe una secuencia de tareas, con enlaces a los temas que las describen.</p>
			<table class="tabla1">
			<tr>
			<th>Descripción</th>
			<th>Ver</th>
			</tr>
			<tr>
			<td>Cree una factura de compra para registrar su acuerdo con un proveedor para comprar productos en ciertos términos de entrega y pago.</td>
			<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-record-purchases">Registro de compras</a></td>
			</tr>
			<tr>
			<td>Cree una cotización de compra para reflejar una solicitud de cotización de su proveedor, que luego puede convertir en una orden de compra.</td>
			<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-request-quotes">Solicitar Cotizaciones</a></td>
			</tr>
			<tr>
			<td>Cree una factura de compra para todas las líneas o las seleccionadas en una factura de venta.</td>
			<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-purchase-products-sale">Comprar artículos para una venta</a></td>
			</tr>
			<tr>
			<td>Comprenda lo que sucede cuando publica documentos de compra.</td>
			<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/ui-post-purchases">Publicación de compras</a></td>
			</tr>
			<tr>
			<td>Realice una acción en una factura de compra registrada sin pagar para crear automáticamente una nota de crédito y cancelar la factura de compra o volver a crearla para que pueda hacer las correcciones.</td>
			<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-correct-cancel-unpaid-purchase-invoices">Corregir o cancelar facturas de ventas impagas</a></td>
			</tr>
			<tr>
			<td>Cree una nota de crédito de compra para revertir una factura de compra registrada específica para reflejar qué productos está devolviendo al proveedor y qué monto de pago cobrará.</td>
			<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-register-new-vendors">Procesar devoluciones o cancelaciones de compras</a></td>
			</tr>
			<tr>
			<td>Prepárese para facturar múltiples recibos del mismo proveedor una vez combinando los recibos en una sola factura.</td>
			<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-to-combine-receipts">Combinar recibos en una sola factura</a></td>
			</tr>
			<tr>
			<td>Convierta, por ejemplo, facturas electrónicas de sus proveedores en facturas de compra dentro de Business Central.</td>
			<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-to-receive-and-convert-electronic-documents">Recibir y convertir documentos electrónicos</a></td>
			</tr>
			<tr>
			<td>Descubra cómo Business Central calcula cuándo debe pedir un artículo para recibirlo en una fecha determinada.</td>
			<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-date-calculation-for-purchases">Cálculo de fecha para compras</a></td>
			</tr>
			<tr>
			<td>Resuelva la confusión cuando existen dos o más registros para el mismo proveedor.</td>
			<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-merge-duplicate-records">Combinar registros duplicados</a></td>
			</tr>
			<tr>
			<td>Administre su compromiso con un proveedor para comprar grandes cantidades entregadas en varios envíos a lo largo del tiempo.</td>
			<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/sales-how-to-create-blanket-sales-orders">Trabajo con órdenes de compra abiertas</a></td>
			</tr>
			</table><br>
			<h3>Números de documentos externos</h3>
			<p class="parrafo">En documentos de compra y diarios, puede especificar un número de documento que se refiera al sistema de numeración del proveedor. 
			Utilice este campo para registrar el número que el proveedor asignó a la orden, factura o nota de crédito. Luego puede usar el número más tarde si, por alguna razón,
			necesita buscar la entrada publicada usando este número.</p>
			<p class="parrafo">La ext. <b>Doc. Núm.</b> El campo Obligatorio en la página <b>Configuración de compras y cuentas por pagar</b> especifica si es obligatorio ingresar un número de
			documento externo en las siguientes situaciones:</p>
			<div class="contentList">
			<ul>
			<li>En el campo N.° de <b>factura del proveedor</b> , el campo <b>N.° de pedido</b> del proveedor o el campo <b>N.° de factura del proveedor</b>. Campo <b>Memo No.</b> en un encabezado de 
			compra.</li>
			<li>En el campo <b>Número de documento externo</b> en una línea de diario general, donde el campo <b>Tipo de documento</b> está configurado en Factura , Nota de crédito o Nota de cargo
			financiero y el campo <b>Tipo de cuenta</b> está configurado en Proveedor .</li>
			</ul>
			</div>
			<p class="parrafo">Si selecciona este campo, no será posible contabilizar una factura, una nota de crédito o el tipo de línea de diario general descrito anteriormente sin un número de 
			documento externo.</p>
			<p class="parrafo">El número de documento externo se incluye en los documentos registrados donde puede buscar por el número correspondiente. También puede buscar utilizando el número de
			documento externo al navegar en las entradas del libro mayor de proveedores.</p>
			<p class="parrafo">Una forma diferente de manejar números de documentos externos es usar el campo <b>Su referencia</b>. Si utiliza el campo Su referencia , el número se incluirá en los 
			documentos publicados y podrá buscarlo de la misma manera que para los valores de los campos <b>Número de documento externo</b>. Pero el campo no está disponible en las líneas de diario.</p>


			`;

			cuerpo.innerHTML= contenido;

		}
	/*==============================
		Crear Oferta de Compra
		==============================*/
		let crearCompra = () =>{
			let cuerpo = document.querySelector(".bodyContent");
			let contenido = `

			<h2 class="Subtitulos">Crear una oferta de compra</h2>
			<p class="parrafo">Las compras que se realizan al mejor precio mejoran la administración del inventario de una empresa, reducen los costes y tienen un efecto directo en la capacidad de la empresa de satisfacer a sus clientes.</p>
			<p class="parrafo">Business Central proporciona un sistema completo de administración de pedidos de compra que puede registrar, solicitar información completa sobre todos los proveedores, acuerdos de precios, acuerdos de descuento y planes de envío o recepción.</p>
			<p class="parrafo">El sistema de oferta de compra integrado ayuda a los agentes de compras a buscar las mejores condiciones de compra. Esto incluye una cómoda conversión a pedidos de compra para ofertas con éxito. Los agentes de compras pueden utilizar el sistema integrado de pedidos abiertos de compra para registrar acuerdos de compra por adelantado y también pueden emplear esta información registrada en pedidos de compra posteriores.</p>
			<p class="parrafo">Se puede usar una oferta de compra como borrador preliminar para un pedido de compra, y el pedido se puede convertir en una factura de compra o en un pedido.</p>
			<p class="parrafo">Para crear una oferta de compra, seleccione el icono buscar página en la esquina superior derecha de la página, introduzca Ofertas de compra y, a continuación, elija el vínculo relacionado.</p>
			<ul>
			<li><b>1.</b> Para crear un documento nuevo, seleccione la acción <b>Nuevo</b>. </li>
			<li><b>2.</b> En el campo Proveedor, especifique el nombre de un proveedor existente. Otros campos de la página <b>Oferta de compra</b> se rellenan ahora con la información estándar para el proveedor seleccionado. Si el proveedor no está registrado, primero debe registrarlo como proveedor. No necesita dejar la oferta de compra para crear un nuevo proveedor, simplemente seleccione <b>Nuevo</b>.</li>
			<li><b>3.</b> Si ha especificado un nombre de proveedor para un proveedor que no está registrado, podría recibir el siguiente mensaje, en el que puede seleccionar <b>Cree una nueva ficha de proveedor</b> y después seleccionar el botón Aceptar para continuar. <br>
			<div class="img-content2"><img src="img/compra1.png" alt=""></div>
			</li>
			<li><b>4.</b> En la página Seleccionar una plantilla para un proveedor nuevo, seleccione una plantilla y, a continuación, seleccione el botón <b>Aceptar</b>. Se abre una nueva <b>Ficha proveedor</b>, previamente rellenada con la información de la plantilla de proveedor seleccionada. El campo <b>Nombre</b>  contiene el nombre del nuevo proveedor que introdujo en la oferta de compra. Puede seguir rellenando los campos restantes en la ficha de proveedor. Cuando haya rellenado la ficha del proveedor, seleccione el botón <b>Aceptar</b> para volver a la página <b>Oferta de compra</b>.</li>
			<li><b>5.</b> Varios campos de la página <b>Oferta de compra</b> se rellenan ahora con la información de la nueva ficha del proveedor. Rellene los campos restantes en la ficha <b>General</b>, según sea necesario. Por ejemplo, puede modificar la fecha de pedido y agregar la fecha de recepción solicitada como una fecha en que desea que el proveedor entregue a la dirección de envío. <br><br>
			<div class="img-content2"><img src="img/compra2.PNG" alt=""></div>

			</li>
			<li><b>6.</b> Ahora puede rellenar las líneas Oferta de compra con artículos de inventario o servicios que solicita de un proveedor.</li>
			<li><b>7.</b> En la ficha desplegable Líneas, en el campo N.º, introduzca el número de un producto o servicio de inventario (si el valor del campo Tipo de esta línea es Producto). En el campo <b>Cantidad</b>, especifique el número de artículos que desea solicitar.</li>
			<li><b>8.</b> Si está comprando una gran cantidad de productos o servicios diferentes, es posible que tenga muchas líneas en la oferta de compra. En esta situación, puede usar la función <b>Modo de enfoque</b> para contraer el cuadro informativo y la ficha desplegable <b>General</b>. Seleccione el botón <b>Modo de enfoque</b> y se abrirá una nueva página, centrada en las líneas del pedido de compra.</li>
			<li><b>9.</b> Para imprimir o enviar esta <b>Oferta de compra</b>, use la acción <b>Imprimir/Enviar</b>.</li>
			<li><b>10.</b> Cuando se haya completado la oferta de compra y se hayan aceptado todas las condiciones de su proveedor, podrá convertir su oferta de compra en un pedido de compra. Seleccione la acción <b>Convertir en pedido</b>. Dynamics 365 Business Central confirma que la oferta de compra se ha convertido en un pedido y, a continuación, le informa sobre el nuevo número de pedido de compra. Cuando se selecciona <b>Aceptar</b>, la oferta de compra se elimina de la base de datos.</li>
			<li><b>11.</b> El pedido de compra se crea a partir de la información de la oferta de compra. En el campo N.º oferta del pedido de compra puede ver el número de oferta de compra.</li>
			<li><b>12.</b> Abrimos el nuevo pedido de compra.</li><br>
			<li>
			<div class="img-content2"><img src="img/compra3.PNG" alt=""></div>
			</li>
			</ul>
			<p class="parrafo">Videotutorial como realizar un pedido de compra, <a href="https://www.youtube.com/watch?v=sQBYIRneaKk&list=PLOHrSC2gN59oIA7sFMOuhKYoQ_fvZxB4u&index=2">aquí</a>.</p>

			`;

			cuerpo.innerHTML= contenido;

		}
/*===================
 Crear factura de compra		
 ===========================*/

 let facturaCompra = () =>{
 	let cuerpo = document.querySelector(".bodyContent");
 	let contenido = `
 	<h2 class="Subtitulos">Crear factura de compra</h2>
 	<p class="parrafo">Crea una factura de compra o una orden de compra para registrar el costo de las compras y realizar un seguimiento de las cuentas por pagar. Las facturas de compra y las órdenes de compra también se utilizan para actualizar dinámicamente los niveles de inventario, lo que significa que puede minimizar los costos de inventario y brindar un mejor servicio al cliente. Los costos de compra, incluidos los gastos de servicio y los valores de inventario que resultan de la publicación de facturas o pedidos de compra, contribuyen a las cifras de ganancias y otros indicadores financieros clave de rendimiento  en su área de trabajo.</p>
 	<p class="parrafo">Además de comprar artículos físicos ( tipo de artículo de inventario ), que afecta la valoración del inventario, puede comprar servicios representados por unidades de tiempo. Puede hacerlo con el tipo de elemento de servicio o con el tipo de línea de recursos .</p>
 	<p class="parrafo">Cuando reciba los artículos de inventario o el servicio adquirido esté completo, registre la factura de compra o el pedido para actualizar el inventario y los registros financieros y para activar el pago al proveedor de acuerdo con las condiciones de pago.</p>
 	<h3>Crear factura de compra desde pedido de compra</h3>
 	<ul>
 	<li><b>1.</b> Desde la página principal en el icono de la lupa de busqueda, insertamos <b>Pedidos Compra</b>, luego elija el enlace relacionado. <br>
 	<div class="img-content"><img src="img/facompra.PNG" alt=""></div>
 	</li>
 	<li><b>2.</b> Al ingresar a la tarjeta que nos mostrara todos los datos sobre el pedido de compra y verificar que todo esté correcto y si no necesitamos modificar nada, en la opción  <b>Registrar</b>, le damos aceptar en <b>recibir y facturar</b>. <br>
 	<div class="img-content2"><img src="img/facompra1.PNG" alt=""></div>
 	</li><br>
 	<li><b>3.</b> Una vez contabilizada la factura, podrá encontrarla en la lista de facturas contabilizadas <b>Historico de factura de compra</b>. <br>
 	<div class="img-content2"><img src="img/facompra2.PNG" alt=""></div>
 	</li>
 	</ul>
 	<h3>Cuándo usar órdenes de compra</h3>
 	<p class="parrafo">Debe usar órdenes de compra si su proceso de compra requiere que registre recibos parciales de una cantidad de pedido, por ejemplo, porque la cantidad total 
 	no está disponible con el proveedor. Si entrega artículos vendidos directamente de su proveedor a su cliente como un envío directo, también debe usar órdenes de compra.</p>
 	<h3>Facturas Registradas</h3>
 	<p class="parrafo">Una vez contabilizada la factura, podrá encontrarla en la lista de facturas contabilizadas. Tanto la lista Facturas de venta registradas como la lista Facturas de 
 	compra registradas muestran las facturas registradas con los números de factura finales. En la lista, puede buscar cada factura registrada y puede corregir o cancelar una factura 
 	registrada.</p>
 	<p class="parrafo">Para cada factura registrada, puede buscar estadísticas, dimensiones y los asientos contables que son el resultado de la factura registrada. También puede imprimir 
 	o enviar la factura contabilizada.</p>
 	<p class="parrafo">Puede corregir o cancelar fácilmente una factura de compra registrada antes de pagar al proveedor. Esto es útil si necesita corregir un error de escritura o cambiar 
 	la compra al principio del proceso de pedido. Obtenga más información en
 	<a href="https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-correct-cancel-unpaid-purchase-invoices">Corregir o cancelar facturas de compra impagas</a> .
 	Si ya pagó artículos o servicios en la factura de compra registrada, debe crear una nota de crédito de compra para revertir la compra. 
 	Obtén más información en <a href="https://learn.microsoft.com/en-us/dynamics365/business-central/purchasing-how-process-purchase-returns-cancellations">
 	Procesar devoluciones o cancelaciones de compras</a>.</p>
 	<p class="parrafo">Videotutorial de factura de compra desde pedido de venta en Business Central, 
 	<a href="https://www.youtube.com/watch?v=phGrR_NKIeQ&list=PLOHrSC2gN59oIA7sFMOuhKYoQ_fvZxB4u&index=1"> aquí</a>.</p>
 	`;

 	cuerpo.innerHTML= contenido;

 }
 /*======================
	Registro de Compras 
	========================*/
	let  registroCompra = () =>{
		let cuerpo = document.querySelector(".bodyContent");
		let contenido = `
		<h2 class="Subtitulos">Registro de Compra</h2>
		<p class="parrafo">Cuando se contabiliza un documento de compra, se actualizan la cuenta del proveedor, el libro mayor (G/L), los asientos del libro mayor de artículos y los 
		asientos del libro mayor de recursos.</p>
		<div class="contentList">
		<ul>
		<li>Correo</li>
		<li>Vista previa de la publicación</li>
		<li>Registrar e imprimir</li>
		<li>Informe de prueba</li>
		<li>Publicar lote</li>
		</ul>
		</div>
		<p class="parrafo">Para cada documento de compra, se crea una entrada de compra en la tabla <b> Entrada del L/M .</b> También se crea una entrada en la cuenta del <b>proveedor 
		en la tabla Entrada de libro mayor de proveedores</b> y una entrada del L/M en la cuenta de cuentas por pagar correspondiente. Además, la contabilización de la compra puede dar 
		lugar a un asiento del impuesto sobre el valor añadido (IVA) y un asiento del L/M por el importe del descuento. El hecho de que se registre una entrada para el descuento depende
		del contenido del campo Registro de descuento en la página <b>Configuración de compras y cuentas por pagar</b>.</p>
		<p class="parrafo">Para cada línea de compra, según corresponda, se crean entradas en el:</p>
		<div class="contentList">
		<ul>
		<li><b>Tabla Entrada de libro mayor de artículos</b> si la línea de compra es del tipo<b>Artículo .</b></li>
		<li><b>Tabla Entrada</b> de mayor si la línea de compra es del tipo <b>Cuenta</b> de mayor.</li>
		<li>La tabla<b> Entrada de libro mayor de recursos</b> si la línea de compra es del tipo <b> Recurso</b>.</li>
		</ul>
		</div>
		<p class="parrafo">Antes de comenzar a contabilizar, puede imprimir un informe de prueba que contenga toda la información en
		la orden de compra e indique cualquier error allí. Para imprimir el informe, seleccione <b>Contabilización</b> y, a continuación, seleccione <b>Informe de prueba</b>.</p>
		<p class="parrafo"><b>Importante</b><br>
		Cuando registra una orden de compra para artículos, puede crear tanto un recibo como una factura. Estos se pueden hacer de forma simultánea o independiente. 
		También puede crear un recibo parcial y una factura parcial completando el campo <b>Cantidad. a recibir</b> y <b>cant. a los campos de Factura</b> 
		en las líneas de orden de compra individuales antes de contabilizar. Tenga en cuenta que no puede crear una factura de compra a partir de una orden de 
		compra de productos o servicios que no se han recibido. Es decir, antes de poder facturar, debe haber registrado un recibo, o debe elegir recibir y facturar al mismo tiempo.</p>
		<p class="parrafo">Para registrar una factura de compra sin registrar un recibo de compra en Business Central, cree el documento en la página <b>Facturas de compra</b>.</p>
		<h3>Visualización de asientos contables</h3>
		<p class="parrafo">Cuando se completa la contabilización, las líneas de compra contabilizadas se eliminan del pedido. Un mensaje le informa cuando se completa la publicación. 
		Después de esto, podrá ver los asientos contabilizados en varias páginas, incluidas las páginas Asientos contables de <b>proveedores, Asientos contables, Asientos contables</b> 
		de <b>artículos</b>, <b>Asientos contables</b> de <b>recursos</b>, <b>Recibos</b> de compra y <b>Facturas</b> de compra contabilizadas .</p>
		<p class="parrafo">En la mayoría de los casos, puede abrir asientos contables desde la tarjeta o documento afectado. Por ejemplo, en la página Tarjeta de <b>proveedor</b> , 
		elija la acción <b>Entradas</b>.</p>

		`;

		cuerpo.innerHTML= contenido;

	}
/*========================
	Crear Proveedor
	=============================*/
	let crearProveedor = () =>{
		let cuerpo = document.querySelector(".bodyContent");
		let contenido = `
		<h2 class="Subtitulos">Registrar nuevos proveedores</h2>
		<p class="parrafo">Los proveedores proporcionan los productos que usted vende. Cada proveedor al que le compre debe estar registrado con una tarjeta de proveedor.</p>
		<p class="parrafo">Antes de registrar nuevos proveedores, debe configurar varios códigos de compra para seleccionar cuando llene las tarjetas de proveedores. 
		Después de crear todos los datos maestros necesarios, puede agregar características únicas para un proveedor, como priorizar el proveedor para fines de pago o 
		enumerar artículos que el proveedor y otros proveedores suministran. Otro grupo de tareas de configuración para proveedores es registrar sus acuerdos sobre descuentos, 
		precios y métodos de pago.</p>
		<p class="parrafo">Las tarjetas de proveedor contienen la información necesaria para comprar productos de cada proveedor.</p>
		<h3>Adición de nuevos proveedores</h3>
		<p class="parrafo">Puede agregar nuevos proveedores manualmente, completando la página Tarjeta de proveedor , o puede usar plantillas que contienen información predefinida.
		Por ejemplo, puede crear plantillas para diferentes tipos de perfiles de proveedores. El uso de plantillas ahorra tiempo al agregar nuevos proveedores y ayuda a garantizar 
		que la información sea correcta cada vez.</p>
		<p class="parrafo"><b>Nota</b><br>
		Si existen plantillas de proveedores para diferentes tipos de proveedores, cuando comience a crear una nueva tarjeta de proveedor, verá una página desde la que puede seleccionar 
		la plantilla adecuada. Si solo existe una plantilla de proveedor, las nuevas tarjetas de proveedor siempre usan esa plantilla.
		</p>
		<p class="parrafo">Después de crear una plantilla, puede usar la acción Aplicar plantilla para aplicarla a uno o más proveedores seleccionados. Para crear una plantilla, complete 
		la información que desea reutilizar en la página Tarjeta de proveedor y luego guárdela como plantilla.</p>
		<p class="parrafo">Las direcciones de envío se utilizan cuando imprime cheques para pagar a sus proveedores, y los proveedores pueden tener múltiples direcciones de envío para los 
		pagos. Por ejemplo, un proveedor puede suministrar un artículo de una empresa subsidiaria, pero desea recibir el pago en su sede. Business Central le permite configurar varias 
		direcciones de correo para cada proveedor y puede elegir la ubicación correcta para enviar los pagos factura por factura.</p>
		<p class="parrafo">Las direcciones de envío se especifican en las páginas de la Tarjeta de proveedor y en la ficha desplegable Envío y pagos en las órdenes de compra y las facturas.
		Cuando crea líneas de diario de pago usando las acciones Pagar proveedor o Crear pago en la página de lista de proveedores o la página Tarjeta de proveedor, 
		o la acción Aplicar entradas en un diario de pago, se asigna el código de remitente en la entrada del libro mayor del proveedor. Puede sobrescribir este valor.</p>
		<h3>Para crear un nuevo proveedor</h3>
		<ul>
		<li><b>1.</b> Elija el Icono de busqueda, ingrese <b>Proveedores</b>  y luego elija el enlace relacionado.</li>
		<li><b>2.</b> En la página de <b>Proveedores</b>, elija <b>Nuevo</b>.
		<div class="img-content"><img src="img/proveedores1.PNG" alt=""></div>
		<p>Si existe más de una plantilla de proveedor, se abre una página desde la que puede seleccionar una plantilla de proveedor. En ese caso, siga los siguientes dos pasos.</p>
		<ul>
		<li><b>a.</b> En la página Seleccionar una plantilla para un nuevo proveedor , elija la plantilla que desea usar para la nueva tarjeta de proveedor. </li>
		<li><b>b.</b> Elija el botón Aceptar . Se abre una nueva tarjeta de proveedor con algunos campos llenos de información de la plantilla.</li>
		</ul>
		</li>
		<li><b>3.</b> Proceda a completar o cambiar campos en la tarjeta de proveedor según sea necesario. Pase el cursor sobre un campo para leer una breve descripción.</li>
		<li><b>4.</b> Luego de Crear el nuevo proveedor guardamos los cambios. <br><br>
		<div class="img-content2"><img src="img/proveedores2.PNG" alt=""></div>
		</li>
		</ul>
		<p class="parrafo">El proveedor ahora está registrado y la tarjeta de proveedor está lista para usar en los documentos de compra.</p>
		<p class="parrafo">Si desea utilizar esta ficha de proveedor como plantilla cuando cree nuevas fichas de proveedor, puede guardarla como plantilla de proveedor. </p>
		<p class="parrafo"><b>Nota</b><br>
		Si no conoce la dirección de facturación que se utilizará para cada factura de un proveedor, no complete el campo No. en la ficha desplegable General . 
		En su lugar, elija el número de proveedor de pago después de haber configurado una cotización de compra, un pedido o un encabezado de factura.
		</p>
		<h3>Eliminación y edición de la información del proveedor</h3>
		<p class="parrafo">Puede editar la información en las tarjetas de proveedor en cualquier momento. Sin embargo, si registró una transacción para un proveedor, 
		no puede eliminar la tarjeta porque es posible que se necesiten las entradas del libro mayor para la auditoría. Para eliminar tarjetas de proveedor con entradas de libro mayor,
		comuníquese con su socio de Microsoft para hacerlo a través del código.</p>
		<p class="parrafo"><b>Nota</b><br>Puede cambiar el Número de cuenta bancaria internacional (IBAN) en una cuenta bancaria de proveedor sin que el cambio afecte sus entradas
		históricas de registro de transferencias de crédito. Las entradas del registro de transferencias de crédito almacenan el IBAN del destinatario y el número de cuenta bancaria del
		destinatario especificados en los campos Cuenta bancaria del proveedor y Nombre del destinatario de la página Tarjeta del proveedor cuando se crearon las entradas.</p>
		<p class="parrafo">Videotutorial como crear nuevo proveedor , <a href="https://www.microsoft.com/en-us/videoplayer/embed/RE3PZtd?rel=0&postJsllMsg=true">aquí</a>.</p>

		`;

		cuerpo.innerHTML= contenido;

	}
	/*==============================
	gregar Banco Proveedor
	==============================*/

	let agregarBancoPro = () =>{
		let cuerpo = document.querySelector(".bodyContent");
		let contenido = `

		<h2 class="Subtitulos">Configurar cuentas bancarias de proveedores</h2>
		<p class="parrafo">Así como puede usar la información de la cuenta bancaria en Business Central para realizar un seguimiento de las transacciones bancarias de su empresa, 
		también puede configurar los detalles bancarios de los proveedores.</p>
		<h3>Agregar o editar una cuenta bancaria de proveedor</h3>
		<ul>
		<li><b>1.</b> Elija El icono de busqueda, ingrese <b>Proveedores</b> y luego elija el enlace relacionado.</li>
		<li><b>2.</b> Abra la tarjeta del porveedor seleccionado.</li>
		<li><b>3.</b> Elija <b>Navegar</b> y luego <b>Bancos</b>.</li>
		<li><b>4.</b> En la Lista de <b>cuentas bancarias de proveedores</b> , seleccione la cuenta bancaria correspondiente o agregue una nueva cuenta bancaria seleccionando <b>Nueva</b>.</li>
		<li><b>5.</b> En la página <b>Tarjeta de cuenta bancaria del proveedor</b> , complete los campos según sea necesario. Pase el cursor sobre un campo para leer una breve descripción.</li>
		</ul><br>
		<div class="img-content2"><img src="img/Banco1.PNG" alt=""></div>
		<p class="parrafo"><b>Nota</b><br> Algunos campos están ocultos hasta que elige la acción <b>Mostrar más</b>  , generalmente porque se usan con poca frecuencia. 
		Otros deben agregarse a través de la personalización. Para obtener más información, consulte <b>Personalizar su espacio de trabajo</b>.</p>
		<p class="parrafo"><b style="background-color:red; padding: 5px;color: white;">Advertencia</b><br>Algunos campos de la cuenta bancaria del proveedor contienen datos comerciales confidenciales, 
		como el número de sucursal bancaria, el número de cuenta bancaria , el código <b>SWIFT</b> y el código <b>IBAN</b>. Para obtener más información sobre cómo monitorear y recibir 
		notificaciones cuando alguien cambia un valor en esos campos, consulte <b>Monitoreo de campos confidenciales</b>.</p>
		`;

		cuerpo.innerHTML= contenido;

	}
	/*=========================
	Recursos Humanos
	==============================*/

	let recursosHumanos = () =>{
		let cuerpo = document.querySelector(".bodyContent");
		let contenido = `
		<h2 class="Subtitulos">Administrar Recursos Humanos</h2>
		<p class="parrafo">Básicamente, los Recursos Humanos de una empresa es el conjunto de empleados que la constituyen, es decir, todos nosotros. El área de RRHH será quien se encargue de la gestión y administración del capital humano que es el motor de la organización.</p>
		<p class="parrafo">Contar con un Departamento de Recursos Humanos es crucial para el éxito de una empresa y puede ser el recurso más importante para mejorar y mantener a los empleados motivados. Será el encargado de la selección, contratación, capacitación y motivación para así cumplir las expectativas de todo personal que conforma la empresa y los objetivos comerciales de la misma.</p>

		<p class="parrafo">En Business Central, puede mantener registros detallados de sus empleados. Puede registrar y mantener la información de los empleados, como contratos de trabajo, información confidencial, calificaciones y contactos de los empleados.</p>
		<p class="parrafo">También puede registrar las ausencias de los empleados, lo que le permite analizar las ausencias registradas según sea necesario.</p>
		<p class="parrafo">Para comenzar a usar la funcionalidad de Recursos Humanos, debe configurar empleados y otra información básica. Luego puede asociar varios códigos a un empleado, lo que le permite filtrar información para empleados específicos.</p>
		<p class="parrafo">La siguiente tabla describe una secuencia de tareas, con enlaces a los temas que las describen.</p>
		<table class="tabla1">
		<tr>
		<th>Descripción</th>
		<th>Ver</th>
		</tr>
		<tr>
		<td>Registre nuevos empleados o edite registros para empleados existentes y adjunte información relacionada, como contratos y artículos.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/hr-how-register-employees">Registrar Empleados</a></td>
		</tr>
		<tr>
		<td>Registre la ausencia de los empleados y vea las estadísticas de ausencia por varios filtros.</td>
		<td><a href="https://learn.microsoft.com/en-us/dynamics365/business-central/hr-how-manage-absence">Administrar la ausencia de los empleados</a></td>
		</tr>
		</table><br>  
		<p class="parrafo">Videotutorial de Recursos humanos, <a href="https://www.youtube.com/watch?v=eojFSCQzebk">aquí</a>.</p>
		`;

		cuerpo.innerHTML= contenido;

	}

	/*==========================
		Registrar Empleados
		========================*/

		let registroEmpleado = () =>{
			let cuerpo = document.querySelector(".bodyContent");
			let contenido = `

			<h2 class="Subtitulos">Registrar Empleados</h2>
			<p class="parrafo">Para usar la funcionalidad de Recursos Humanos, primero debe agregar a cada empleado completando los campos en la página de la Tarjeta de Empleado </p>
			<h3>Adición de nuevos empleados</h3>
			<p class="parrafo">Puede agregar nuevos empleados manualmente, completando los campos en la página de la Tarjeta de empleado , o puede usar plantillas que contienen 
			información predefinida. Por ejemplo, puede crear plantillas para diferentes tipos de perfiles de empleados. El uso de plantillas ahorra tiempo al agregar nuevos
			empleados y ayuda a garantizar que la información sea correcta cada vez. Si crea plantillas para más de un tipo de empleado, puede elegir la plantilla que usará
			 cuando agregue un empleado. Si crea solo una plantilla, se usará para todos los nuevos empleados. Después de crear una plantilla, puede usar la acción Aplicar
			  plantilla para aplicarla a uno o más empleados seleccionados. Para crear una plantilla, complete la información que desea reutilizar en la página Tarjeta de empleado
			   y luego guárdela como plantilla.</p>
			<p class="parrafo">Puede modificar los datos de un empleado en cualquier momento. Mantener actualizados los registros de los empleados puede simplificar las tareas 
			relacionadas con el personal. Por ejemplo, si cambia la dirección de un empleado, registre esto en la página Tarjeta de empleado.</p>
			<h3>Para agregar un empleado</h3>
			<ul>
			<li><b>1.</b> Elija el icono de busqueda, ingrese <b>Empleados</b> y luego elija el enlace relacionado</li>
			<li><b>2.</b> Elija la acción <b>Nuevo</b></li>
			<li><b>3.</b> En la página <b>Tarjeta de empleado</b>, complete los campos según sea necesario. para el cursor sobre un campo para leer una breve descripción.</li>
			</ul>
			<div class="img-content2"><img src="img/emple1.PNG" alt=""></div>
			<h3>Para insertar una foto de un empleado</h3>
			<p class="parrafo">Si tiene una foto de un empleado, puede insertarla en la tarjeta de empleado.</p>
			<ul>
			<li><b>1.</b> Elija el icono de busqueda, ingrese <b>Empleados</b> y luego elija el enlace relacionado.</li>
			<li><b>2.</b> Abra la tarjeta de empleado correspondiente.</li>
			<li><b>3.</b> En el cuadro informativo <b>Imagen del empleado</b>, elija el botón desplegable y luego seleccione importar.</li>
			<li><b>4.</b> En la página <b>Seleccionar una imagen para cargar</b>, seleccione el botón <b>Elejir</b>.</li>
			<li><b>5.</b> Seleccione el archivo y luego elija <b>Abrir</b>.</li>
			</ul>

			<p class="parrafo">La imagen se insertara en el cuadro informativo <b>Imagen del empleado</b>.</p>

			`;

			cuerpo.innerHTML= contenido;

		}
/*===============
Ausencia Empleados
=================*/
let ausenciaEmpleado = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `

	<h2 class="Subtitulos">Administrar la ausencia de los empleados</h2>
	<p class="parrafo">Para administrar la ausencia de un empleado, debe registrar la ausencia en la página de <b>Registro de Ausencias</b> . Luego se puede ver de diferentes
	 maneras para el análisis y las necesidades de informes.</p>
	<p class="parrafo">Puede ver las ausencias de los empleados en dos páginas diferentes: </p>
	<div class="contentList">
	<ul>
	<li>La página de <b>Registro de Ausencias</b>, donde registra todas las ausencias de los empleados con una línea para cada ausencia.</li>
	<li>La página de <b>Ausencias de Empleados</b>, donde se muestran las ausencias de un solo empleado. Esta es la información que ingresó en la página de <b>Registro de Ausencias</b>, filtrada por el empleado en particular.</li>
	</ul>
	</div>
	<p class="parrafo">Para obtener estadísticas significativas, siempre debe usar la misma unidad de medida (hora o día) al registrar las ausencias de los empleados.</p>
	<div class="img-content"><img src="img/ausencia1.PNG" alt=""></div>
	<h3>Para registrar la ausencia del empleado</h3>
	<p class="parrafo">Puede registrar las ausencias de los empleados diariamente o en algún otro intervalo que satisfaga las necesidades de su organización.</p>
	<ul>
	<li><b>1.</b> En la esquina superior derecha en el icono de busqueda, ingrese <b>Registro de ausencias</b> y luego elija el enlace relacionado.</li>
	<li><b>2.</b> Elija la acción <b>Nuevo</b>.</li>
	<li><b>3.</b> Complete una línea para cada ausencia de empleado que desee registrar. </li>
	<li><b>4.</b> Cierra la página.</li>
	</ul>
	<p class="parrafo"><b>Nota</b><br>Para obtener estadísticas significativas, utilice siempre la misma unidad de medida, hora o día, al registrar las ausencias de los empleados.</p>
	<div class="img-content"><img src="img/emple2.PNG" alt=""></div>
	<p class="parrafo">La visualización de las ausencias nos ayudará mucho a la hora de poder elaborar las nóminas de los trabajadores y determinar con exactitud el salario
	 correspondiente de cada uno.</p>

	`;

	cuerpo.innerHTML= contenido;

}



/*Configuracion de finanzas*/
let configfinanzas = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `
	<table class="tabla1">
	<tr>
	<th>A</th>
	<th>Ver</th>
	</tr>
	<tr>
	<td>Ver o editar cuentas del libro mayor en las que se contabilizan todas las entradas del libro mayor</td>
	<td><a href="">Configurar o cambiar el plan de cuentas</a></td>
	</tr>
	<tr>
	<td>Especifique cómo desea que le paguen los clientes y cómo desea pagar a sus proveedores.</td>
	<td><a href="">Configurar métodos de pago</a></td>
	</tr>
	<tr>
	<td>Especifique las condiciones de pago para administrar las fechas de vencimiento y calcular posibles descuentos por pago.</td>
	<td><a href="">Configurar condiciones de pago</a></td>
	</tr>
	<tr>
	<td>Especifique los grupos de contabilización que asignan entidades como clientes, proveedores, artículos, recursos y documentos de compra y venta a las cuentas del libro mayor.</td>
	<td><a href="">Configurar grupos de contabilización</a></td>
	</tr>
	<tr>
	<td>Cree informes financieros y defina categorías de cuentas que determinen el contenido de los gráficos e informes financieros, como los informes de hoja de balance y estado de resultados.</td>
	<td><a href="">Preparar informes financieros con datos financieros y categorías de cuentas</a></td>
	</tr>
	<tr>
	<td>Configure una tolerancia por la cual el sistema cierra una factura incluso si el pago, incluido cualquier descuento, no cubre completamente el monto de la factura.</td>
	<td><a href="">Trabajar con tolerancias de pago y tolerancias de descuento de pago</a></td>
	</tr>
	<tr>
	<td>Configurar periodos fiscales.</td>
	<td><a href="">Trabajar con períodos contables y años fiscales</a></td>
	</tr>
	<tr>
	<td>Configure los términos de la factura que les recuerden a sus clientes que deben realizar el pago.</td>
	<td><a href="">Configurar términos y niveles de recordatorio</a></td>
	</tr>
	<tr>
	<td>Defina cómo informa a las autoridades fiscales los importes del impuesto sobre el valor añadido (IVA) recaudados por las ventas.</td>
	<td><a href="">Configurar el impuesto al valor agregado (IVA)</a></td>
	</tr>
	<tr>
	<td>Prepárese para manejar el IVA no realizado en relación con los métodos de contabilidad basados ​​en efectivo.</td>
	<td><a href="">Configurar el IVA no realizado para la contabilidad de caja</a></td>
	</tr>
	<tr>
	<td>Defina las monedas extranjeras con las que comercia o reporta transacciones.</td>
	<td><a href="">Configurar monedas</a></td>
	</tr>
	<tr>
	<td>Configure sus funciones de Ventas y Compras para manejar pagos en moneda extranjera.</td>
	<td><a href="">Habilitar la aplicación de asientos contables en diferentes monedas</a></td>
	</tr>
	<tr>
	<td>Defina una o más monedas adicionales para que los montos se informen automáticamente tanto en la moneda local (LCY) como en una moneda de informe adicional en cada asiento del libro mayor (G/L) y en otros asientos.</td>
	<td><a href="">Configurar una moneda de informe adicional</a></td>
	</tr>
	<tr>
	<td>Ajuste periódicamente los equivalentes de divisas adicionales para compensar las fluctuaciones de los tipos de cambio.</td>
	<td><a href="">Actualizar tipos de cambio de moneda</a></td>
	</tr>
	<tr>
	<td>Defina múltiples tasas de interés para usar en diferentes períodos para pagos atrasados ​​en transacciones comerciales.</td>
	<td><a href="">Configurar tasas de interés múltiples</a></td>
	</tr>
	<tr>
	<td>Haga arreglos para que los montos se redondeen automáticamente a medida que se crean las facturas.</td>
	<td><a href="">Configurar el redondeo de facturas</a></td>
	</tr>
	<tr>
	<td>Agregue nuevas cuentas al plan de cuentas existente.</td>
	<td><a href="">Configuración del plan de cuentas</a></td>
	</tr>
	<tr>
	<td>Configure gráficos de inteligencia empresarial (BI) para analizar el flujo de caja.</td>
	<td><a href="">Configuración del análisis de flujo de caja</a></td>
	</tr>
	<tr>
	<td>Habilitar la facturación de un cliente no configurado en el sistema.</td>
	<td><a href="">Configurar clientes en efectivo</a></td>
	</tr>
	<tr>
	<td>Configure los informes de Intrastat y envíe el informe a una autoridad.</td>
	<td><a href="">Configurar e informar Intrastat</a></td>
	</tr>
	<tr>
	<td>Asegúrese de que un asiento de diario se asigne entre diferentes cuentas, como cantidad, porcentaje o monto, cuando lo publique en el diario.</td>
	<td><a href="">Usar claves de asignación en diarios generales</a></td>
	</tr>
	<tr>
	<td>Configure códigos fuente y códigos de motivo para ayudar a realizar un seguimiento de los registros de auditoría.</td>
	<td><a href="">Configuración de códigos fuente y códigos de motivo para registros de auditoría</a></td>
	</tr>
	<tr>
	<td>Especifique los informes predeterminados que se utilizarán para diferentes tipos de documentos.</td>
	<td><a href="">Selección de informes en Business Central</a></td>
	</tr>
	</table>
	<p class="parrafo"><b>Nota</b><br>Según su ubicación geográfica, algunas páginas de Business Central pueden contener 
	campos que no se describen en los artículos enumerados anteriormente porque se aplican a personalizaciones o funciones locales. 
	Pase el cursor sobre un campo para leer una breve descripción.</p>

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