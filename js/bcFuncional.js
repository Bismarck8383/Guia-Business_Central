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
/*

let tableRelation = () =>{
	let cuerpo = document.querySelector(".bodyContent");
	let contenido = `


	`;

	cuerpo.innerHTML= contenido;

	}
	*/