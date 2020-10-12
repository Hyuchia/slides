"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

// Define the messages used in the game.
var messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='http://monogatari.hyuchia.com/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='http://monogatari.hyuchia.com/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
var notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
var particles = {

};

// Define the music used in the game.
var music = {

};

// Define the voice files used in the game.
var voice = {

};

// Define the sounds used in the game.
var sound = {

};

// Define the videos used in the game.
var videos = {

};

// Define the images used in the game.
var images = {
	"roomba": "roomba.png",
	"dirt": "dirt.png"
};

// Define the backgrounds for each scene.
var scenes = {
	"1": "computer-vision.jpg",
	"street": "street.jpg",
	"success": "exito.jpg",
	"autopilot": "autopilot.jpg",
	"sensors": "autopilot-sensors.jpg",
	"cave": "cave.jpg",
	"universe": "universe.jpg",
	"determinism": "derterminism.jpg",
	"time": "time.jpg",
	"moment": "moment.jpg",
	"sequence": "sequence.jpg",
	"lapse": "lapse.gif"
};

// Define the Characters
var characters = {
	"h": {
		"Name": "Hikaru",
		"Color": "#5bcaff"
	}
};

var script = {
	// The game starts here.
	"Start": [
		"scene black",

		"centered Da click o presiona espacio para avanzar",

		"scene 1 with fadeIn",

		"Un agente es cualquier cosa capaz de percibir su medio ambiente con la ayuda de sensores y actuar en ese medio utilizando actuadores",

		"scene sensors with fadeIn",

		"El término percepción se utiliza en este contexto para indicar que el agente puede recibir entradas en cualquier instante. La secuencia de percepciones de un agente refleja el historial completo de lo que el agente ha recibido.",

		"scene autopilot with fadeIn",

		"En general, un agente tomará una decisión en un momento dado dependiendo de la secuencia completa de percepciones hasta ese instante.",

		"scene black",

		"show roomba at left with fadeIn",

		"Por ejemplo, una aspiradora inteligente que solo puede moverse entre izquierda o derecha",

		"hide roomba",
		"show roomba at right with slideInLeft",
		"show dirt at left with fadeIn",

		"Además, puede percibir en qué cuadrante se encuentra y si hay suciedad en el. Con dicha información, decidirá si moverse hacia la izquierda o derecha, aspirar la suciedad o no hacer nada",

		"hide roomba",
		"show roomba at left with slideInRight",
		"hide dirt with fadeOut",

		"El comportamiento del agente viene dado por la función del agente que proyecta una percepción dada en una acción.",

		"hide roomba",

		"centered ¿Qué hace que un agente sea bueno o malo, inteligente o estúpido?",

		"scene success with fadeIn",

		"Un agente racional es aquel que hace lo correcto, es decir aquello que permite al agente obtener un resultado mejor. Por tanto, se necesita determinar una forma de medir el éxito",

		"scene black",

		"show criteria.png with fadeIn",

		"Las medidas de rendimiento incluyen los criterios que determinan el éxito en el comportamiento del agente. Cuando se sitúa un agente en un medio, éste genera una secuencia de acciones de acuerdo con las percepciones que recibe. Esta secuencia de acciones hace que su hábitat pase por una secuencia de estados. Si la secuencia es la deseada, entonces el agente habrá actuado correctamente",

		"Un agente racional puede maximizar su medida de rendimiento limpiando la suciedad, tirando la basura al suelo, limpiándola de nuevo, y así sucesivamente. Una medida de rendimiento más adecuada recompensaría al agente por tener el suelo limpio.",

		"Por ejemplo, podría ganar un punto por cada cuadrícula limpia en cada período de tiempo (quizás habría que incluir algún tipo de penalización por la electricidad gastada y el ruido generado)",

		"scene black",

		"centered Racionalidad",

		"centered En cada posible secuencia de percepciones, un agente racional deberá emprender aquella acción que supuestamente maximice su medida de rendimiento, basándose en las evidencias aportadas por la secuencia de percepciones y en el conocimiento que el agente mantiene almacenado.",

		"centered Omnisciencia, aprendizaje y autonomía",

		"centered Un agente omnisciente conoce el resultado de su acción y actúa de acuerdo con él.",

		"centered La racionalidad maximiza el rendimiento esperado, mientras la perfección maximiza el resultado real, la elección racional depende sólo de la secuencia de percepción hasta la fecha",

		"scene white",

		"show info.png with fadeIn",

		"Llevar a cabo acciones con la intención de modificar percepciones futuras, en ocasiones proceso denominado recopilación de información, que puede ser proporcionado por la exploración.",

		"hide info.png",

		"show learning.gif with fadeIn",

		"El agente racional no sólo recopile información, sino que aprenda lo máximo posible de lo que está percibiendo. La configuración inicial del agente puede reflejar un conocimiento preliminar del entorno, pero a medida que el agente adquiere experiencia éste puede modificarse y aumentar",

		"scene cave with fadeIn",

		"Se dice que un agente carece de autonomía cuando se apoya más en el conocimiento inicial que le proporciona su diseñador que en sus propias percepciones. Un agente racional debe ser autónomo, debe saber aprender a determinar cómo tiene que compensar el conocimiento incompleto o parcial inicial.",

		"scene black",

		"centered Entornos de Trabajo",

		"centered REAS (Rendimiento, Entorno, Actuadores, Sensores)",

		"show taxi.png",

		"En el caso de un taxista automático, podemos notar que su entorno de trabajo es más complicado que el de la aspiradora automática",

		"scene street with fadeIn",

		"En su <b>entorno</b> tiene caminos, otro tráfico, peatones y clientes",

		"show velocimetro.png at left with fadeIn",

		"Podemos definir <b>medidas de rendimiento</b> como si es seguro, rápido, legal, si el viaje fue confortable, y si está maximizando del beneficio",

		"show brakes.png at right with fadeIn",

		"Tiene <b>actuadores</b> como la dirección, acelerador, frenos, señales, bocinas y visualizador",

		"scene white",

		"show sensors.png with fadeIn",

		"Finalmente, tiene un conjunto de <b>sensores</b> que le permiten percibir su medio ambiente cómo cármaras, sónar, velocímetro, GPS, sensores del motor etc.",

		"scene black",
		"centered Propiedades de los entornos de trabajo",

		"centered Totalmente observable vs. parcialmente observable",

		"scene universe with fadeIn",

		"Si los sensores del agente le proporcionan acceso al estado completo del medio en cada momento, entonces se dice que el entorno de trabajo es totalmente observable",

		"Un entorno puede ser parcialmente observable debido al ruido y a la existencia de sensores poco exactos o porque los sensores no reciben información de parte del sistema",

		"scene black",

		"centered Determinista vs. estocástico",

		"scene determinism with fadeIn",

		"Si el siguiente estado del medio está totalmente determinado por el estado actual y la acción ejecutada por el agente, entonces se dice que el entorno es determinista; de otra forma es estocástico",

		"scene black",
		"centered Episódico vs. secuencial",

		"scene sequence with fadeIn",

		"En los medios episódicos la elección de la acción en cada episodio depende sólo del episodio en sí mismo.",

		"En entornos secuenciales, por otro lado, la decisión presente puede afectar a decisiones futuras.",

		"scene black",
		"centered Estático vs. dinámico",

		"scene lapse with fadeIn",

		"Si el entorno puede cambiar cuando el agente está deliberando, entonces se dice que el entorno es dinámico para el agente; de otra forma se dice que es estático",

		"scene black",
		"centered Discreto vs. continuo",

		"centered La distinción entre discreto y continuo se puede aplicar al estado del medio, a la forma en la que se maneja el tiempo y a las percepciones y acciones del agente",

		"scene black",
		"centered Agente individual vs. multiagente",

		"centered Esa... era una facil",

		"scene black",
		"centered Estructura de los Agentes",

		"centered El trabajo de la IA es diseñar el programa del agente que implemente la función del agente que proyecta las percepciones en las acciones. Se asume que este programa se ejecutará en algún tipo de computador con sensores físicos y actuadores, lo cual se conoce como arquitectura:",

		"centered Agente = arquitectura + programa",

		"centered La arquitectura hace que las percepciones de los sensores estén disponibles para el programa, ejecuta los programas, y se encarga de que los actuadores pongan en marcha las acciones generadas",

		"scene black",
		"centered Agentes reactivos simples",

		"scene white",
		"show 1.png with fadeIn",

		"Estos agentes seleccionan las acciones sobre la base de las percepciones actuales, ignorando el resto de las percepciones históricas.",

		"Los bucles infinitos son a menudo inevitables para los agentes reactivos simples que operan en algunos entornos parcialmente observables. Salir de los bucles infinitos es posible si los agentes pueden seleccionar sus acciones aleatoriamente",

		"scene black",
		"centered Agentes reactivos basados en modelos",
		"scene white",
		"show 2.png with fadeIn",

		"La forma más efectiva que tienen los agentes de manejar la visibilidad parcial es almacenar información de las partes del mundo que no pueden ver.",

		"El agente debe mantener algún tipo de estado interno que dependa de la historia percibida y que de ese modo refleje por lo menos alguno de los aspectos no observables del estado actual.",

		"Se necesita alguna información acerca de cómo evoluciona el mundo independientemente del agente así como información sobre cómo afectan al mundo las acciones del agente",

		"Este conocimiento acerca de «cómo funciona el mundo», tanto si está implementado con un circuito booleano simple o con teorías científicas completas, se denomina modelo del mundo. Un agente que utilice este modelo es un agente basado en modelos.",

		"scene black",
		"centered Agentes basados en objetivos",

		"scene white",
		"show 3.png with fadeIn",

		"El conocimiento sobre el estado actual del mundo no es siempre suficiente para decidir qué hacer, además de la descripción del estado actual, el agente necesita algún tipo de información sobre su meta que describa las situaciones que son deseables",

		"El programa del agente se puede combinar con información sobre los resultados de las acciones posibles  para elegir las acciones que permitan alcanzar el objetivo",

		"scene black",
		"centered Agentes basados en utilidad",

		"scene white",
		"show 4.png with fadeIn",

		"Las metas por sí solas no son realmente suficientes para generar comportamiento de gran calidad en la mayoría de los entornos",

		"La terminología tradicional utilizada en estos casos para indicar que se prefiere un estado del mundo a otro es que un estado tiene más utilidad que otro para el agente",

		"Una función de utilidad proyecta un estado (o una secuencia de estados) en un número real, que representa un nivel de felicidad. La definición completa de una función de utilidad permite tomar decisiones racionales en dos tipos de casos en los que las metas son inadecuadas.",

		"Primero, cuando haya objetivos conflictivos, y sólo se puedan alcanzar algunos de ellos (por ejemplo, velocidad y seguridad), la función de utilidad determina el equilibrio adecuado",

		"Segundo, cuando haya varios objetivos por los que se pueda guiar el agente, y ninguno de ellos se pueda alcanzar con certeza, la utilidad proporciona un mecanismo para ponderar la probabilidad de éxito en función de la importancia de los objetivos",

		"scene black",
		"centered Agentes que aprenden",

		"scene white",
		"show 5.png with fadeIn",

		"El método que propuesto es construir máquinas que aprendan y después enseñarlas. El aprendizaje tiene otras ventajas ya que permite que el agente opere en medios inicialmente desconocidos y que sea más competente que si sólo utilizase un conocimiento inicial.",

		"Un agente que aprende se puede dividir en cuatro componentes conceptuales como se muestra en la figura",

		"La distinción más importante entre el elemento de aprendizaje y el elemento de actuación es que el primero está responsabilizado de hacer mejoras y el segundo se responsabiliza de la selección de acciones externas",

		"El elemento de actuación es lo que anteriormente se había considerado como el agente completo: recibe estímulos y determina las acciones a realizar. El elemento de aprendizaje se realimenta con las críticas sobre la actuación del agente y determina cómo se debe modificar el elemento de actuación para proporcionar mejores resultados en el futuro",

		"La crítica indica al elemento de aprendizaje qué tal lo está haciendo el agente con respecto a un nivel de actuación fijo. La crítica es necesaria porque las percepciones por sí mismas no prevén una indicación del éxito del agente.",

		"El último componente del agente con capacidad de aprendizaje es el generador de problemas. Es responsable de sugerir acciones que lo guiarán hacia experiencias nuevas e informativas.",

		"Si el agente está dispuesto a explorar un poco, y llevar a cabo algunas acciones que no sean totalmente óptimas a corto plazo, puede descubrir acciones mejores a largo plazo. El trabajo del generador de problemas es sugerir estas acciones exploratorias",

		"El aprendizaje en el campo de los agentes inteligentes puede definirse como el proceso de modificación de cada componente del agente, lo cual permite a cada componente comportarse más en consonancia con la información que se recibe, lo que por tanto permite mejorar el nivel medio de actuación del agente",

		"end"

	]
};