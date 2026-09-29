/* B&B Capital Core — animaciones e interacción del sitio estático. */
(function(){"use strict";
var React={createElement:function(){return null;},Fragment:"F"};
function DCLogic(){}
DCLogic.prototype.setState=function(p,cb){var q=typeof p==="function"?p(this.state):p;if(q)for(var k in q)this.state[k]=q[k];if(cb)try{cb()}catch(e){}};
DCLogic.prototype.forceUpdate=function(){};
const SVC = {"pagos":{"box":"8 8 18 18","glyph":"M 11 17 c 2 -4 10 -4 12 0","es":{"badge":"Pagos · FX","title":"Pagos internacionales / Coordinación FX corporativa","desc":"Diseño de arquitectura para pagos a cualquier parte del mundo en cualquier divisa sin necesidad de aperturar cuentas de banco corrientes, simplificando la forma de repago.","benefit":"Nuestra arquitectura se enfoca en ayudar a minimizar la burocracia administrativa para la realización de los pagos internacionales.","uses":["Pago a proveedores en el extranjero","Pagos a casas matrices en el extranjero","Envíos de personas físicas para fondeo de sus cuentas en el extranjero o pago de algún producto o servicio"],"process":[{"num":"1","title":"Diagnóstico","desc":"Revisamos destino, divisa, monto, calendario y la documentación que respalda la operación."},{"num":"2","title":"Diseño de la ruta","desc":"Definimos la arquitectura de pago y las contrapartes, sin necesidad de aperturar cuentas de banco corrientes."},{"num":"3","title":"Cotización y confirmación","desc":"Confirmamos condiciones de cambio, tiempos estimados y la forma de repago."},{"num":"4","title":"Ejecución y comprobación","desc":"Coordinamos la liquidación y entregamos el respaldo documental de la operación."}],"needs":["Datos de la operación: divisa, monto aproximado y país de destino.","Identificación del ordenante y, si aplica, acta constitutiva y poderes.","Documento que respalde el pago: factura, contrato u orden de compra.","Datos bancarios del beneficiario en el extranjero."],"faq":[{"q":"¿Necesito abrir una cuenta bancaria en el extranjero?","a":"No. La arquitectura se diseña para operar sin aperturar cuentas de banco corrientes en el país de destino."},{"q":"¿Pueden pagar a un proveedor o a mi casa matriz en cualquier divisa?","a":"Trabajamos sobre un listado de 68 divisas. La disponibilidad de cada una depende de contraparte, jurisdicción, documentación y validación operativa."},{"q":"¿Aplica para personas físicas?","a":"Sí, para envíos destinados al fondeo de cuentas propias en el extranjero o al pago de un producto o servicio, con la documentación correspondiente."}]},"en":{"badge":"Payments · FX","title":"International payments / Corporate FX coordination","desc":"Architecture design for payments anywhere in the world, in any currency, without opening current bank accounts and with a simpler repayment structure.","benefit":"Our architecture is focused on minimizing the administrative bureaucracy involved in international payments.","uses":["Payments to suppliers abroad","Payments to parent companies abroad","Individual transfers to fund accounts abroad or to pay for a product or service"],"process":[{"num":"1","title":"Diagnosis","desc":"We review destination, currency, amount, calendar and the documentation supporting the operation."},{"num":"2","title":"Route design","desc":"We define the payment architecture and the counterparties, with no need to open current bank accounts."},{"num":"3","title":"Quotation and confirmation","desc":"We confirm FX conditions, estimated timelines and the repayment structure."},{"num":"4","title":"Execution and verification","desc":"We coordinate settlement and deliver the documentary record of the operation."}],"needs":["Operation details: currency, approximate amount and destination country.","Identification of the payer and, where applicable, incorporation documents and powers of attorney.","A document supporting the payment: invoice, contract or purchase order.","Bank details of the beneficiary abroad."],"faq":[{"q":"Do I need to open a bank account abroad?","a":"No. The architecture is designed to operate without opening current bank accounts in the destination country."},{"q":"Can you pay a supplier or my parent company in any currency?","a":"We work with a list of 68 currencies. Availability of each one depends on counterparty, jurisdiction, documentation and operational validation."},{"q":"Does it apply to individuals?","a":"Yes, for transfers to fund their own accounts abroad or to pay for a product or service, with the corresponding documentation."}]},"tags":{"es":["Pagos","FX","Coordinación"],"en":["Payments","FX","Coordination"]}},"tesoreria":{"box":"8 8 18 18","glyph":"M 12 22 v -8 M 17 22 v -12 M 22 22 v -5","es":{"badge":"Tesorería","title":"Tesorería internacional","desc":"Estructuramos soluciones para ayudar a empresas y empresarios con necesidades de hacer llegar o hacerse de liquidez en distintas partes del mundo.","benefit":"Más visibilidad, control y planeación financiera.","process":[{"num":"1","title":"Diagnóstico","desc":"Mapeamos entidades, países, divisas y flujos recurrentes de la operación."},{"num":"2","title":"Estructura","desc":"Diseñamos cómo se concentra, se mueve y se documenta la liquidez entre jurisdicciones."},{"num":"3","title":"Coordinación","desc":"Ordenamos calendario, contrapartes y responsables de cada movimiento."},{"num":"4","title":"Seguimiento","desc":"Acompañamos la operación de forma recurrente y ajustamos la estructura cuando cambia el flujo."}],"needs":["Esquema de entidades y países donde opera el grupo.","Divisas involucradas y flujos recurrentes aproximados.","Documentación corporativa de cada entidad participante.","Necesidad concreta: concentrar, distribuir u obtener liquidez."],"faq":[{"q":"¿Sustituyen a mi banco?","a":"No. Coordinamos rutas y contrapartes que complementan la operación bancaria cuando el producto estándar no la resuelve."},{"q":"¿Trabajan con grupos con varias filiales?","a":"Sí. La estructura se diseña sobre el mapa de entidades, divisas y jurisdicciones del grupo."},{"q":"¿Es para una operación única o recurrente?","a":"Puede ser cualquiera de las dos, aunque la tesorería internacional suele diseñarse para flujos recurrentes."}],"uses":["Persona física con necesidad de mover u obtener liquidez en distintas partes del mundo"]},"en":{"badge":"Treasury","title":"International treasury","desc":"We structure solutions for companies and business owners that need to move or obtain liquidity in different parts of the world.","benefit":"More visibility, control and financial planning.","process":[{"num":"1","title":"Diagnosis","desc":"We map entities, countries, currencies and the recurring flows of the operation."},{"num":"2","title":"Structure","desc":"We design how liquidity is concentrated, moved and documented across jurisdictions."},{"num":"3","title":"Coordination","desc":"We organize calendar, counterparties and owners for each movement."},{"num":"4","title":"Follow-up","desc":"We support the operation on a recurring basis and adjust the structure when the flow changes."}],"needs":["Map of entities and countries where the group operates.","Currencies involved and approximate recurring flows.","Corporate documentation for each participating entity.","The specific need: to concentrate, distribute or obtain liquidity."],"faq":[{"q":"Do you replace my bank?","a":"No. We coordinate routes and counterparties that complement banking operations when the standard product does not resolve them."},{"q":"Do you work with groups that have several subsidiaries?","a":"Yes. The structure is designed around the group’s map of entities, currencies and jurisdictions."},{"q":"Is it for a one-off or a recurring operation?","a":"It can be either, although international treasury is usually designed for recurring flows."}],"uses":["Individuals that need to move or obtain liquidity in different parts of the world"]},"tags":{"es":["Tesorería","Liquidez"],"en":["Treasury","Liquidity"]}},"cobertura":{"box":"8 8 18 18","glyph":"M 17 11 l 6 3 v 4 c 0 3 -3 5 -6 6 c -3 -1 -6 -3 -6 -6 v -4 z","es":{"badge":"Cobertura","title":"Cobertura y estrategia cambiaria","desc":"Arquitectura de soluciones enfocada en PYMES y personas físicas para acceder a créditos en divisa de manera ágil, evitando la burocracia de los análisis de crédito bancarios.","benefit":"Mayor control sobre costos, márgenes y timing financiero.","uses":["Chicos y medianos con necesidad de generarse oportunidades con pagos anticipados a sus proveedores de productos y/o servicios a los que las finanzas tradicionales les tiene cerrada esa puerta","Empresarios con operaciones de importación y exportación","Persona física con actividades empresariales fuera de México"],"process":[{"num":"1","title":"Diagnóstico","desc":"Entendemos la exposición cambiaria, el plazo y la necesidad de crédito en divisa."},{"num":"2","title":"Diseño de solución","desc":"Estructuramos la alternativa evitando la burocracia de los análisis de crédito bancarios."},{"num":"3","title":"Condiciones","desc":"Definimos divisa, plazo, garantías aplicables y forma de repago con la contraparte."},{"num":"4","title":"Ejecución y seguimiento","desc":"Coordinamos la disposición y damos seguimiento hasta el cierre de la operación."}],"needs":["Descripción de la operación a financiar y su plazo.","Divisa, monto aproximado y calendario de pagos al proveedor.","Información financiera básica de la empresa o persona física.","Documentación que respalde la relación comercial con el proveedor."],"faq":[{"q":"¿En qué se diferencia de un crédito bancario?","a":"En la ruta: la estructura se diseña con contrapartes especializadas, evitando la burocracia del análisis de crédito bancario tradicional."},{"q":"¿Aplica para PYMES y personas físicas?","a":"Sí. El enfoque está en PYMES y personas físicas que necesitan acceso ágil a crédito en divisa."},{"q":"¿Para qué se usa habitualmente?","a":"Para generar oportunidades mediante pagos anticipados a proveedores de productos y/o servicios."}]},"en":{"badge":"Hedging","title":"FX hedging and strategy","desc":"Solution architecture focused on SMEs and individuals for agile access to currency credit, avoiding the bureaucracy of bank credit analysis.","benefit":"More control over costs, margins and financial timing.","uses":["Small and mid-sized businesses that need to create opportunities through early payments to their product or service suppliers, where traditional finance has closed that door","Business owners with import and export operations","Individuals with business activities outside Mexico"],"process":[{"num":"1","title":"Diagnosis","desc":"We assess the FX exposure, the term and the need for currency credit."},{"num":"2","title":"Solution design","desc":"We structure the alternative while avoiding the bureaucracy of bank credit analysis."},{"num":"3","title":"Conditions","desc":"We define currency, term, applicable guarantees and the repayment structure with the counterparty."},{"num":"4","title":"Execution and follow-up","desc":"We coordinate the drawdown and follow the operation through to closing."}],"needs":["Description of the operation to be financed and its term.","Currency, approximate amount and payment calendar with the supplier.","Basic financial information on the company or individual.","Documentation supporting the commercial relationship with the supplier."],"faq":[{"q":"How is it different from a bank loan?","a":"In the route: the structure is designed with specialized counterparties, avoiding the bureaucracy of traditional bank credit analysis."},{"q":"Does it apply to SMEs and individuals?","a":"Yes. The focus is on SMEs and individuals that need agile access to currency credit."},{"q":"What is it typically used for?","a":"To create opportunities through early payments to product and service suppliers."}]},"tags":{"es":["Cobertura"],"en":["Hedging"]}},"custodia":{"box":"8 8 18 18","glyph":"M 11 14 h 12 M 11 20 h 12 M 14 11 v 12 M 20 11 v 12","es":{"badge":"Resguardo","title":"Custodia de recursos","desc":"Coordinamos el resguardo de los capitales para su posterior procesamiento de acuerdo con tus necesidades de tesorería.","benefit":"Concentración segura de tu capital.","process":[{"num":"1","title":"Diagnóstico","desc":"Revisamos el origen de los recursos, la divisa y el destino previsto."},{"num":"2","title":"Estructura de resguardo","desc":"Definimos dónde y cómo se concentra el capital hasta su procesamiento."},{"num":"3","title":"Validación documental","desc":"Completamos la validación de la operación y de las partes involucradas."},{"num":"4","title":"Procesamiento","desc":"Liberamos los recursos según tus necesidades de tesorería, con respaldo documental."}],"needs":["Divisa, monto aproximado y plazo estimado de resguardo.","Origen de los recursos y documentación que lo acredita.","Identificación del titular y documentación corporativa si aplica.","Destino previsto de los recursos."],"faq":[{"q":"¿Cuánto tiempo se pueden resguardar los recursos?","a":"Depende de la operación y de la validación aplicable. Se define caso por caso antes de iniciar."},{"q":"¿Es una cuenta bancaria a mi nombre?","a":"No es un producto bancario. Coordinamos el resguardo con la contraparte correspondiente, sujeto a validación documental."},{"q":"¿Cómo se libera el capital?","a":"Según el calendario y las instrucciones acordadas, para su posterior procesamiento."}],"uses":["Asesor fiscal o legal que coordina el resguardo de capital de sus clientes"]},"en":{"badge":"Custody","title":"Custody of funds","desc":"We coordinate the safekeeping of client capital for later processing according to their treasury needs.","benefit":"Secure concentration of your treasury.","process":[{"num":"1","title":"Diagnosis","desc":"We review the origin of the funds, the currency and the intended destination."},{"num":"2","title":"Safekeeping structure","desc":"We define where and how the capital is concentrated until it is processed."},{"num":"3","title":"Documentary validation","desc":"We complete the validation of the operation and of the parties involved."},{"num":"4","title":"Processing","desc":"We release the funds according to your treasury needs, with documentary support."}],"needs":["Currency, approximate amount and estimated safekeeping term.","Origin of the funds and documentation supporting it.","Identification of the holder and corporate documentation where applicable.","Intended destination of the funds."],"faq":[{"q":"How long can funds be held?","a":"It depends on the operation and the applicable validation. It is defined case by case before starting."},{"q":"Is it a bank account in my name?","a":"It is not a banking product. We coordinate safekeeping with the corresponding counterparty, subject to documentary validation."},{"q":"How is the capital released?","a":"According to the agreed calendar and instructions, for later processing."}],"uses":["Tax or legal advisors coordinating the safekeeping of their clients’ capital"]},"tags":{"es":["Tesorería"],"en":["Treasury"]}},"cripto":{"box":"2 2 20 20","glyph":"M12 3.2 L19.6 7.6 V16.4 L12 20.8 L4.4 16.4 V7.6 Z M8.6 12 a3.4 3.4 0 1 0 6.8 0 a3.4 3.4 0 1 0 -6.8 0 M12 3.2 V8.6 M12 15.4 V20.8","es":{"badge":"Cripto","title":"Criptoactivos","desc":"Diseñamos soluciones para resolver las necesidades de dispersiones, coberturas y liquidaciones a través del uso de USDT y a través de agentes especializados.","benefit":"Trazabilidad documental en cada etapa de la operación.","process":[{"num":"1","title":"Diagnóstico","desc":"Entendemos la necesidad concreta: dispersión, cobertura o liquidación."},{"num":"2","title":"Diseño de solución","desc":"Definimos el uso de USDT y los agentes especializados que intervienen."},{"num":"3","title":"Validación","desc":"Verificamos documentación, contraparte y jurisdicción de la operación."},{"num":"4","title":"Liquidación","desc":"Coordinamos la operación y entregamos su comprobación documental."}],"needs":["Necesidad concreta: dispersión, cobertura o liquidación.","Divisas de entrada y salida, y países involucrados.","Identificación y documentación corporativa del titular.","Documento que respalde el origen y el destino de los recursos."],"faq":[{"q":"¿Con qué criptoactivo trabajan?","a":"USDT concentra nuestro uso operativo: mantiene valor referenciado al dólar mientras la operación se documenta y la contraparte confirma condiciones."},{"q":"¿Reciben o entregan criptoactivos directamente?","a":"La operación se coordina a través de agentes especializados, sujeta a validación documental, contraparte y jurisdicción."},{"q":"¿Forman parte del listado de divisas?","a":"No. Los criptoactivos no forman parte del listado de divisas fiat y su disponibilidad depende de contraparte, jurisdicción, documentación y validación operativa."}]},"en":{"badge":"Crypto","title":"Crypto assets","desc":"We design solutions for dispersion, hedging and settlement needs through the use of USDT and specialized agents.","benefit":"Documentary traceability at every stage of the operation.","process":[{"num":"1","title":"Diagnosis","desc":"We define the specific need: dispersion, hedging or settlement."},{"num":"2","title":"Solution design","desc":"We define the use of USDT and the specialized agents involved."},{"num":"3","title":"Validation","desc":"We verify documentation, counterparty and jurisdiction of the operation."},{"num":"4","title":"Settlement","desc":"We coordinate the operation and deliver its documentary record."}],"needs":["The specific need: dispersion, hedging or settlement.","Inbound and outbound currencies, and the countries involved.","Identification and corporate documentation of the holder.","A document supporting the origin and destination of the funds."],"faq":[{"q":"Which crypto asset do you work with?","a":"USDT concentrates our operational use: it holds dollar-referenced value while the operation is documented and the counterparty confirms conditions."},{"q":"Do you receive or deliver crypto assets directly?","a":"The operation is coordinated through specialized agents, subject to documentary validation, counterparty and jurisdiction."},{"q":"Are they part of the currency list?","a":"No. Crypto assets are not part of the fiat currency list, and their availability depends on counterparty, jurisdiction, documentation and operational validation."}]},"tags":{"es":["Criptoactivos"],"en":["Crypto assets"]}}};
const UI = {"es":{"kicker":"Solución","benefitLabel":"Qué obtienes","caseKicker":"Dónde aplica","caseTitle":"Perfiles que trabajan con esta solución","caseHelp":"Cómo ayudamos","caseResult":"Resultado","relKicker":"Portafolio","relTitle":"Otras soluciones","ctaTitle":"Hablemos de tu operación","ctaText":"Cuéntanos moneda, destino, monto y tiempos. Respondemos con la ruta operativa aplicable.","ctaBtn":"Hablar con el equipo","allBtn":"Ver todas las soluciones","back":"Volver","usesLabel":"Diseño de solución para","needsKicker":"Requisitos","needsTitle":"Qué necesitamos de ti","needsNote":"Listado indicativo. La documentación final depende de la operación, la contraparte y la jurisdicción.","procKicker":"Proceso","procTitle":"De la conversación a la operación","procClose":"Cada etapa queda documentada. No entregamos un plan y nos retiramos: acompañamos la ejecución hasta que la operación avanza.","faqKicker":"Preguntas","faqTitle":"Dudas habituales"},"en":{"kicker":"Solution","benefitLabel":"What you get","caseKicker":"Where it applies","caseTitle":"Profiles working with this solution","caseHelp":"How we help","caseResult":"Result","relKicker":"Portfolio","relTitle":"Other solutions","ctaTitle":"Let us talk about your operation","ctaText":"Tell us currency, destination, amount and timing. We reply with the applicable operating route.","ctaBtn":"Talk to the team","allBtn":"See all solutions","back":"Back","usesLabel":"Solution design for","needsKicker":"Requirements","needsTitle":"What we need from you","needsNote":"Indicative list. Final documentation depends on the operation, the counterparty and the jurisdiction.","procKicker":"Process","procTitle":"From conversation to operation","procClose":"Every stage is documented. We do not hand over a plan and step back: we stay with execution until the operation moves forward.","faqKicker":"Questions","faqTitle":"Common questions"}};
const PROC = {"es":[{"num":"1","title":"Diagnóstico","desc":"Entendemos operación, moneda, destino, monto, tiempos y documentación."},{"num":"2","title":"Estructura","desc":"Definimos la ruta operativa y las contrapartes aplicables según el caso."},{"num":"3","title":"Coordinación","desc":"Acompañamos la operación con comunicación directa y seguimiento institucional."},{"num":"4","title":"Verificación","desc":"Entregamos comprobación documental y cierre operativo."}],"en":[{"num":"1","title":"Diagnosis","desc":"We understand operation, currency, destination, amount, timing and documentation."},{"num":"2","title":"Structure","desc":"We define the operating route and the applicable counterparties for each case."},{"num":"3","title":"Coordination","desc":"We accompany the operation with direct communication and institutional follow-up."},{"num":"4","title":"Verification","desc":"We deliver documentary verification and operational close."}]};
const CASES = {"es":[{"label":"Empresa importadora","situacion":"Paga proveedores en Asia o Europa y el proceso bancario estándar no acompaña.","necesidad":"Controlar tipo de cambio, tiempos y documentación.","ayuda":"Coordina la ruta de FX y liquidación internacional con respaldo documental e institucional.","resultado":"Mayor visibilidad, menor fricción operativa y seguimiento ejecutivo.","services":["FX","Pagos internacionales","Comercio exterior"]},{"label":"Grupo corporativo","situacion":"Opera entre filiales, divisas y jurisdicciones, y cada flujo sigue un criterio distinto.","necesidad":"Concentrar tesorería y coordinar flujos entre entidades.","ayuda":"Diseña la arquitectura de tesorería y coordina la operación entre mercados.","resultado":"Flujos ordenados entre entidades y control financiero centralizado.","services":["Tesorería","Liquidez","Pagos internacionales"]},{"label":"CFO / Director financiero","situacion":"Gestiona exposición cambiaria y márgenes bajo presión, sin ver el costo real.","necesidad":"Visibilidad de costos, timing y comprobación institucional.","ayuda":"Aporta análisis de exposición y coordina la operación con precios de contraparte y documentación verificable.","resultado":"Más control sobre costos, márgenes y timing financiero.","services":["Cobertura","Tesorería","FX"]},{"label":"Family office","situacion":"Administra patrimonio internacional donde el producto estándar no llega.","necesidad":"Estructuras seguras, discretas y eficientes para movilizar capital.","ayuda":"Coordina soluciones confidenciales con respaldo institucional y relación de largo plazo.","resultado":"Estructuras discretas y eficientes con relación de largo plazo.","services":["Patrimonio global","Criptoactivos","FX"]},{"label":"Asesor fiscal o legal","situacion":"Tu cliente necesita ejecutar una operación que la vía convencional no resuelve.","necesidad":"Un aliado financiero que complemente la estrategia del despacho.","ayuda":"Coordina la ruta financiera alineada a la estrategia legal y fiscal del cliente.","resultado":"Una ruta financiera alineada a la estrategia legal y fiscal.","services":["Documentación","Coordinación","Soluciones especializadas"]}],"en":[{"label":"Importing company","situacion":"Pays suppliers in Asia or Europe, and the standard banking process does not keep up.","necesidad":"Control exchange rate, timing and documentation.","ayuda":"Coordinates the FX route and international settlement with documentary and institutional backing.","resultado":"Greater visibility, less operational friction and executive follow-up.","services":["FX","International payments","Foreign trade"]},{"label":"Corporate group","situacion":"Operates across subsidiaries, currencies and jurisdictions, each flow on its own criteria.","necesidad":"Concentrate treasury and coordinate flows between entities.","ayuda":"Designs the treasury architecture and coordinates the operation across markets.","resultado":"Orderly flows between entities and centralized financial control.","services":["Treasury","Liquidity","International payments"]},{"label":"CFO / Finance director","situacion":"Manages FX exposure and margins under pressure, without seeing the real cost.","necesidad":"Visibility of costs, timing and institutional verification.","ayuda":"Provides exposure analysis and coordinates the operation with counterparty pricing and verifiable documentation.","resultado":"More control over costs, margins and financial timing.","services":["Hedging","Treasury","FX"]},{"label":"Family office","situacion":"Manages international wealth where the standard product does not reach.","necesidad":"Secure, discreet and efficient structures to mobilize capital.","ayuda":"Coordinates confidential solutions with institutional backing and a long-term relationship.","resultado":"Discreet, efficient structures with a long-term relationship.","services":["Global wealth","Crypto assets","FX"]},{"label":"Tax or legal advisor","situacion":"Their client needs to execute an operation the conventional route does not resolve.","necesidad":"A financial ally to complement the firm strategy.","ayuda":"Coordinates the financial route aligned with the client legal and tax strategy.","resultado":"A financial route aligned with the legal and tax strategy.","services":["Documentation","Coordination","Specialized solutions"]}]};
const ORDER = ["pagos","tesoreria","cobertura","custodia","cripto"];
// Costas del mundo (Natural Earth 1:110M) cuantizadas a 0.25° y codificadas en base 36.
// Va incrustado para que el globo dibuje geografía sin depender de una descarga externa.
const LAND_Q = "13s,82;1,1;2,-2;-1,-2;-2,0;-2,0;-1,2;2,1;1,0;|0,88;1,0;-1,-2;13x,-1;-2,-1;-1,1;2,1;2,0;2,2;-140,0;|od,9h;-2,-5;0,-2;3,-1;0,-1;-1,-3;0,-1;0,-2;1,-2;2,-4;1,-1;1,-2;0,-4;0,-4;0,-6;1,-2;-1,-3;-2,-2;-2,-3;-4,-1;-4,-2;-5,-5;-1,0;-3,-3;-2,-1;0,-3;2,-3;0,-2;1,-2;0,1;0,-4;-1,-2;1,-1;0,-1;-2,-2;-3,-1;-5,-2;-2,-2;1,-2;1,0;-1,-2;-1,-3;0,-3;-1,-2;-3,-2;-1,-1;-1,-2;-2,-2;-2,-3;-4,-4;-3,-2;-3,-2;-4,-1;-2,-1;-1,-1;-2,1;-2,-1;-5,1;-2,-1;-2,1;-4,-2;-3,-1;-3,-1;-2,0;-1,1;-2,0;-1,2;0,-1;-1,2;0,2;-1,3;1,0;0,3;-3,4;-2,3;-3,6;-3,3;-1,3;-1,4;-1,2;-1,7;0,4;-1,3;-2,1;-2,4;-2,4;-1,3;-3,4;0,3;0,2;0,4;1,3;1,2;1,4;1,1;2,3;2,2;0,3;0,2;-1,2;-2,2;0,2;0,1;1,2;-1,4;-1,2;-2,3;0,1;0,1;-1,3;-4,4;-4,4;-2,3;-3,5;0,1;1,1;1,3;1,3;-1,1;2,4;0,3;-1,3;-2,1;-1,1;-1,1;0,1;-4,-1;-2,0;-1,-1;-3,0;-3,3;-1,2;-3,3;-3,0;-3,0;-4,0;-3,-1;-6,-3;-2,-1;-4,-1;-3,1;-2,0;-3,1;-3,0;-4,-1;-3,-1;-4,-2;-1,0;-1,0;-4,2;-4,3;-3,3;-3,2;-1,0;-3,2;-2,2;0,2;-1,3;-2,2;-1,2;-1,0;-1,1;-1,2;0,1;-2,0;-2,2;-1,0;-1,1;0,1;-1,1;-1,1;0,3;0,1;-2,3;-1,2;1,1;2,2;1,3;0,2;1,2;0,3;0,4;-1,2;1,2;-1,2;-2,2;0,2;0,2;2,1;1,2;0,1;1,3;2,2;2,1;1,2;0,3;1,2;3,1;2,5;1,0;2,1;3,1;3,2;2,1;4,4;-1,5;1,3;1,2;2,3;4,2;3,1;3,5;1,2;3,0;3,-2;3,1;5,-1;1,0;4,2;4,1;3,1;4,1;7,1;6,0;2,0;4,1;4,0;2,0;3,0;4,1;3,0;0,-2;3,1;-2,-2;0,-2;2,-1;-1,-4;-2,-2;0,-2;2,0;1,-2;2,0;5,-2;1,1;4,-1;5,-2;2,-3;3,-1;6,-2;4,-2;2,1;2,2;-1,3;2,2;2,2;3,0;6,0;1,-2;1,0;2,-1;4,0;1,-2;5,0;4,-1;4,-1;2,-1;3,2;1,1;4,0;3,0;1,-2;1,1;3,-1;3,0;2,1;1,1;1,2;1,3;0,1;1,0;1,4;2,2;0,1;0,3;1,1;-2,2;2,2;-3,-1;-3,1;-3,-2;-6,-1;-3,3;-5,0;0,-2;-3,0;-4,2;-4,0;-3,4;-3,2;2,3;-2,2;4,4;6,0;2,3;8,-1;4,3;5,1;7,0;7,-3;5,-1;5,0;3,0;5,2;1,2;-1,3;-2,1;-3,1;-1,1;-5,3;-5,2;-3,2;3,1;3,3;-2,2;6,1;-1,1;-3,-1;-3,0;-3,-1;-4,0;-3,-2;0,-2;2,-1;4,0;-1,-2;-4,0;-5,-3;-3,1;1,2;-4,1;1,1;3,1;0,1;-1,0;-6,1;0,2;-4,-1;-1,-2;-4,-3;1,-1;-2,-1;-2,1;-1,-5;-2,-2;-1,-3;1,-2;0,-2;4,-1;-1,-1;-5,0;-1,-1;-4,-2;-1,1;0,1;-2,0;-2,1;-5,-1;3,-3;-2,0;-3,0;-2,2;0,-1;0,-2;2,-2;-1,-1;2,-2;2,-1;0,-2;-4,1;2,-2;-3,-1;2,-3;-3,0;-3,1;-2,4;-1,2;-1,2;-2,2;0,2;-1,0;0,1;-2,1;-1,2;1,3;0,1;-1,1;-1,1;-2,1;-4,1;-2,2;-4,1;-3,3;1,0;-2,2;0,1;-3,1;-1,-2;-1,2;0,1;1,0;-3,1;-4,-1;1,-2;-1,-2;1,-2;4,-2;2,-3;5,-3;3,0;1,-1;-1,-1;3,-1;3,-1;4,-3;-1,-2;-2,2;-4,1;-1,-3;3,-1;-1,-2;-1,-1;-3,-3;-1,0;0,1;1,2;0,1;-1,2;-1,2;-2,1;-1,1;-3,1;-1,2;-3,0;-4,2;-3,2;-3,3;-1,4;-2,0;-3,1;-2,0;-3,-2;-1,0;-4,-2;-8,1;-6,-2;0,-2;0,-2;-4,-3;-5,-1;0,-1;-3,-3;-1,-3;1,-2;-2,-2;-1,-2;-3,-1;-3,-3;-5,0;-3,0;-3,-2;-2,-1;-1,0;-2,1;-1,3;-4,0;-1,-1;-3,1;-2,-1;1,4;0,2;-2,0;-1,2;0,3;2,1;0,2;1,2;0,2;-1,1;0,2;0,2;-2,2;6,3;5,-1;5,0;5,0;3,0;6,0;2,2;1,8;-4,4;-3,2;-6,2;0,3;5,1;7,-1;-2,4;4,-2;9,4;2,3;3,1;3,0;2,1;4,6;5,2;4,0;0,1;4,0;0,-1;3,2;-1,2;0,2;-2,2;0,4;1,1;1,1;4,1;1,1;3,1;0,-2;-1,-1;0,-2;3,0;-1,-2;-2,1;-2,-3;1,-2;0,-2;4,-1;0,-1;4,1;2,1;5,-2;1,-1;3,1;6,2;5,1;4,0;1,-1;4,0;1,1;5,2;-1,3;0,3;2,3;4,1;3,-3;3,0;1,3;1,3;-2,-1;-2,1;-1,3;5,1;5,0;5,0;4,0;4,2;-4,2;-7,0;-7,-2;-7,-1;-2,3;-4,1;1,4;-2,3;2,3;4,2;9,5;3,0;-1,2;-5,2;-7,-1;-4,-3;0,-2;-6,-4;-8,-3;-3,-6;3,-2;4,-3;-4,-4;-4,-1;-1,-7;-2,-4;-5,1;-3,-3;-4,-1;-2,4;-3,5;-3,5;-3,3;-7,-5;-6,-1;-5,2;-2,5;-1,9;4,2;a,4;8,4;7,6;a,7;7,3;b,5;9,2;6,0;6,3;7,0;8,1;c,-3;-5,-1;4,-3;5,2;6,-3;b,-1;f,-4;3,-2;1,-3;-5,-2;-6,-1;-i,3;-3,0;6,-3;1,-2;0,-4;5,-2;3,-1;1,2;-3,2;3,2;9,-3;4,1;-3,3;9,4;4,0;4,-2;2,3;-3,2;2,3;-3,2;b,-1;2,-2;-5,-1;0,-2;3,-1;7,1;1,2;8,2;e,3;3,0;-4,-2;5,-1;3,2;7,0;6,2;5,-3;4,3;-4,2;2,1;c,-1;6,-1;e,-5;3,2;-4,3;-5,1;1,2;-2,3;0,1;7,4;3,3;3,1;a,-1;1,-2;-4,-3;3,-2;1,-2;-1,-6;5,-2;-2,-3;-8,-6;5,0;1,1;5,1;1,2;3,2;-2,2;2,3;-5,0;-1,3;4,4;-6,3;8,2;-1,3;2,0;2,-2;-2,-4;4,0;-1,2;6,2;9,0;7,-2;-4,3;0,5;7,0;a,0;8,1;-3,2;5,2;4,1;8,2;b,0;1,1;a,1;4,-1;9,2;7,0;1,1;4,2;9,2;7,-2;-5,0;9,-1;1,-2;4,1;b,0;9,-2;4,-2;-1,-2;-5,-1;-a,-2;-3,-1;5,-1;5,-1;4,1;2,-3;2,1;6,1;d,-1;1,-2;h,0;0,3;9,-1;6,0;6,-2;2,-2;-2,-2;5,-3;6,-2;4,4;6,-1;7,1;8,-2;3,2;6,-1;-2,4;5,1;10,-2;3,-3;b,-3;g,1;8,-1;3,-1;0,-3;5,-1;5,1;7,0;8,-1;7,0;7,-3;5,1;-3,3;2,1;d,-1;8,1;b,-2;-13u,-2;a,-3;a,-4;0,-3;3,-1;-1,3;b,0;7,-4;-4,-2;-6,0;0,-4;-2,-1;-4,0;-3,2;-5,1;-1,1;-4,1;-4,0;-3,1;1,1;-5,-1;2,-1;-2,-2;140,0;-5,-2;-5,0;3,-2;3,-3;1,-1;1,-2;-1,-1;-8,1;-b,-3;-3,0;-6,-3;-6,-3;-2,-1;-5,2;-b,-3;-2,2;-3,-2;-6,0;-1,-2;-5,-4;0,-2;5,-1;-1,-5;-3,-1;-2,-3;1,-2;-7,-2;-1,-4;-6,-1;-1,-4;-6,-4;-1,3;-2,6;-2,9;2,5;3,2;0,2;6,1;8,5;6,4;8,4;3,5;-5,0;-2,-3;-b,-5;-3,5;-a,-1;-a,-7;3,-2;-9,-1;-6,-1;0,3;-6,1;-5,-2;-c,0;-d,-1;-d,-8;-f,-9;6,-1;2,-2;4,-1;2,2;5,0;5,-5;1,-3;-4,-4;0,-5;-2,-6;-6,-6;-1,-3;-6,-4;-5,-5;-3,-2;-5,-3;-2,0;-3,2;-5,-3;-1,-1;-1,0;-2,-1;-1,-2;0,-2;-2,-1;-1,-1;-1,-1;-3,-1;-2,-1;0,-2;1,-1;2,-2;4,-4;1,-3;0,-4;-2,-3;-3,0;-3,-2;-4,0;-1,2;1,3;-2,4;3,1;-2,3;-2,1;-1,-1;-1,0;-1,1;-1,0;1,2;1,1;1,3;-1,0;-2,1;-2,1;-6,-1;-2,-2;-5,-1;2,1;0,2;3,3;-2,2;-4,-2;-4,-2;-3,-3;-4,0;-2,-2;2,-3;4,0;0,-2;3,-1;4,2;4,-1;2,0;1,-2;-6,-1;-1,-3;-4,-2;-2,-2;4,-3;1,-3;3,-4;3,-3;0,-3;-3,-1;1,-2;2,-2;0,-3;-1,-3;-2,0;-3,-5;-4,-5;-3,-5;-6,-3;-5,-4;-5,0;-2,-2;-2,1;-2,-2;-6,-2;-4,0;-1,-5;-2,0;-1,3;0,2;-5,1;-2,-1;-5,-3;-3,-4;-1,-3;3,-4;3,-5;4,-3;3,-3;1,-7;0,-7;-4,-3;-4,-3;-3,-3;-5,-4;-2,3;1,3;-3,2;-3,1;-2,2;-2,4;-3,2;-4,0;1,3;-4,0;0,-5;-2,-6;-1,-3;0,-3;2,0;2,-4;1,-3;2,-3;2,0;3,-2;3,-3;2,-3;0,-2;-1,-2;1,-1;0,-3;1,-1;2,-3;0,-2;-3,0;-4,3;-4,3;-1,2;-2,3;-1,3;-1,2;0,3;-1,2;-1,1;-1,2;-2,3;-2,2;-1,-3;0,2;0,3;1,4;0,3;1,3;-1,2;0,4;-2,3;-1,4;-1,5;-1,4;-3,-2;-5,-3;-2,0;-2,1;1,5;-1,4;-3,4;1,2;-3,0;-3,4;-1,2;0,2;-1,2;-1,2;-4,0;0,-1;-1,-3;-2,1;0,-1;-1,1;-2,0;0,-1;-3,0;-5,-1;0,-3;-2,-2;-6,-3;-4,-5;-3,-2;-4,-3;0,-2;-2,-1;-4,-1;-2,0;-1,-3;1,-6;0,-3;-2,-4;0,-7;-2,0;-1,-3;1,-1;-4,-1;-1,-3;-2,-1;-4,4;-1,5;-2,4;-1,2;-3,4;-1,5;0,2;-4,6;-2,8;-1,5;0,5;0,3;-6,-2;-3,1;-5,4;2,2;-2,1;-4,4;-3,1;-1,3;-4,3;-7,-1;-6,0;-6,-1;-8,2;-4,0;-4,1;-2,5;-2,1;-3,-1;-4,-2;-5,1;-4,3;-4,1;-3,4;-3,6;-2,-1;-2,1;-2,-1;-2,0;1,-2;-1,-1;2,-3;1,-3;2,-1;1,-2;3,-1;0,-2;-1,-1;1,-2;1,-1;1,-1;0,-1;0,3;1,2;1,0;1,-1;0,-2;0,-2;0,-2;1,0;0,-1;3,1;4,0;2,-1;3,3;3,3;2,2;1,2;1,-1;0,-1;-1,-1;1,-3;1,-3;3,-1;3,-1;2,-1;2,-2;1,-1;1,-1;0,-1;-1,-2;-1,-1;-2,-2;-1,-2;-2,0;-1,-1;0,-2;0,-3;-2,0;-3,-2;0,-2;-1,0;-2,0;-2,-1;0,-2;-2,-1;-2,0;-3,-1;-2,0;-2,-1;-1,-2;0,-2;-4,-1;-7,-2;-3,-3;-2,0;-1,0;-3,-2;-2,0;-3,-1;-1,0;-1,-1;-1,0;-1,-1;-2,0;-1,-1;-3,1;-1,2;0,2;-1,1;0,3;-2,2;1,0;0,2;0,1;0,1;0,2;-2,1;0,2;-2,1;-2,4;-1,3;-3,3;-2,0;-2,4;-1,3;0,2;-2,5;-2,1;-2,1;-1,2;0,1;-1,2;-1,1;-2,3;-2,4;-2,2;-2,0;0,2;0,2;1,1;0,1;-1,-2;-1,-3;-1,-2;-1,0;-2,1;-1,2;-3,5;-1,0;2,-4;2,-4;3,-6;2,-3;1,-2;4,-4;-1,-1;0,-3;5,-3;0,-1;2,-4;-1,-1;0,-4;2,-5;1,-1;3,-1;2,-5;1,-3;2,-2;6,-4;2,-2;2,-3;1,-1;2,-1;1,-1;0,-2;-2,-1;2,-1;1,-1;1,-2;1,-1;2,0;4,1;5,0;3,2;2,0;2,1;2,0;1,0;2,0;2,1;2,1;1,0;1,-1;-1,-2;0,-2;-1,-2;-1,-4;-2,-5;-2,-5;-4,-6;-3,-4;-5,-6;-4,-3;-6,-4;-3,-3;-5,-5;-1,-2;-1,-1;-2,-1;-1,-2;-2,0;-1,-3;-1,-2;-1,-2;-1,-2;|pg,e9;1,-3;4,-1;2,-2;6,0;6,1;1,1;-1,3;1,4;-4,1;1,3;-2,0;1,4;3,-1;4,1;-3,2;-1,2;-3,-1;-1,-2;-1,2;0,1;1,2;-1,1;-5,2;-1,3;-3,1;0,1;4,0;0,3;4,1;3,-1;1,4;-1,2;-4,0;-3,1;-5,-2;-4,0;-1,-3;-4,0;-4,-5;3,-3;0,-3;4,-5;2,-2;2,-3;2,0;2,-1;-4,0;0,-3;-1,-2;-2,-1;1,-2;|4c,hr;8,-1;6,-2;4,0;3,1;5,2;6,-1;6,2;7,1;3,-2;3,1;0,2;3,0;7,-4;5,3;1,-3;5,0;1,1;5,0;6,-1;a,-2;5,-1;4,1;5,-2;-5,-2;7,-1;b,0;3,1;4,-2;5,2;-4,1;2,2;5,0;3,0;4,-1;4,-2;4,0;7,-1;6,0;6,0;0,3;3,0;7,-1;-1,-4;3,3;3,0;2,4;-4,3;-5,1;0,5;5,3;5,-1;4,-2;6,-4;-4,-2;8,-1;0,-4;5,3;5,-3;-1,-3;4,-2;4,3;3,3;0,5;6,-1;6,0;5,-2;0,-2;-3,-2;3,-3;-1,-2;-7,-2;-6,-1;-4,1;-1,-2;-4,-3;-1,-2;-5,-3;-6,0;-3,-2;0,-2;-5,-1;-5,-3;-4,-4;-2,-4;0,-4;6,-1;2,-4;2,-3;5,1;8,-2;4,-1;3,-2;5,-1;4,-2;7,0;4,0;-1,-4;1,-4;3,-4;6,-4;3,1;3,4;-2,7;-3,2;6,2;5,2;2,3;0,3;-3,3;-5,3;5,4;-2,4;-1,6;2,1;7,-1;4,0;4,1;3,-2;5,-2;2,-1;7,-1;0,-3;1,-5;4,-1;2,-2;6,2;4,4;3,2;3,-3;5,-5;4,-5;-1,-3;5,-2;4,-2;6,-1;3,-1;1,-4;3,0;2,-2;0,-4;-3,-2;-3,-1;-6,-2;-5,-3;-7,-1;-8,1;-6,0;-5,0;-3,-3;-5,-2;-6,-5;-4,-4;3,1;6,5;9,4;6,0;3,-2;-3,-3;1,-4;1,-3;5,-2;7,1;4,4;0,-3;3,-1;-5,-3;-9,-2;-4,-2;-4,-3;-3,0;-1,4;7,3;-6,0;-5,0;1,-2;-4,-2;-4,-1;-4,-1;-3,-3;0,-1;0,-2;1,-2;2,0;-1,2;1,-1;0,-1;-3,-1;-1,0;-3,-1;-2,0;-3,0;-3,-1;6,0;1,0;-5,-1;-3,0;-1,-1;1,0;-1,-3;-3,-3;0,1;-1,0;-1,1;1,-2;1,-1;0,-1;-2,-2;-2,-3;1,3;-2,1;0,4;-1,-2;1,-3;-3,1;3,-1;0,-4;1,0;1,-2;0,-4;-2,-3;-5,-1;-2,-2;-2,-1;-2,-1;-1,-1;-4,-3;-2,-2;-2,-2;-1,-3;1,-3;1,-3;2,-3;0,-2;2,-4;0,-3;-1,-2;-1,-2;-1,-1;-2,1;0,2;-2,0;-2,4;-2,3;0,2;0,2;-1,2;-3,4;-1,0;-4,-1;-1,0;-2,2;-3,1;-4,-1;-4,1;-3,-1;-1,0;0,-1;0,-2;1,-1;-1,0;-1,0;-2,-1;-3,1;-3,2;-3,-1;-3,1;-2,0;-4,-1;-3,-3;-4,-2;-3,-2;0,-1;-1,-3;1,-2;0,-2;-1,-3;-1,-3;0,-5;0,-2;0,-2;1,-2;1,-3;3,-3;1,-3;1,-2;5,-1;1,-1;4,1;3,0;3,1;2,1;3,1;1,2;0,4;1,1;3,1;4,1;3,0;3,0;1,-1;0,-2;-3,-2;0,-2;0,-1;0,-2;-1,-3;-1,1;-1,0;0,-1;1,0;0,-1;-1,-1;0,-1;0,-1;0,-1;0,-2;-1,-1;-1,0;-1,-1;2,-1;1,0;1,0;2,1;0,-1;1,0;1,0;2,0;2,1;1,0;1,0;1,0;1,0;2,-1;1,0;1,0;1,-1;1,-1;1,-1;0,-1;0,-2;-1,-1;0,-2;0,-1;0,-2;0,-1;-1,-1;0,-1;0,-1;0,-2;0,-1;1,-2;2,-2;2,-2;1,-1;0,-1;2,0;1,-1;2,0;2,1;2,1;2,1;2,0;2,0;2,-1;1,-1;2,-1;2,0;3,2;1,1;0,1;1,3;2,2;3,0;0,1;3,0;3,2;2,1;2,2;1,0;1,-2;0,-1;0,-1;-3,0;2,-2;-1,-2;-1,-3;1,-3;2,1;1,2;-1,2;-1,3;5,2;0,1;1,2;2,-3;2,0;3,-2;0,-2;4,0;4,1;2,-2;3,-1;3,2;0,1;5,0;4,0;-3,-1;1,-2;4,-1;3,-1;0,-4;2,0;2,-1;3,-1;2,-3;0,-2;2,0;2,-2;1,-1;5,-1;1,1;3,0;4,-1;2,0;2,-1;5,-4;0,-1;2,0;1,-2;2,-7;2,-1;0,-3;-3,-3;1,-1;8,-1;0,-4;3,3;5,-2;6,-2;2,-3;0,-2;4,1;8,-2;6,1;6,-4;5,-4;3,-1;4,-1;1,-1;1,-5;1,-2;-2,-7;-2,-3;-5,-5;-3,-5;-3,-3;-1,0;-1,-3;0,-8;-1,-6;0,-2;-1,-2;-1,-5;-4,-6;-1,-4;-3,-1;-1,-3;-4,0;-7,-1;-2,-2;-5,-1;-5,-4;-3,-4;-1,-2;1,-3;-1,-4;-1,-2;-2,-2;-5,-7;-3,-3;-3,-2;-2,-4;-2,-2;-2,-3;-5,-2;-3,1;-2,0;-4,1;-2,0;-3,2;0,-2;5,-3;0,-3;2,-2;0,-2;-4,-5;-6,-2;-8,-1;-4,1;1,-3;-1,-3;0,-2;-2,-1;-4,-1;-4,2;-1,-1;0,-4;3,-1;2,1;1,-2;-4,-1;-3,-3;0,-4;-1,-2;-4,0;-3,-2;-1,-3;4,-3;3,-1;-1,-4;-5,-2;-2,-4;-4,-2;-2,-2;2,-4;2,-2;-1,0;-4,0;-2,-1;-3,-2;-1,-3;-2,0;-4,1;-5,3;-5,2;-1,2;1,3;-2,2;0,7;1,4;4,3;-6,1;4,4;2,7;4,-2;2,8;-3,2;-1,-5;-2,0;1,6;1,7;2,3;-1,4;0,4;1,1;3,6;3,6;1,6;-1,6;2,4;-1,5;2,4;1,8;1,8;2,9;-1,7;0,6;-5,2;0,2;-8,4;-7,4;-3,2;-2,4;1,1;-3,5;-4,7;-4,8;-2,2;-1,3;-3,3;-3,1;1,2;-2,4;2,3;3,2;2,3;-1,2;-1,-2;-3,2;1,1;-1,4;2,0;0,3;2,2;0,2;2,1;3,2;-1,1;2,0;-1,2;1,2;2,0;2,2;1,2;-1,1;1,3;-1,3;1,1;-1,4;-2,2;-1,1;-1,2;1,1;-1,1;0,1;-2,1;-2,0;-1,-2;-2,-1;-1,0;0,-1;2,-2;-1,0;-1,-1;-2,0;0,2;-1,0;-1,0;-1,1;-2,1;-1,0;-1,0;0,-1;-1,1;-2,1;-1,1;1,0;-1,1;-1,1;-1,1;-2,0;0,2;-1,0;0,-1;0,-1;-1,1;-2,1;0,1;0,1;0,1;-1,1;1,0;-1,2;-2,1;-1,2;-2,1;-2,2;1,0;1,0;-1,1;-1,1;-1,-1;-2,0;-1,0;-2,1;-2,0;-1,1;-2,1;-3,0;-2,1;-2,1;-4,4;-3,2;-3,1;-2,0;-3,-2;-2,0;-3,1;-3,0;-4,2;-3,1;-4,2;-4,2;-1,1;-2,0;-4,1;-2,2;-4,2;-2,3;-1,2;1,0;0,1;1,1;0,2;-1,1;-1,2;-1,2;-4,4;-4,3;-2,3;-3,1;-1,1;1,3;-2,1;-3,2;-1,2;-2,1;-2,2;-2,2;0,1;-2,3;-2,3;0,2;-2,1;-2,0;-2,1;-1,-1;1,-2;0,-3;2,-2;3,-3;0,-1;1,0;0,-1;1,0;1,-3;1,-1;1,-1;3,-2;1,-4;1,-2;1,-2;0,-2;2,0;2,-2;1,-2;-1,-2;-1,0;-1,3;-3,2;-3,2;-2,1;0,3;0,2;-2,1;-3,2;-1,1;-3,1;-2,2;2,0;1,1;0,2;-3,3;-2,1;-2,3;-1,2;-2,4;-2,3;0,2;-3,2;-2,1;0,1;-2,0;-2,1;-3,1;-1,0;-1,3;-4,4;-3,5;0,1;-2,1;-3,4;0,3;-3,2;1,4;0,3;-1,3;1,4;1,3;0,4;0,5;-2,4;-1,2;1,1;6,-2;2,-4;1,1;-1,4;-1,3;-1,0;-8,4;-3,2;-7,1;-2,4;1,2;-6,2;0,3;-5,3;0,2;-2,2;-4,1;-1,3;-5,4;-2,3;-4,1;-7,0;-4,1;-8,4;-4,1;-7,1;-6,0;-8,2;-4,2;-5,-1;1,-3;-2,0;-5,-1;-3,-2;-5,0;0,2;1,4;5,1;-1,1;-6,-2;-2,-3;-6,-3;3,-2;-4,-2;-4,-2;-4,-1;-1,-2;-6,-2;-2,-2;-4,-2;-3,1;-4,-2;-4,-1;-3,-1;-7,-1;-1,0;5,2;4,1;4,3;5,0;2,2;5,2;1,1;3,1;1,3;2,3;-5,-2;-1,1;-2,-1;-3,2;-1,-2;-1,2;-4,-1;-3,0;0,2;1,2;-3,1;-5,-1;-4,2;-2,1;0,2;-3,2;1,2;3,3;2,2;3,0;3,-1;3,2;3,0;3,1;-1,2;-2,1;3,1;-3,0;-4,-1;-1,-1;-3,1;-6,0;-6,1;-1,1;-5,3;5,1;9,2;3,0;0,-2;8,0;-3,3;-5,1;-3,2;-4,2;-5,1;2,3;7,0;5,1;1,2;4,2;4,1;8,2;4,-1;6,2;6,0;3,-2;1,1;7,-1;0,-1;6,0;4,0;9,-1;7,-1;3,0;6,1;6,-2;4,0;|b5,i3;-5,2;1,2;2,0;9,0;7,-3;0,-1;-4,0;-5,1;-4,-1;-1,0;|9m,ic;-3,-2;-5,1;-5,1;2,2;6,1;3,-2;2,-1;|99,ir;5,-1;-1,-2;-6,-1;-3,1;-2,2;-1,1;6,0;2,0;|a7,ia;-6,0;-b,1;-1,3;-1,2;-4,1;-8,1;-4,1;1,2;8,-1;5,-1;8,0;3,-1;-1,-2;5,-1;2,-1;6,0;5,0;7,1;8,0;6,0;5,-2;1,-1;-3,-1;-6,-1;-5,0;-b,0;-9,0;|du,fp;-3,-2;-2,-4;2,2;3,-1;-1,-2;3,-1;2,1;4,-1;-1,-3;3,1;0,-2;1,-3;-1,-3;-2,-1;-3,1;1,4;-1,0;-5,-3;-2,0;3,2;-4,1;-4,-1;-8,0;-1,2;3,1;-2,1;3,3;5,6;2,2;4,2;1,-1;0,-1;|ao,h8;5,-1;4,-1;1,-2;3,0;3,-1;-4,-1;-6,1;-2,1;-4,-2;-6,-2;-1,3;-6,-1;4,2;0,3;1,4;3,0;1,-2;2,0;2,-1;|b9,i1;4,2;9,-2;5,-2;1,-2;7,1;4,-2;a,-2;3,-2;4,-3;-7,-2;9,-3;7,-1;5,-3;7,-1;-2,-2;-7,-5;-5,2;-6,4;-5,-1;-1,-2;5,-3;5,-1;2,-1;2,-4;-1,-3;-5,1;-a,3;6,-3;4,-3;0,-1;-b,1;-8,3;-5,2;1,1;-6,2;-5,2;0,-1;-c,-1;-3,1;2,3;8,0;8,1;-1,1;1,2;5,4;-1,2;-1,1;-6,2;-8,2;2,1;-4,2;-4,0;-3,2;-2,-2;-7,0;-f,1;-8,1;-7,1;-3,1;4,2;-6,0;-1,4;3,4;4,1;b,1;-3,-2;3,-3;4,3;a,2;7,-4;-1,-3;8,1;|9i,i9;8,-1;8,-1;-6,-3;-5,-1;-4,-3;-5,0;-2,4;0,2;2,1;4,2;|6d,ig;6,3;9,3;6,0;5,1;0,-3;-3,-2;-4,0;-8,-2;-6,0;-5,0;|59,g0;4,0;-1,-4;3,-3;-1,0;-3,2;-1,1;-2,2;-1,1;0,2;2,-1;|8a,it;8,0;b,-2;3,-2;1,-1;-6,0;-7,1;-9,1;4,1;-5,1;0,1;|6a,fe;-2,-1;-7,2;-1,2;-3,1;-1,1;-4,1;-2,2;1,1;4,-1;2,0;4,-1;1,-1;2,-2;4,-2;2,-2;|6i,ia;6,-1;a,0;4,-1;4,-2;-5,-1;-a,-3;-5,-3;0,-1;-a,-2;-2,1;-a,2;2,2;3,3;3,3;-4,2;e,1;|81,if;3,1;4,0;1,-2;-2,-2;-e,-1;-a,-1;-6,0;0,1;8,2;-i,-1;-6,1;6,4;3,1;c,-1;7,-3;7,0;-6,4;4,1;4,0;1,-2;2,-2;|86,i4;4,-1;3,-4;1,-3;7,-2;7,-2;0,-2;-7,0;3,-2;-2,-1;-7,1;-7,1;-4,-1;-8,-1;-a,0;-7,-1;-2,2;-6,1;-3,0;-5,3;2,0;6,1;6,0;5,0;-7,1;-9,0;-6,0;-2,2;a,1;-7,0;-7,1;4,3;3,2;a,2;4,-1;-2,-1;9,1;6,-2;4,2;4,-1;3,-4;2,1;-3,4;4,1;4,-1;|8u,i3;-4,2;5,2;4,0;7,0;2,-1;-4,-2;6,-2;-1,-3;-6,-2;-4,0;-3,2;-a,3;0,1;8,0;|92,ij;3,-2;0,-2;-2,-3;-6,0;-5,0;1,3;-7,-1;0,3;4,0;6,2;6,-1;0,1;|9c,iy;3,2;4,0;-2,1;9,0;5,-2;7,-1;7,-1;3,-2;5,-2;-6,-1;-7,-3;-7,0;-9,0;-4,2;0,1;3,2;-7,-1;-4,2;-3,2;3,1;|9u,j4;6,0;4,0;8,1;6,2;5,-1;4,-1;3,2;6,1;7,1;c,0;2,-1;c,1;8,0;9,-1;b,0;8,0;8,-1;-1,-2;-9,-1;-a,-1;-4,-1;9,0;-9,-2;-7,-2;-7,-3;-8,0;-3,-1;-c,-1;6,0;-3,-1;3,-2;-3,-1;-7,-1;-1,-2;-6,-1;1,-1;6,0;0,-1;-a,-2;-b,1;-b,-1;-6,1;-8,0;0,2;7,1;-2,3;2,0;b,-2;-5,3;-7,0;3,2;7,1;2,1;-6,2;-2,2;b,0;3,-1;7,2;-9,0;-e,0;-7,1;-4,2;-4,1;-1,2;|bn,hi;-2,-1;-5,-1;-1,2;2,3;3,0;4,-1;0,-2;-1,0;|9b,hq;2,-2;-2,-1;-5,1;-4,0;-5,2;3,1;3,2;4,-2;3,0;1,-1;|cu,fj;1,1;6,-1;4,-2;0,-1;-2,0;-5,2;-4,1;|cw,f8;1,-2;3,0;4,0;-2,-2;-1,0;-6,2;-1,1;2,1;|2q,c8;1,0;1,-1;1,-1;-2,-1;-1,-1;-1,0;-1,0;0,1;0,2;1,1;-1,1;1,0;1,-1;|2o,cb;-2,-1;0,1;-1,0;0,1;1,0;1,0;1,-1;|2z,gg;3,0;1,-2;-3,-2;-4,-1;-2,1;-1,2;4,1;2,1;|x,h3;3,-1;2,1;3,-1;4,-1;-3,-1;-3,1;-2,1;-3,-1;-1,1;0,1;|zo,9q;7,-3;7,-2;3,-2;2,-3;1,-2;7,-2;1,-2;-4,-1;1,-3;3,-2;3,-4;2,0;0,-2;3,-1;-1,0;4,-2;0,-1;-3,-1;-1,1;-3,1;-4,0;-3,3;-3,2;-2,4;-5,1;-3,-1;-3,-1;1,-3;-3,-1;-3,0;-4,1;-3,3;-4,1;-1,-2;-6,0;2,4;3,1;-1,4;-2,3;-8,4;-3,0;-6,4;-2,-2;-1,0;-1,1;0,2;-3,2;4,1;3,0;0,1;-6,0;-2,3;-3,0;-2,2;5,1;3,2;6,-2;1,-2;1,-6;4,-2;3,4;5,2;3,0;4,-1;3,-2;4,0;|10z,9l;1,-1;1,-2;-2,-1;0,2;-1,2;-2,1;-2,2;-3,1;1,1;2,-1;1,-1;2,-1;2,-2;|10t,9d;-2,-1;-2,-1;-2,0;-3,1;-3,1;1,1;3,0;2,0;1,2;1,0;0,-2;2,0;1,2;3,1;-1,2;3,0;0,-2;-1,-3;-2,0;-1,-1;|117,9f;1,-1;2,-3;2,-1;0,-1;-2,-1;-1,2;-2,2;-1,3;1,1;0,-1;|xw,8y;-2,-3;-4,0;0,1;2,3;4,1;0,1;4,1;3,0;1,1;1,-1;-1,-1;-4,-1;-4,-2;|wu,am;3,3;2,3;2,0;2,-2;0,-2;2,-1;4,-1;-1,-2;-2,0;0,-2;-2,-1;-3,-4;3,-4;-1,-2;5,-3;-5,-1;-1,-3;0,-3;-4,-3;0,-4;-1,-6;-1,1;-5,-1;-1,2;-3,0;-2,2;-5,-2;-1,2;-3,0;-3,0;-1,6;-2,1;-2,3;0,4;0,3;3,3;3,-1;3,0;0,4;2,1;5,0;3,4;2,2;1,2;4,2;|yd,9p;5,-1;1,-3;-3,1;-3,1;-3,-1;-2,0;1,3;4,0;|y8,a9;0,-2;2,-1;1,-1;0,-4;-3,0;0,-2;2,-2;-2,-1;-1,3;-1,5;0,3;2,2;|xo,a4;4,0;4,3;1,-1;-3,-4;-3,-1;-4,1;-7,0;-3,-1;-1,-3;4,-4;2,2;7,2;0,-2;-2,0;-1,-2;-4,-2;4,-5;-1,-1;4,-5;0,-2;-2,-2;-2,2;2,3;-4,-1;-1,1;0,1;-2,3;0,3;-3,-1;1,-4;0,-6;-3,-1;-2,1;2,4;-1,4;-2,0;-1,3;2,2;0,4;2,6;1,1;4,3;3,-1;5,0;|xh,92;3,0;4,2;-1,-3;-6,-1;-5,1;0,1;3,1;2,-1;|x5,93;3,0;1,-2;-5,-1;-3,0;-2,0;1,2;3,0;1,2;1,-1;|w2,9a;0,-1;8,-1;1,2;7,-2;2,-2;6,-1;5,-2;-5,-2;-4,2;-4,-1;-4,1;-4,1;-4,1;-3,0;-2,0;-7,2;-1,1;-4,1;3,3;5,0;3,-1;2,-1;|vl,9w;1,-3;2,-2;2,-1;2,-2;-1,-5;0,-6;-4,0;-4,3;-5,3;-1,3;-3,3;-2,3;-3,5;-4,4;-1,3;-2,3;-3,3;-2,3;-3,2;-4,5;-1,2;3,0;6,-1;3,-4;4,-3;2,-1;4,-5;4,0;3,-2;2,-4;3,-2;-1,-3;2,-1;1,0;|cd,45;2,-1;2,-3;5,-3;6,-1;-2,-2;-4,0;-2,1;-1,-1;-4,-1;-2,0;-2,0;-3,1;-4,1;-5,2;-4,2;-6,5;4,-1;5,-3;6,-1;2,2;1,2;4,2;2,-1;|c1,c0;-2,1;-2,0;-3,0;-2,-1;-2,1;1,2;3,-1;3,0;2,1;-2,1;0,2;-3,1;1,1;3,-1;3,0;1,1;3,0;2,-2;1,1;1,-2;2,0;0,-1;2,0;2,-2;-2,-1;-2,1;-1,0;-2,0;-1,-1;-1,0;-1,1;-1,-1;-2,-3;-1,1;0,1;|uf,j0;9,1;8,-2;9,-4;-1,-3;-9,-1;-b,1;-7,2;-3,3;-5,0;a,3;|zf,ih;b,-1;e,-2;-3,-3;-f,0;-6,-1;-8,3;2,3;5,1;|zj,i5;4,2;5,0;6,-1;0,-1;-6,0;-8,0;-1,0;|oz,iy;8,1;6,0;1,-1;2,1;4,1;6,-1;-1,-1;-6,0;-3,-1;-1,0;-5,-1;-4,1;2,1;-9,0;|py,i7;a,4;-1,1;8,2;e,3;d,1;7,1;8,1;2,-2;-2,-1;-e,-2;-d,-2;-c,-4;-6,-4;-6,-4;0,-3;8,-3;-2,0;-d,0;-1,2;-8,1;0,2;4,1;0,2;8,4;-4,0;|zw,fz;1,-4;0,-4;2,-4;4,-7;-6,1;-3,-6;4,-4;0,-2;-3,2;-3,-3;0,3;0,4;0,4;1,3;0,6;-3,4;1,5;3,2;-1,2;2,0;1,-2;|0,hy;1,0;3,0;6,-1;-1,0;-4,-1;-5,-1;13w,0;-1,1;-13v,2;|bb,ct;1,0;2,-4;0,-2;-1,0;-1,2;-2,1;1,3;|d7,49;5,2;3,-1;3,2;3,-2;-1,-2;-6,-1;-1,2;-4,-2;-2,2;|lp,iv;1,1;6,0;5,-1;d,-3;-a,-2;-2,-3;-4,0;-2,-4;-4,0;-9,3;4,1;-6,1;-8,3;-3,4;b,1;2,-1;6,0;|n2,iw;-6,-2;-c,0;-c,0;0,1;-6,0;-5,2;d,1;6,-1;4,2;a,-1;8,-2;|mr,in;-9,-1;-7,1;3,1;-3,1;9,1;1,-2;6,-1;|et,j7;d,2;e,0;6,1;e,1;w,-1;p,-3;-8,-2;-f,0;-m,0;2,-1;f,1;c,-2;7,1;4,-1;-5,-2;b,1;j,2;c,-1;2,-2;-g,-3;-2,-1;-d,0;9,0;-5,-3;-3,-3;0,-4;5,-3;-6,0;-7,-1;8,-3;1,-3;-5,0;6,-4;-9,0;4,-2;-1,-1;-6,-1;-5,0;5,-2;0,-2;-8,1;-2,-1;5,-1;5,-2;2,-3;-7,-1;-3,1;-5,3;1,-3;-4,-2;a,0;6,0;-b,-4;-b,-3;-c,-2;-4,0;-4,-1;-6,-4;-8,-3;-3,0;-5,-1;-6,-1;-4,-3;0,-2;-2,-3;-6,-3;1,-3;-1,-4;-3,-4;-5,0;-6,3;-8,0;-4,3;-3,4;-7,5;-2,2;0,4;-6,3;2,3;-3,2;4,4;6,2;2,2;1,3;-5,-2;-2,0;-4,-1;-5,1;0,3;2,2;3,0;8,-1;-6,3;-4,1;-4,0;-3,1;4,3;-2,2;-3,3;-5,4;-5,1;0,2;-b,2;-9,1;-a,0;-a,-1;-5,2;-7,2;b,1;8,1;-h,1;-9,1;0,2;g,2;e,2;2,1;-b,1;3,2;e,3;6,0;-2,2;a,1;c,1;c,0;5,-1;a,2;a,-2;6,0;8,-1;-a,2;1,2;|ro,4m;2,-2;4,0;0,-1;-1,-2;-6,0;0,2;0,2;1,1;|cn,c2;2,0;1,-1;-1,-1;-3,0;-3,0;0,1;1,1;3,0;|be,c2;2,0;3,-1;0,-1;-3,-1;-1,0;-2,0;-2,2;0,1;2,0;1,0;|av,cl;3,-1;4,0;3,-1;2,-1;4,0;1,-1;3,-2;3,-2;1,0;3,-1;-1,-1;3,0;3,-2;0,-1;-3,0;-3,-1;-2,1;-6,-1;3,3;-2,1;-3,0;-1,1;-1,2;-2,0;-4,1;-1,1;-5,1;-2,1;2,1;-4,0;-3,-2;-2,0;0,-1;-2,-1;-2,1;2,1;1,1;2,1;2,1;3,0;1,1;|pi,8m;1,-2;1,-2;1,-5;1,-2;0,-2;-1,-1;-2,2;0,-1;0,-3;0,-1;-1,-1;0,-4;-2,-4;-2,-6;-2,-8;-2,-5;-2,-5;-3,-1;-3,-1;-3,1;-3,1;-1,2;0,4;-2,3;0,3;1,3;2,0;0,2;2,3;0,2;-1,2;-1,3;0,3;1,3;1,2;2,0;2,1;1,1;2,0;3,2;3,3;1,2;-1,1;2,0;2,3;0,2;2,2;1,-2;|mx,dx;0,-1;-6,0;-5,1;1,2;2,-2;3,1;3,-1;2,0;|jb,fz;1,-2;-3,-4;-7,-2;-6,0;3,4;-2,5;6,3;3,2;3,0;4,-3;-2,-3;|12f,7o;3,-3;2,-2;-1,-1;-2,1;-3,2;-3,2;-2,3;-1,2;2,0;2,-2;2,-1;1,-1;|11r,94;1,-1;0,-1;-3,2;-3,1;-1,1;0,1;2,-1;4,-2;|13o,5k;-2,-2;-2,-3;-3,-2;-1,1;-1,1;2,3;-1,2;-5,2;0,1;3,2;1,3;0,2;-2,3;0,1;-2,2;-3,3;-1,3;1,0;2,-2;3,-1;1,-4;3,-4;0,3;2,-1;1,-3;3,-2;3,0;2,2;2,-1;-1,-3;-1,-3;-3,0;-1,-1;0,-2;|12v,56;3,2;3,2;1,3;2,1;0,2;3,2;1,-2;1,-1;3,1;1,-1;0,-2;-1,-2;-3,-3;-2,-1;1,-2;-3,0;-3,-2;-1,-3;-3,-4;-3,-1;-2,-2;-3,1;-3,1;-4,0;-1,2;2,3;5,4;3,0;3,2;|10f,5h;2,0;0,-5;-1,-2;0,-3;-2,1;-3,-3;0,1;-3,0;-2,3;-1,3;-2,3;0,2;3,0;3,-2;3,1;3,1;|y1,6f;-5,-2;-3,-1;-1,-2;-1,-2;-4,0;-2,0;-4,1;-3,-1;-2,0;-3,-2;-1,0;-2,-1;-2,-1;-3,0;-3,0;-4,2;-2,1;0,3;2,0;1,1;0,1;0,3;0,3;-2,4;-1,2;0,2;-1,3;-1,1;-1,2;-1,3;-2,3;-1,2;2,-2;-1,4;2,-2;1,-1;0,2;-2,3;0,1;-1,1;0,3;1,1;0,2;0,2;2,3;0,-3;2,3;3,1;2,2;3,1;2,1;1,-1;3,2;2,0;1,1;1,0;2,0;4,1;3,2;1,2;2,2;0,2;0,2;3,3;2,-3;1,1;-1,2;1,2;2,-1;1,3;2,2;1,1;2,1;0,1;2,0;0,1;1,0;2,1;3,-2;2,-2;3,-1;2,0;0,2;2,4;1,1;0,1;1,2;3,1;2,0;3,1;0,2;-3,1;2,0;3,-1;2,-1;4,-1;1,0;2,-1;3,1;1,0;1,1;2,-2;-1,-3;-2,-1;-1,0;0,-2;-1,-2;-1,-2;0,-1;3,-2;3,-1;2,-2;3,-2;1,0;2,-1;1,-1;4,-2;2,2;1,2;1,1;1,3;1,3;-1,2;1,1;-1,2;1,3;0,1;0,1;1,2;0,3;1,1;1,1;1,-2;0,-2;1,-1;1,-1;1,-2;0,-3;0,-1;2,-3;2,1;2,-1;1,-2;0,-2;1,-3;1,-2;1,-1;1,-3;-1,-2;2,-3;4,-2;3,-2;2,-2;0,-1;2,-2;2,-4;1,1;2,-2;1,0;1,-4;2,-2;2,-2;3,-3;2,-3;0,-3;-1,-2;2,-3;0,-4;-1,-2;-1,-3;0,-3;0,-3;-2,-3;-3,-2;-2,-3;-1,-2;-1,-4;-2,-2;-1,-3;0,-2;0,-2;-2,-1;-5,0;-3,-2;-2,-1;-3,-2;-3,2;-2,0;0,2;-2,0;-4,-3;-3,1;-2,0;-3,1;-3,1;-3,2;-1,3;-1,2;-2,2;-4,1;2,1;-1,3;-2,-2;-4,-1;2,2;1,2;2,2;-1,3;-3,-3;-3,-1;-1,-4;-3,2;0,2;-3,3;-2,2;1,1;-5,2;-3,0;-4,2;-7,0;-5,-2;-5,-1;-3,0;|t3,au;0,-4;-2,-1;-4,-1;-2,3;0,6;2,6;2,-2;2,-3;2,-4;|w6,c1;-3,1;0,3;1,2;5,1;2,0;1,-1;-2,-2;-1,-2;-3,-2;|xj,cq;-2,-7;-2,-3;-2,3;-1,3;3,4;3,3;2,-1;-1,-2;|ln,e9;3,0;-1,-3;0,-1;-1,-3;-3,2;-2,0;-5,2;0,3;5,-1;4,1;|kz,ek;2,1;2,-3;0,-5;-2,0;-2,-1;-1,1;0,5;-1,2;2,0;|jo,fy;0,2;-2,2;-1,0;-4,1;-1,1;1,2;-1,1;-2,-2;-1,4;-2,2;2,4;3,4;3,-1;5,1;-4,-5;4,1;4,0;-1,-4;-3,-3;4,0;0,-1;4,-5;2,0;3,-5;1,-1;5,-1;-1,-3;-2,-1;2,-2;-4,-2;-5,0;-7,-1;-2,1;-2,-2;-4,0;-3,-1;-2,1;6,4;3,1;-6,0;-1,2;4,1;-2,2;1,3;6,0;|ie,he;-1,-3;5,-2;-6,-4;-b,-2;-4,-1;-5,1;-b,1;4,2;-9,2;7,0;0,2;-8,0;2,3;6,1;7,-3;6,2;5,-1;6,2;7,0;|xm,b4;1,1;1,3;2,0;-1,-3;3,4;0,-4;-2,-1;-1,-3;-1,-1;-2,3;0,1;|y2,ay;0,-3;0,-2;-1,-4;-2,4;-2,-2;2,-3;-1,-2;-5,3;-1,3;1,1;-3,2;-1,-1;-2,0;-3,-2;0,1;1,3;3,1;2,2;1,-2;3,1;1,2;3,0;0,3;3,-2;0,-2;1,-1;|x6,b1;-5,-4;2,3;3,3;2,3;2,3;1,-3;-3,-2;-2,-3;|xl,c1;0,-2;1,-3;-1,-3;-2,-1;-1,-3;1,-4;2,0;2,0;5,-2;-1,-2;2,-1;-1,-2;-3,2;-1,2;-1,-1;-3,2;-3,0;-2,0;0,2;1,1;-1,1;-1,-1;-2,2;0,2;0,3;1,-1;1,6;1,4;2,0;3,-1;1,1;0,-1;|xk,ba;0,2;2,-2;2,0;0,-1;-1,-2;-3,-1;0,2;0,2;|xy,bd;1,-5;-3,1;0,-1;1,-3;-2,0;0,2;-1,1;-1,2;3,0;0,1;-3,3;4,0;1,-1;|zs,ed;-4,-4;0,-4;-2,-4;1,-2;-2,-2;-5,-2;-7,-1;-6,-4;-3,1;0,3;-7,0;-4,-2;-5,0;4,-3;-3,-7;-2,-2;-2,2;1,3;-3,1;-1,3;3,1;3,3;4,2;2,3;8,1;5,-1;4,7;3,-2;5,4;3,2;2,5;0,4;1,3;4,1;3,-6;0,-3;|102,ew;3,2;1,-5;-6,-1;-3,-4;-7,3;-2,-5;-4,0;-1,4;2,3;5,1;1,5;1,3;5,-4;3,-1;2,-1;|yp,dq;3,2;2,0;2,1;3,0;0,-2;-2,-2;-2,1;-2,-1;-1,-2;-3,1;0,2;|el,1c;2,0;6,1;6,-1;5,-2;2,-2;1,-2;0,-2;-7,-1;-6,-1;-8,-1;-8,-1;-9,0;-6,1;1,2;9,1;3,2;3,1;1,2;3,1;2,2;|cn,13;9,0;8,-1;3,2;3,1;4,-1;-1,-2;-2,-2;-8,1;-9,-1;-5,2;-2,1;|bs,23;3,0;5,0;1,2;0,2;0,3;2,2;4,0;2,-1;1,-1;2,-2;1,-2;1,-2;1,-2;-1,-1;-1,-2;-5,0;-4,-1;-6,0;2,2;-4,-1;-5,0;-3,1;0,1;4,2;|8n,20;2,1;5,0;6,-1;4,0;5,0;2,-2;-3,0;-5,0;-5,0;-5,0;-4,1;-2,1;|6e,1t;0,2;5,-1;5,-1;5,1;-2,-1;-4,-1;-5,0;-4,1;|1t,1a;3,1;7,-1;4,-1;3,-1;1,-2;-8,-1;-5,2;-2,1;0,1;-3,1;|0,l;4,2;7,-1;5,2;1,0;5,-2;6,2;c,0;4,0;2,-1;6,-1;b,-1;9,-2;g,0;b,1;h,-1;a,-1;a,1;c,1;0,2;-f,0;-d,1;-4,1;-a,1;0,2;2,2;1,1;0,2;-7,1;-3,1;-6,2;9,-1;a,1;5,-1;8,1;6,1;3,2;-1,1;-5,1;-6,2;-8,0;-8,0;-7,1;-3,1;-5,1;-3,2;-1,4;2,0;3,-1;7,0;6,1;3,-2;7,0;5,1;5,1;5,2;6,0;-1,2;-1,1;1,1;5,1;3,-1;6,1;4,1;6,0;6,0;5,1;4,1;5,1;3,0;3,-1;6,1;5,-1;6,0;5,1;5,-1;6,0;6,0;6,0;6,0;5,0;4,1;5,1;5,-1;5,1;4,1;3,-1;1,-2;3,-1;4,1;5,-1;5,-1;5,-1;5,0;6,1;6,0;5,-1;5,0;3,2;-3,1;-2,1;-5,1;-2,1;-1,2;-2,3;3,-1;6,0;5,0;4,-1;5,-1;1,-1;6,0;5,0;5,1;5,0;4,-1;6,1;3,3;3,-2;5,-1;5,1;3,-2;5,0;5,-1;5,0;3,1;2,1;4,-1;5,0;4,-1;3,-1;5,1;5,0;4,1;5,1;5,0;5,1;4,1;3,1;0,2;0,1;-1,2;-2,2;-1,1;-1,2;0,1;0,2;2,1;2,2;0,1;0,2;-1,2;2,1;2,2;3,1;3,1;3,2;1,1;2,1;3,1;4,1;2,1;3,1;3,0;3,1;3,1;3,1;2,-1;-1,-1;-4,-2;-2,0;-3,0;-3,0;-3,-1;-3,-1;-2,-1;-1,-2;1,-1;2,-2;-3,-1;-4,0;-2,-1;-3,-2;-2,-1;-1,-2;2,-1;2,-2;3,-1;3,-1;2,-1;1,-2;1,-2;2,-1;1,-1;0,-4;2,-2;0,-1;1,-2;0,-2;-3,-1;-2,-2;-5,0;-2,-2;-2,-1;-6,-2;-6,0;-5,-1;-5,-1;-3,-2;-7,0;-7,0;-6,0;-7,0;1,-1;6,-1;5,-1;2,-2;-4,-1;-7,1;-6,-2;0,-1;0,-2;5,-1;0,-2;6,-1;8,-1;7,-1;6,-1;7,-1;a,-1;a,-1;7,-1;7,-2;4,-1;2,-2;5,2;7,1;7,1;8,1;7,1;a,0;a,0;8,-1;2,1;6,2;a,0;8,1;7,0;9,1;9,1;6,1;-3,1;-2,1;0,2;-7,0;-9,-1;-8,0;-1,2;1,3;2,1;5,0;7,1;5,2;5,1;3,1;6,1;5,1;3,0;6,0;6,1;5,0;5,1;4,1;6,1;3,2;4,1;1,2;-4,1;2,1;2,1;4,1;5,1;4,1;3,2;2,2;3,1;5,0;2,-2;4,0;0,2;3,1;4,0;1,-2;5,0;5,1;5,0;4,0;2,-2;4,2;5,0;4,1;5,1;4,1;4,0;4,1;2,1;3,-1;4,1;3,-2;2,-1;5,0;2,2;4,1;5,0;2,-2;3,2;4,0;5,0;4,0;4,0;5,0;2,-2;2,-1;5,1;4,0;5,0;4,0;4,1;5,0;3,1;4,1;4,0;3,1;2,3;2,1;5,-1;1,-1;4,-1;4,0;3,-1;3,-1;4,1;1,2;4,0;4,2;4,0;4,1;4,1;3,1;3,1;4,-1;3,2;3,1;4,0;3,0;1,2;3,1;3,1;4,0;4,1;4,-1;3,0;4,-1;0,-2;4,-1;2,-1;5,-1;2,-1;4,-1;4,0;3,1;3,1;4,0;4,-1;4,0;4,-1;4,0;3,-4;0,-1;-1,-2;-4,-1;-3,-1;1,-2;4,0;0,-1;-2,-2;-2,-1;3,-2;4,0;5,1;2,1;2,2;2,1;2,1;1,2;2,1;3,1;5,0;3,1;5,0;2,2;1,1;2,2;4,1;4,0;2,2;2,1;3,0;4,0;4,0;4,1;4,-1;3,1;2,3;1,-1;2,-2;4,-1;4,0;3,1;4,-1;4,0;3,1;3,-1;3,-1;4,1;4,0;4,1;4,-1;3,1;2,2;2,1;5,3;3,-1;3,-1;3,-1;5,-3;4,0;3,0;5,1;4,0;3,1;3,1;4,1;3,0;4,0;2,-2;2,-1;5,0;3,-1;4,-1;5,0;4,0;4,1;2,2;4,0;3,0;5,-1;3,1;4,0;4,-1;3,0;4,1;4,0;4,0;5,0;3,1;4,0;1,2;0,2;3,-1;0,-2;2,-2;1,-1;4,-1;4,0;6,0;3,1;5,0;4,0;5,0;5,-1;3,-1;-1,-1;3,-2;4,-1;4,-1;6,0;5,-1;4,0;5,-1;2,2;4,-1;3,-2;3,-1;5,0;5,0;2,-2;4,-1;3,-1;5,-1;4,0;5,0;4,0;5,0;5,-1;4,-1;4,-1;3,-1;-1,-1;-2,-2;-2,-2;-1,-1;-2,-2;-5,0;-2,-2;-6,-1;-1,-1;-3,-2;-3,-1;-2,-1;-1,-2;0,-2;0,-1;2,-2;1,-1;2,-2;7,0;2,-2;-7,-1;-6,0;-8,-1;-3,-2;-1,-2;-2,-1;-2,-2;5,-1;3,-2;3,-1;5,-2;5,-1;6,-1;a,-1;2,-2;b,-1;1,0;3,-2;b,1;9,-1;7,-1;-140,0;|nn,dx;1,1;3,-1;3,2;-2,-2;0,-1;-4,-2;-2,1;-1,1;2,1;|d5,b7;3,1;0,-1;0,-3;-3,0;-1,0;1,1;0,2;";
// Fronteras interiores entre países, misma codificación.
const BORD_Q = "oh,8v;-3,-3;-4,-1;-3,0;-1,-1;-3,0;-1,-1;-5,1;-3,0;-1,5;-1,2;-1,1;-4,1;-2,1;-3,1;-1,1;-2,1;-2,5;-3,2;0,2;0,2;-1,4;2,0;1,2;2,2;1,1;0,1;-1,1;0,1;1,1;0,2;-1,2;1,1;4,0;9,0;f,-8;0,-3;6,-4;|i4,ce;9,0;0,1;2,2;1,6;6,4;2,5;1,0;1,4;4,0;1,-1;2,0;1,1;3,0;0,3;0,-1;0,-6;-d,0;0,-b;-4,0;0,-2;0,-6;-f,0;-1,-1;|5i,g3;2,2;0,3;-7,2;-4,5;-2,3;-4,1;-3,2;-2,2;-4,-1;-4,-2;-3,2;-3,2;-4,1;-4,0;0,n;0,f;|cj,f1;-2,2;0,5;-2,1;-3,0;-1,1;-3,-3;-1,-3;-2,-2;-1,-1;-2,0;0,-1;-7,0;-6,0;-2,-1;-5,-3;-1,-1;-4,0;-4,-1;-2,0;1,-1;0,-1;0,-1;-5,-2;-4,0;-5,-2;-1,0;-1,0;-1,1;1,0;0,2;2,2;1,2;0,4;-1,3;-4,2;0,1;-2,0;0,1;-1,1;-1,0;-1,1;-1,1;-3,1;-3,1;-4,2;-4,1;-3,-1;-1,0;-5,1;-4,0;-3,1;-5,0;-2,1;-2,0;0,3;-2,0;0,-2;-8,0;-e,0;-d,0;-c,0;-c,0;-c,0;-c,0;-4,0;-c,0;-b,0;|97,cv;-1,0;-3,1;-3,1;-1,2;-1,3;-2,2;-2,3;-2,3;-3,1;-3,0;-2,-3;-4,1;-2,1;-1,2;-1,3;-3,1;-2,2;-1,1;-7,0;0,-2;-3,0;-8,0;-9,3;-6,2;0,1;-5,-1;-5,0;|pg,f6;-2,0;1,2;-3,3;-3,0;-3,3;2,3;-1,0;3,5;4,-2;1,2;8,5;6,0;9,-3;5,-2;4,2;6,0;6,-2;1,1;5,0;1,2;-6,3;4,2;-1,1;4,1;-3,3;2,1;f,1;2,1;a,2;3,2;7,-1;2,-4;4,1;5,-2;0,-2;4,0;a,4;-2,-1;5,-3;9,-b;2,3;6,-3;6,1;2,0;2,-3;2,-1;2,-1;5,0;2,-2;-3,-3;-3,0;0,-4;-2,-2;-8,1;-3,-7;-2,-1;-8,-1;3,-7;-2,-1;0,-3;-2,1;-2,1;-6,1;-7,0;-1,0;-6,1;-2,-1;-1,-2;-7,1;-2,0;-1,-2;-2,-1;-6,-2;-1,-3;-2,0;-1,2;-5,0;-1,3;-2,0;0,4;-4,3;-7,0;-5,-1;-4,4;-3,1;-6,3;-1,0;-a,-2;0,-f;-2,0;-3,3;-3,1;-4,-1;-2,-1;|rw,ep;1,0;-3,-3;3,-1;2,1;5,-3;-5,-2;-3,0;-2,0;0,1;1,2;-6,-1;-1,-3;-2,-2;-3,0;-1,-1;3,-1;1,-3;-3,-4;-3,0;-2,0;0,3;-5,2;-4,2;-3,1;-4,3;-2,4;-2,1;-4,0;-2,1;0,3;-5,2;-4,-2;-3,-2;0,-2;-4,0;|zo,90;0,d;0,d;|w7,a8;0,-3;3,-2;3,1;2,0;3,2;1,0;4,-1;3,1;3,5;1,2;1,4;5,0;4,0;|ck,3w;-2,1;-5,0;0,8;|ce,47;-4,0;-a,1;-1,2;0,3;-3,0;-1,1;-1,5;3,1;2,3;-1,2;2,3;2,6;-1,2;2,1;0,1;-2,1;1,2;-2,1;-1,5;2,1;-1,5;1,4;1,3;3,2;-1,4;0,3;3,3;-1,3;3,4;0,4;-1,1;-2,7;2,4;0,4;1,3;3,4;3,2;-1,2;0,1;0,7;5,2;1,4;0,1;3,4;5,-1;2,-3;2,3;5,0;0,-1;8,-7;3,0;5,-3;4,-2;0,-1;-3,-6;4,-2;4,0;3,0;4,4;0,3;2,1;2,-2;0,-4;-3,-2;-3,-2;-4,-3;-5,-6;-2,-3;-1,-4;0,-4;0,-1;-1,-3;|c7,7z;2,1;1,2;2,-3;0,-3;2,-2;-1,-3;2,-5;2,-5;3,0;|nf,93;-2,0;-5,-1;-1,0;-1,-3;1,-1;-1,-5;-1,-4;2,-1;2,-1;1,0;1,-4;-3,0;-2,2;-1,2;-3,0;-1,3;-3,-2;-3,1;-1,2;-3,0;-2,0;0,1;-1,0;-2,1;-3,-1;-1,0;-1,0;0,4;-1,2;-1,2;1,3;-1,1;0,3;-5,0;0,1;-2,0;-2,-1;-1,-2;-1,-1;-2,1;-1,-1;-3,0;-2,2;-1,1;-1,3;-1,2;-b,1;-2,-1;-1,0;-2,0;|ld,9d;1,0;0,2;1,1;1,1;1,-1;1,2;3,0;0,-1;1,-1;3,3;2,2;1,1;0,3;2,4;1,2;3,2;1,1;0,2;0,1;0,2;1,4;0,2;2,3;0,2;0,3;2,2;2,1;3,-1;3,-2;3,0;3,-1;1,3;2,-1;5,2;1,0;2,0;0,1;2,0;3,0;2,0;1,0;3,-3;2,-1;1,1;2,0;2,0;1,-1;3,-3;0,-5;2,0;-2,-2;-1,-1;-2,-2;-1,-2;0,-3;-1,-1;0,-3;-1,-1;0,-3;-1,0;0,-2;1,-2;0,-5;|om,9t;-2,4;0,e;3,5;2,1;2,0;4,3;5,0;b,c;3,3;2,3;0,2;0,4;0,2;|ns,9w;0,4;1,2;2,3;1,3;-2,4;0,2;-2,3;2,2;3,3;2,-1;0,-2;2,-1;2,0;5,-4;2,0;1,0;1,0;2,0;1,1;4,2;2,-1;2,0;|oa,c0;-2,-2;-3,-1;-2,-1;0,-3;-2,-6;1,-1;-1,-4;-2,-4;-2,-2;-2,-3;0,-1;-2,-1;-1,-5;0,-3;0,3;-1,0;0,2;0,1;-2,2;-1,3;1,3;-2,0;0,-1;-3,0;1,-1;1,-3;-3,-2;-2,-3;-2,0;-3,2;-2,-1;0,-1;-2,-1;-4,0;-1,0;-3,1;-1,-1;-1,0;-2,3;-1,1;-3,-1;-1,-2;-1,-3;-1,-1;-1,-1;2,-1;-3,2;-1,1;0,1;0,2;0,1;-2,3;-1,2;1,1;-2,1;0,2;-1,2;-1,-1;0,2;1,1;0,2;1,1;-1,1;1,3;2,3;4,-1;-1,g;0,2;5,0;0,8;g,0;g,0;f,0;|mj,b9;-2,-1;-2,-2;-3,-4;-4,-2;-4,0;-1,0;1,-1;-2,-2;-2,-1;-5,-2;-1,1;-1,0;-1,-1;-3,0;1,1;-2,3;0,1;-2,1;-2,2;1,2;2,0;1,0;2,0;-2,4;0,2;0,3;-2,2;0,2;-2,0;0,3;-2,1;2,6;5,4;0,5;2,8;1,2;-2,1;0,1;-2,1;-1,6;4,3;g,-8;g,-8;|c1,c7;1,-2;-1,-2;-1,-1;1,-1;0,-1;|md,g5;4,-1;2,-1;0,-1;0,-1;-7,0;-5,1;|yj,ep;0,1;0,2;2,0;0,4;-1,4;4,1;4,0;3,3;1,5;2,1;2,4;-7,-1;-3,-2;-6,0;-2,4;-4,3;-7,1;-2,4;-1,2;-2,2;-2,4;-4,2;-6,1;-5,0;-5,-1;-3,-2;2,-1;0,-2;-2,-1;-4,-5;0,-1;-5,-3;-5,2;-5,-1;-2,2;-3,0;-5,-3;-6,0;-3,-1;-5,0;-4,0;-3,2;-3,2;-4,1;-6,-1;-3,-1;-6,2;-1,3;-4,1;-4,1;-5,1;-4,-4;2,-2;-4,-3;-6,1;-4,0;-2,2;-5,0;-3,1;-6,-2;-8,-3;-4,-1;-2,0;|pe,en;-2,-1;-1,-1;-2,0;-2,2;-1,0;-3,1;-1,2;-4,1;-2,-1;-1,1;-5,2;-6,1;-4,0;|o9,f8;0,2;2,1;4,1;1,1;-1,2;1,2;0,1;-6,2;-2,0;-2,2;-4,-1;-5,1;1,1;-2,2;-3,0;0,1;1,1;-3,2;-4,0;-1,0;-1,-1;-2,0;-1,3;-1,1;1,1;3,0;2,0;-1,1;-3,1;0,1;-1,1;-3,2;1,1;0,2;-4,1;-3,0;0,1;-4,1;-2,2;0,2;-2,1;2,1;-1,4;3,2;-1,1;|n4,gq;9,5;4,2;1,2;-6,3;2,3;-4,3;3,3;-5,5;4,3;-6,2;0,3;4,1;6,1;|nq,f4;1,1;3,-1;1,0;0,-1;1,0;|n6,ho;2,3;-5,2;-6,-2;-2,-3;-4,-1;-4,1;-6,-1;-4,2;-2,-1;-3,0;0,-2;-8,0;-1,-2;-4,0;-3,-3;-4,-4;-6,-6;2,-1;-2,-2;-4,0;-2,-3;0,-6;3,-2;-2,-5;-3,-2;-2,-3;|lt,6u;2,2;2,-1;1,-2;1,0;3,-1;2,0;4,2;0,f;1,-1;2,-3;0,-3;1,-1;2,0;2,2;2,1;1,2;2,1;2,-1;2,-1;3,0;3,1;0,1;1,2;2,1;1,1;1,3;4,3;6,3;1,0;2,-1;2,0;2,0;2,-6;1,-2;-1,-5;0,-1;-2,0;-1,0;0,-1;-1,-2;0,-1;2,-2;2,0;1,2;3,0;|n8,6s;-2,1;-2,0;-2,-2;-2,-3;3,-3;1,1;1,1;2,1;1,1;1,2;-1,1;|a7,c2;-1,0;-1,-2;-1,0;-1,0;0,-1;-3,0;-4,0;0,-2;-2,0;2,-1;1,-1;1,-1;0,-2;-5,0;-2,-3;1,-1;-1,-1;0,-1;|dm,6n;2,1;4,-4;2,1;4,-3;3,-2;2,-3;-2,-2;2,-2;|dx,75;1,2;1,3;0,2;-2,1;-1,-1;-2,0;0,2;0,3;-1,2;-3,1;-2,-1;-4,1;1,5;-2,2;2,1;-1,2;1,2;1,3;-1,3;-2,1;-1,1;1,3;-8,0;-1,5;1,0;0,1;-1,2;0,2;-2,1;-3,0;-2,1;-2,1;-2,1;-4,1;-5,4;1,2;-1,2;1,3;-6,-1;-2,-1;-3,-2;-1,-1;-2,0;-3,0;-2,0;-2,0;0,6;-3,-2;-4,0;-1,2;-3,0;1,2;-2,2;-2,4;1,1;0,1;3,1;-1,3;1,1;0,2;5,3;3,0;1,1;3,0;2,b;0,2;0,2;-2,1;0,3;2,1;1,-1;0,2;-2,0;0,3;8,0;1,1;1,-1;1,-2;3,-2;3,0;1,1;3,1;1,1;1,2;3,1;-1,1;-3,0;-1,3;1,2;-2,1;0,1;3,-1;4,-1;1,1;3,1;4,1;2,2;-1,1;2,0;1,-1;0,-2;1,0;1,-2;-1,-2;-1,-3;1,-2;0,-2;3,-2;2,0;0,1;2,0;1,1;2,1;2,-1;1,1;2,-1;0,1;0,1;0,1;2,0;2,0;2,-1;2,-1;1,2;1,-1;0,-1;2,0;2,2;1,3;2,4;|dj,7r;0,2;-3,2;-4,0;-7,-2;-2,-3;0,-2;-2,-5;|ca,82;2,4;-2,3;1,2;0,1;1,2;0,4;0,2;1,2;-3,6;|b3,9m;0,-1;-1,-1;0,-2;2,1;2,-1;1,-2;2,2;1,3;3,3;4,2;5,4;1,2;0,3;1,1;2,-2;2,-2;1,-1;3,-4;3,-1;2,1;1,0;3,0;3,-2;-3,-4;1,0;2,-2;|bn,9z;-2,1;-2,2;-1,-1;-4,1;-1,1;-4,3;|bc,at;1,2;1,0;1,1;-1,2;1,1;|c3,bb;-3,-1;-1,-2;-1,-1;-2,-1;0,-3;-1,-2;2,-1;0,-1;1,-1;1,-2;-1,-1;0,-1;1,-1;1,-1;5,0;3,0;2,-4;2,1;3,0;2,0;2,-1;-1,-2;-1,-1;0,-3;1,-3;1,-1;0,-1;-2,-2;1,-1;1,-1;1,-4;|as,ax;0,1;1,1;0,1;-1,0;0,2;2,0;|ah,b8;1,1;2,-1;1,0;2,0;0,-1;1,0;1,1;|ab,bg;1,0;0,1;1,0;0,2;1,0;1,0;1,1;1,-1;0,1;1,0;1,1;0,1;1,0;0,1;1,0;1,-1;1,1;1,0;1,1;1,0;1,0;|a9,bi;0,1;0,1;-1,0;-2,-1;0,1;-1,1;-1,0;-1,1;0,1;0,1;2,1;2,2;|a0,bj;0,1;1,1;1,0;1,1;|a3,bz;0,-3;0,-4;1,0;|dd,ax;-3,-2;-1,-1;2,-2;-1,-1;-3,0;0,-2;-1,-1;3,-3;|dn,ao;0,-4;-3,-1;1,-1;-1,-2;2,-3;1,0;0,-2;3,-3;|e0,an;-2,-3;0,-3;2,-3;-1,-1;0,-2;-1,-2;|ka,fp;1,-2;1,0;2,-1;3,-2;2,0;4,-2;1,0;1,0;2,-1;5,-1;-2,-3;0,-3;-1,0;-2,0;0,-1;-3,-2;0,-2;2,1;1,-2;0,-1;1,-2;-1,-1;1,-3;2,0;0,-2;|kc,eq;-5,-1;-4,2;-2,-1;-7,2;-2,2;|na,7k;-3,1;-3,1;-1,3;0,1;-2,0;-4,5;-2,2;0,1;-2,3;5,0;1,-1;1,0;2,3;4,3;1,0;1,2;2,1;3,1;0,-2;4,1;2,-1;0,-1;2,-1;2,-1;0,-5;0,-3;-1,-3;1,-1;0,-2;-1,-1;-1,-2;-4,-5;|m8,79;0,c;4,0;0,e;3,0;6,2;1,-2;3,1;1,0;2,1;1,0;|lb,83;2,1;2,0;3,0;2,-2;1,1;g,0;3,-2;a,-1;7,2;3,1;3,0;1,-1;0,-1;|i6,bt;2,1;2,-1;1,1;3,0;2,-1;2,-1;3,-3;2,-3;1,-2;0,-2;2,-1;0,-2;0,-1;-1,0;-2,0;0,-1;-1,0;-3,1;-2,0;-7,1;-1,-1;-2,0;-2,0;|i5,bh;3,0;1,0;1,0;1,1;2,-1;2,0;2,1;-1,1;-2,0;-1,0;-1,1;-2,-1;-1,-1;-4,0;|in,bm;2,1;0,3;2,0;2,-1;3,0;1,0;1,1;g,0;1,3;-1,0;-2,i;-2,h;6,0;e,-9;d,-9;1,-1;3,-2;2,0;0,-3;4,1;0,-a;-2,-2;0,-3;-4,0;-5,-1;-2,-1;-2,0;-3,0;-1,0;-2,0;-4,-2;-1,-1;-3,-2;0,-1;-2,-1;-2,1;-1,-1;-1,-3;-3,-3;0,-2;-1,-1;0,-3;-1,0;-1,-1;-1,2;-1,0;-1,0;0,-1;-3,0;-2,0;-1,1;0,1;-1,1;0,-1;0,2;0,1;-1,1;-1,1;-1,1;-1,0;-2,-1;-1,-1;-1,1;-1,1;-1,0;-1,-1;-1,0;0,2;|k7,ap;-1,2;1,a;-1,0;0,2;-2,2;-1,1;1,2;1,0;1,2;2,1;1,1;1,1;1,0;3,-2;0,-2;1,-2;-1,-2;1,-1;-2,-2;-1,-1;-1,-3;0,-3;0,-6;|lm,bf;-1,0;0,-1;-1,0;-3,4;-1,0;-3,-2;-3,1;-2,1;-1,-1;-3,0;-2,-2;-2,0;-5,2;-2,-1;-2,0;-1,2;-4,1;-5,0;-1,-1;0,-2;-1,-2;-1,-3;|k9,bc;0,3;-5,0;0,2;-2,3;-1,2;1,2;|kh,c5;6,1;b,8;e,8;6,-2;3,-2;2,1;|ll,be;1,-2;0,-2;-4,-3;-1,-2;0,-2;-1,-1;-1,-3;-2,-2;-1,-2;-1,-1;0,-2;-3,-1;-2,1;-2,0;-2,-2;-1,0;-2,-4;-1,-3;|lp,au;-2,-4;-1,-1;0,-3;0,-2;0,-1;2,-2;0,-2;2,-2;1,-1;1,-2;0,-1;0,-2;-3,1;-4,1;-5,0;-3,0;-2,0;-2,0;-6,0;|k4,ao;-1,1;-1,3;0,2;1,3;-1,2;-1,3;0,3;-1,2;0,1;4,0;|jp,ak;0,2;-2,3;1,5;2,3;-1,6;-1,3;0,2;7,0;2,0;1,0;2,0;|je,b5;2,0;1,-2;2,-1;1,1;2,1;3,-1;|j5,ah;0,4;1,0;0,2;-2,2;-1,0;-1,1;0,2;0,2;0,1;1,0;0,1;0,1;0,1;2,0;-1,4;-1,1;0,2;1,0;|j2,av;-1,0;-1,-2;-1,0;-1,1;1,2;-2,2;-1,0;-1,0;-1,-1;0,2;-1,1;1,1;-1,2;-1,1;-4,0;-1,-1;-1,0;0,-1;-1,-1;-2,-1;|ib,b8;2,2;1,0;2,1;1,0;0,2;0,1;|iq,ar;1,1;0,2;2,2;2,2;|m2,ae;-3,0;-2,1;-3,-2;-2,-4;|mq,ax;2,-2;0,-1;3,-2;2,-2;1,-2;3,-2;0,-1;|lg,9h;-2,1;-1,0;-1,-2;|l8,9k;3,2;-1,3;1,1;3,0;0,2;2,-2;4,0;1,2;1,3;-1,3;-2,2;2,5;-1,1;-3,-1;-1,2;0,2;|l2,a4;1,0;6,0;0,5;|nn,8z;2,-2;1,-3;-1,-1;-1,-3;1,-4;-1,-1;-1,-4;2,-1;-c,-3;0,-3;|ml,82;-3,2;-2,4;0,c;8,0;0,2;0,1;0,2;0,2;0,1;|nu,8q;-1,-3;1,-5;2,0;1,-2;2,-2;0,-6;-2,0;-1,-3;-2,2;-1,3;1,2;0,2;-2,1;-1,-1;-2,2;|nk,71;0,2;-1,2;|n8,9p;3,-1;1,3;2,-1;|nx,do;1,0;0,1;1,0;0,-2;-1,-1;-1,0;-1,-3;1,0;-1,-1;0,-1;2,1;0,-2;-2,-6;-1,1;-2,6;|o0,dv;2,-1;0,-1;-2,-2;-1,-2;|ny,dm;0,-3;0,-1;|la,dp;0,-4;-2,-1;-1,-1;-3,-1;0,-2;0,-2;-2,-1;-2,7;-2,2;0,1;-4,2;0,3;3,3;1,3;-1,4;1,2;|j1,d3;0,4;7,3;4,1;3,1;2,2;4,2;0,3;3,0;2,1;5,1;0,2;-1,0;-1,5;0,2;-2,3;|l2,dd;1,-3;0,-2;0,-3;0,-2;0,-2;0,-3;-2,-2;3,-3;0,-1;1,-2;2,0;3,-2;2,-2;|nz,dn;4,-2;8,5;2,-5;-1,-1;-8,-2;4,-4;-1,-1;-1,-1;-3,-1;-1,-1;-2,-1;-4,0;|qa,cs;-2,0;-1,-3;1,0;-2,-1;0,-2;-1,-2;0,-1;-1,-1;-c,2;-2,4;0,1;|pq,cr;-2,-1;-1,1;|pe,d6;-3,0;-1,2;-4,0;3,4;3,0;|ob,dq;9,4;2,5;-1,2;2,1;2,3;2,1;5,-1;1,-1;2,1;3,-5;2,-1;1,-3;-2,-1;-1,-3;2,-4;5,-2;2,-3;0,-3;1,0;0,-2;2,-2;|p6,d8;-7,1;-b,8;-6,3;-5,1;|pw,bv;-1,2;-3,7;c,4;3,8;-2,3;|ve,bd;-1,5;3,3;5,1;4,-1;3,-1;2,2;4,-1;0,-3;0,-5;-7,-3;2,-2;-4,0;-4,-2;|vd,ap;-2,-2;-2,0;-1,2;-3,2;-1,-1;|uy,b4;2,4;2,4;-1,3;0,2;-1,2;-2,3;-1,2;1,1;2,4;-2,2;-3,3;-1,4;1,1;2,4;3,0;2,2;2,1;2,-2;0,-2;3,0;-1,-4;0,-4;4,2;2,0;2,0;1,1;3,0;3,-3;0,-4;3,-4;0,-3;-1,-2;|v4,ca;1,1;4,3;0,-1;2,0;0,4;2,1;2,-3;2,-4;5,0;1,-3;-2,-2;-1,-1;4,-2;4,-5;2,-4;3,-2;1,-3;0,-4;|u9,cb;0,3;2,-1;0,3;2,1;-1,2;1,1;0,4;3,-1;2,4;0,2;3,3;0,2;5,3;3,-1;-1,3;2,1;-1,1;3,0;1,-2;2,-1;0,-3;0,-3;-4,-4;-1,-4;5,0;1,-3;2,-1;-1,-4;3,-1;2,-1;3,1;0,-1;|vd,ci;2,1;3,0;4,0;3,2;2,-1;4,-1;-1,-2;2,-2;4,-1;|y9,ea;0,-1;-2,0;-3,0;-1,-2;-2,0;|xt,eg;3,2;5,2;2,3;2,-1;4,0;-1,2;6,2;2,2;3,-2;|wz,fk;-2,-3;-3,-4;1,-2;2,0;4,0;3,1;3,-1;4,-3;0,-1;-4,0;-5,0;-3,-1;-3,-3;-6,-2;-4,-2;-4,1;-3,0;-2,-2;2,-2;0,-1;-2,-1;-3,-3;-5,-1;-6,0;-6,-1;-5,-3;-2,2;-5,0;-6,2;-4,1;-5,-1;-8,1;-5,0;-2,2;-2,4;-2,0;-5,3;-5,0;-5,1;-2,2;2,5;-3,3;-6,1;-3,2;-1,3;|ub,cg;-2,7;-2,-1;0,-2;-2,2;1,2;2,1;2,3;-3,1;-4,0;-3,0;-1,3;-2,0;-3,2;-1,-3;3,-2;-3,-2;-1,-1;3,-1;-1,-2;2,-3;0,-4;|rl,cn;2,2;9,0;-1,4;-2,2;0,3;-3,2;4,4;5,0;4,4;3,4;4,4;0,3;3,2;-3,2;-2,3;-1,3;2,2;6,-1;4,1;4,3;5,-5;-1,-3;2,-2;0,-2;-3,0;1,-4;4,-2;5,-3;-2,-2;-2,-4;4,-1;4,-2;5,-3;6,0;2,-2;3,0;5,-1;3,0;1,1;-1,3;0,2;3,0;0,-3;0,-1;4,-1;2,1;4,-1;3,0;0,3;-1,1;3,1;4,3;4,2;4,-1;2,2;2,-3;-1,-1;4,-1;|tv,d1;3,3;2,1;3,-1;2,0;2,-1;|t0,dd;2,1;3,-2;4,-2;3,-1;1,-2;3,0;3,-2;5,-1;4,0;|qu,cs;2,5;5,2;0,2;-2,1;0,3;-4,2;-2,2;-2,2;7,-2;4,1;3,-1;0,1;3,0;5,2;1,3;2,2;3,0;0,1;3,1;2,-1;1,2;0,2;2,2;2,1;-1,3;4,0;1,1;-1,2;2,2;0,2;-1,1;2,2;5,1;4,0;2,1;3,1;3,-2;1,-3;6,-2;|rj,e5;2,-1;2,1;2,0;1,1;2,0;1,1;1,2;1,1;2,-1;0,-1;1,0;0,-4;1,-1;2,1;2,0;2,2;3,0;4,0;1,-1;|qr,db;4,4;0,3;-3,0;-1,3;-1,3;2,2;-2,1;1,3;2,5;4,-2;3,1;1,1;3,1;2,1;1,3;3,1;1,2;2,-1;1,-1;|rw,eh;-1,-1;-5,0;0,-2;4,0;5,-1;8,1;1,-4;1,0;2,0;0,-2;1,-2;|sx,ep;-1,-1;-6,-2;-1,-1;-5,-1;-2,-2;-4,0;-3,-1;-4,-1;1,-1;-1,-1;|qt,dz;-1,3;-2,0;-5,4;-3,0;-5,2;-3,0;-1,0;-3,0;-3,-2;-3,-1;|oz,e5;-2,3;1,1;-2,5;3,1;1,-2;2,-2;3,0;1,0;5,3;1,0;1,-1;-1,-2;3,-2;1,0;|o1,dz;1,1;1,1;0,2;1,-1;5,2;2,-1;3,0;5,1;2,0;4,1;|p5,eb;-2,2;0,1;-2,0;-1,1;-1,0;-1,1;-3,1;0,2;-1,1;6,1;1,-1;1,-1;-1,-1;3,-1;-2,-1;2,-1;2,-1;0,-3;|mb,ho;5,-2;6,-2;0,-6;2,-2;|nj,fs;-3,0;-2,-1;0,-2;-1,1;-4,-1;-1,1;-2,0;-1,0;-3,0;-5,1;-4,1;-3,0;-2,-2;-2,0;0,2;-1,2;2,1;0,1;-1,2;0,2;4,0;4,1;1,2;3,2;0,1;2,1;5,2;|na,f1;-1,1;-2,-1;-2,1;1,0;1,2;1,1;-1,1;1,0;1,0;2,-1;1,1;-1,0;1,1;-2,1;0,1;-2,1;0,1;-1,1;-2,1;-3,1;-3,-1;-1,0;-1,0;-1,-1;-3,0;-2,-1;-1,1;-3,0;-2,0;-2,0;0,1;-3,1;1,1;1,1;1,0;-1,2;4,3;2,1;0,1;-2,3;|mi,fg;-4,2;-2,-1;-2,1;-3,-1;-2,1;-1,0;-1,0;-1,2;-3,0;-1,1;-3,1;0,-1;-2,1;0,1;-3,0;-2,1;-2,3;1,1;-1,3;-2,1;1,1;-1,2;|mj,g1;2,0;1,-1;|mj,fc;-3,-1;-1,-3;-3,-3;-3,0;-3,0;-3,-1;-1,-1;-3,1;-3,2;-2,0;-1,1;|lw,fc;0,-1;-3,0;1,-1;-1,-3;-1,0;-3,0;-2,-1;-4,0;-5,1;-1,1;-4,0;-1,-1;-2,1;-2,0;-2,0;1,1;-1,1;2,0;2,-1;0,1;4,0;3,1;1,0;2,-1;0,1;0,2;1,1;1,2;3,-2;3,2;1,0;3,-1;2,0;2,-1;0,-2;2,-1;1,0;4,1;2,0;2,1;2,0;1,1;1,0;4,-1;1,1;|n5,f2;-1,2;1,1;0,2;-3,3;-1,1;-1,1;-2,1;|n6,ev;-2,0;-3,2;-5,-1;-2,-1;-6,0;-3,1;-1,-1;-1,2;-1,1;1,0;-1,1;-1,-1;-3,1;0,2;-3,1;0,1;-2,2;|mc,g8;5,1;7,0;3,0;1,0;2,-1;4,-2;|mp,gf;4,1;1,-1;4,-1;3,0;|lo,fo;-2,0;-1,0;-1,0;-3,-1;-1,-1;-3,-1;1,-1;0,-2;2,-1;2,-1;|l2,fa;-4,1;-1,-1;-3,0;|kp,fi;0,2;-1,1;1,2;-1,4;2,0;1,2;1,4;0,1;|ky,g4;3,-1;3,1;|n4,eo;-3,1;-5,-2;0,-2;-3,0;-3,1;-3,-1;-3,0;0,3;-2,1;0,1;0,2;2,1;-2,2;0,1;1,1;|mw,en;2,-1;-1,-2;-1,-1;|m9,ef;1,1;1,2;1,0;0,1;3,1;1,1;2,0;1,0;1,0;|om,em;4,0;4,-2;|m5,eo;0,1;2,2;0,-1;1,0;1,-1;1,0;0,-2;0,-1;0,-2;2,-1;|m3,f4;1,-2;2,-1;-2,-2;-2,1;-3,0;-3,1;-2,0;-1,-1;-1,1;-1,-2;2,-2;1,-1;2,-1;1,-1;2,-2;3,-1;0,-1;|lj,f2;3,0;0,1;2,-1;1,0;0,1;2,0;0,2;3,1;|l6,f8;-1,-2;-1,-1;-3,1;-1,-2;-2,0;-1,1;-2,-2;-2,0;-2,1;|kn,fi;0,2;1,1;|kd,fp;3,0;4,1;2,-2;3,-1;|j0,eo;1,1;2,0;1,-2;2,0;1,1;2,0;1,-2;-1,-2;0,-3;-1,0;0,-2;-2,0;2,-3;-1,-3;1,-1;-1,-1;-1,-1;0,-2;|j6,g5;1,-3;-1,-2;2,0;3,-1;|lj,f6;0,-2;1,-2;|p0,el;1,1;3,-2;2,0;1,1;-2,2;1,0;|wp,ai;2,-2;0,1;2,0;1,3;0,2;|lw,fe;0,1;2,0;2,1;1,1;1,0;0,1;1,0;|os,bf;-1,-1;-2,0;-1,1;-2,3;-1,1;-1,1;-4,2;-3,0;-1,1;-2,-1;-2,2;-2,-3;-4,1;|or,bt;2,2;-1,1;2,2;1,-1;1,1;5,0;1,-1;3,0;2,0;1,-1;2,0;3,5;3,1;c,2;|ns,dw;-1,0;-1,0;0,1;-1,0;-1,-1;-1,1;|ms,cg;0,f;0,e;-1,3;1,3;-1,1;2,2;|nx,am;-2,4;-2,1;-1,2;-2,2;-2,0;1,2;2,1;1,1;|op,be;-1,-2;-1,-1;0,-2;0,-1;2,0;1,0;1,0;-1,-2;2,-2;1,-2;2,-1;d,-5;3,0;|ne,9v;-3,-1;-1,1;|nf,ae;2,1;3,-1;3,1;3,0;2,2;|m4,ez;1,0;-1,-1;2,-2;0,-2;-1,0;-1,0;-1,-1;-1,-2;|ma,en;1,0;0,1;2,1;1,0;2,0;2,0;|me,ep;1,1;0,1;-1,0;-1,1;-1,1;-1,0;-1,-1;-1,-1;0,1;-1,0;-1,1;-1,0;-1,1;";
let LAND_GEO = null;
const landGeo = () => {
  if (LAND_GEO) return LAND_GEO;
  const step = 0.25, polys = [];
  LAND_Q.split('|').forEach((ring) => {
    if (!ring) return;
    const pts = []; let x = 0, y = 0, lo = Infinity, hi = -Infinity, top = -Infinity;
    ring.split(';').forEach((p) => {
      if (!p) return;
      const c = p.split(',');
      x += parseInt(c[0], 36); y += parseInt(c[1], 36);
      if (x < lo) lo = x;
      if (x > hi) hi = x;
      if (y > top) top = y;
      pts.push([x * step - 180, y * step - 90]);
    });
    // solo la Antártida rodea el globo entero y rellena el hemisferio al proyectarse.
    // Eurasia también abarca 360° porque Chukotka cruza el antimeridiano, así que
    // las distinguimos por latitud en lugar de por amplitud.
    const esAntartida = (hi - lo) * step >= 330 && top * step - 90 < -55;
    if (esAntartida || pts.length <= 2) return;
    // en geometría esférica un anillo con el giro invertido significa "todo menos esta zona".
    // El área esférica lo detecta con fiabilidad, incluso en anillos que cruzan medio globo
    // (el test plano de la superficie falla ahí).
    pts.push(pts[0]);
    if (window.d3 && window.d3.geoArea) {
      const area = window.d3.geoArea({ type: 'Polygon', coordinates: [pts] });
      if (area > 2 * Math.PI) { pts.reverse(); }
    }
    polys.push([pts]);
  });
  const borders = [];
  BORD_Q.split('|').forEach((line) => {
    if (!line) return;
    const pts = []; let x = 0, y = 0, lo = Infinity, hi = -Infinity;
    line.split(';').forEach((p) => {
      if (!p) return;
      const c = p.split(',');
      x += parseInt(c[0], 36); y += parseInt(c[1], 36);
      if (x < lo) lo = x;
      if (x > hi) hi = x;
      pts.push([x * step - 180, y * step - 90]);
    });
    if ((hi - lo) * step < 330 && pts.length > 1) borders.push(pts);
  });
  LAND_GEO = {
    fill: { type: 'Feature', geometry: { type: 'MultiPolygon', coordinates: polys } },
    rings: polys.map((p) => p[0]),
    line: { type: 'Feature', geometry: { type: 'MultiLineString', coordinates: polys.map((p) => p[0]) } },
    borders: { type: 'Feature', geometry: { type: 'MultiLineString', coordinates: borders } },
  };
  return LAND_GEO;
};

class Component extends DCLogic {
  state = { lang: null, mapTab: 'fx', route: '' };

  _cname(c, lang) { return typeof c.n === 'string' ? c.n : c.n[lang]; }

  _svcAnchor(s) {
    const M = {
      'FX': 'svc-0', 'Coordinación': 'svc-0', 'Coordination': 'svc-0',
      'Pagos internacionales': 'svc-0', 'International payments': 'svc-0',
      'Comercio exterior': 'svc-0', 'Foreign trade': 'svc-0',
      'Documentación': 'svc-0', 'Documentation': 'svc-0',
      'Tesorería': 'svc-1', 'Treasury': 'svc-1', 'Liquidez': 'svc-1', 'Liquidity': 'svc-1',
      'Cobertura': 'svc-2', 'Hedging': 'svc-2',
      'Criptoactivos': 'svc-4', 'Crypto assets': 'svc-4',
    };
    return M[s] || null;
  }

  // salta a la tarjeta de Soluciones correspondiente y la resalta un momento
  _goService(id) {
    return (e) => {
      const el = id && document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 130, behavior: 'smooth' });
      clearTimeout(this._svcT);
      const restore = () => { const p = this._svcPrev; if (p) { p.el.style.boxShadow = p.bs; p.el.style.borderColor = p.bc; p.el.style.transform = p.tr; this._svcPrev = null; } };
      restore();
      this._svcPrev = { el, bs: el.style.boxShadow, bc: el.style.borderColor, tr: el.style.transform };
      el.style.boxShadow = '0 0 0 2px #427092, 0 0 30px -4px rgba(66,112,146,0.5), 0 26px 58px rgba(17,40,64,0.22)';
      el.style.borderColor = '#427092';
      el.style.transform = 'translateY(-5px)';
      this._svcT = setTimeout(restore, 2000);
    };
  }

  mapModel() {
    if (this._model) return this._model;
    const C = {
      cdmx: { n: 'CDMX', role: { es: 'Hub operativo · México', en: 'Operating hub · Mexico' }, cur: 'MXN', lon: -99.1, lat: 19.4, hub: 1 },
      mad: { n: 'MADRID', role: { es: 'Hub operativo · España', en: 'Operating hub · Spain' }, cur: 'EUR', lon: -3.7, lat: 40.4, hub: 1 },
      nyc: { n: { es: 'NUEVA YORK', en: 'NEW YORK' }, role: { es: 'Estados Unidos · América', en: 'United States · Americas' }, cur: 'USD', lon: -74, lat: 40.7 },
      tor: { n: 'TORONTO', role: { es: 'Canadá · América', en: 'Canada · Americas' }, cur: 'CAD', lon: -79.4, lat: 43.7 },
      lon: { n: { es: 'LONDRES', en: 'LONDON' }, role: { es: 'Reino Unido · Europa', en: 'United Kingdom · Europe' }, cur: 'GBP', lon: -0.1, lat: 51.5 },
      zur: { n: { es: 'ZÚRICH', en: 'ZURICH' }, role: { es: 'Suiza · Europa', en: 'Switzerland · Europe' }, cur: 'CHF', lon: 8.5, lat: 47.4 },
      cph: { n: { es: 'COPENHAGUE', en: 'COPENHAGEN' }, role: { es: 'Dinamarca · Europa', en: 'Denmark · Europe' }, cur: 'DKK', lon: 12.6, lat: 55.7 },
      osl: { n: 'OSLO', role: { es: 'Noruega · Europa', en: 'Norway · Europe' }, cur: 'NOK', lon: 10.75, lat: 59.9 },
      sto: { n: { es: 'ESTOCOLMO', en: 'STOCKHOLM' }, role: { es: 'Suecia · Europa', en: 'Sweden · Europe' }, cur: 'SEK', lon: 18.1, lat: 59.3 },
      waw: { n: { es: 'VARSOVIA', en: 'WARSAW' }, role: { es: 'Polonia · Europa', en: 'Poland · Europe' }, cur: 'PLN', lon: 21.0, lat: 52.2 },
      bud: { n: 'BUDAPEST', role: { es: 'Hungría · Europa', en: 'Hungary · Europe' }, cur: 'HUF', lon: 19.0, lat: 47.5 },
      ist: { n: { es: 'ESTAMBUL', en: 'ISTANBUL' }, role: { es: 'Turquía · Europa', en: 'Türkiye · Europe' }, cur: 'TRY', lon: 29.0, lat: 41.0 },
      sha: { n: { es: 'SHANGHÁI', en: 'SHANGHAI' }, role: { es: 'China · Asia-Pacífico', en: 'China · Asia-Pacific' }, cur: 'CNY', lon: 121.5, lat: 31.2 },
      syd: { n: { es: 'SÍDNEY', en: 'SYDNEY' }, role: { es: 'Australia · Oceanía', en: 'Australia · Oceania' }, cur: 'AUD', lon: 151.2, lat: -33.9 },
      akl: { n: 'AUCKLAND', role: { es: 'Nueva Zelanda · Oceanía', en: 'New Zealand · Oceania' }, cur: 'NZD', lon: 174.8, lat: -36.8 },
      hkg: { n: 'HONG KONG', role: { es: 'Hong Kong · Asia-Pacífico', en: 'Hong Kong · Asia-Pacific' }, cur: 'HKD', lon: 114.2, lat: 22.3 },
      tyo: { n: { es: 'TOKIO', en: 'TOKYO' }, role: { es: 'Japón · Asia-Pacífico', en: 'Japan · Asia-Pacific' }, cur: 'JPY', lon: 139.7, lat: 35.7 },
      sin: { n: { es: 'SINGAPUR', en: 'SINGAPORE' }, role: { es: 'Singapur · Asia-Pacífico', en: 'Singapore · Asia-Pacific' }, cur: 'SGD', lon: 103.8, lat: 1.35 },
      cas: { n: 'CASABLANCA', role: { es: 'Marruecos · Medio Oriente y África', en: 'Morocco · Middle East & Africa' }, cur: 'MAD', lon: -7.6, lat: 33.6 },
      jnb: { n: { es: 'JOHANNESBURGO', en: 'JOHANNESBURG' }, role: { es: 'Sudáfrica · Medio Oriente y África', en: 'South Africa · Middle East & Africa' }, cur: 'ZAR', lon: 28.0, lat: -26.2 },
    };
    const R = [
      { from: 'cdmx', to: 'mad', cur: 'EUR/MXN', svc: ['fx', 'treasury', 'liquidity', 'execution'] },
      { from: 'cdmx', to: 'nyc', cur: 'USD', svc: ['fx', 'liquidity', 'execution'] },
      { from: 'cdmx', to: 'tor', cur: 'CAD', svc: ['fx', 'execution'] },
      { from: 'mad', to: 'lon', cur: 'GBP', svc: ['fx', 'liquidity', 'execution'] },
      { from: 'mad', to: 'zur', cur: 'CHF', svc: ['fx', 'treasury', 'liquidity'] },
      { from: 'mad', to: 'cph', cur: 'DKK', svc: ['treasury', 'execution'] },
      { from: 'mad', to: 'osl', cur: 'NOK', svc: ['treasury', 'execution'] },
      { from: 'mad', to: 'sto', cur: 'SEK', svc: ['treasury', 'execution'] },
      { from: 'mad', to: 'waw', cur: 'PLN', svc: ['fx', 'execution'] },
      { from: 'mad', to: 'bud', cur: 'HUF', svc: ['fx', 'execution'] },
      { from: 'mad', to: 'ist', cur: 'TRY', svc: ['fx', 'execution'] },
      { from: 'mad', to: 'sha', cur: 'CNY', svc: ['fx', 'liquidity', 'execution'] },
      { from: 'mad', to: 'syd', cur: 'AUD', svc: ['fx', 'execution'] },
      { from: 'mad', to: 'akl', cur: 'NZD', svc: ['execution'] },
      { from: 'mad', to: 'hkg', cur: 'HKD', svc: ['fx', 'liquidity', 'execution'] },
      { from: 'mad', to: 'tyo', cur: 'JPY', svc: ['fx', 'liquidity', 'execution'] },
      { from: 'mad', to: 'sin', cur: 'SGD', svc: ['liquidity', 'execution'] },
      { from: 'mad', to: 'cas', cur: 'MAD', svc: ['treasury', 'execution'] },
      { from: 'mad', to: 'jnb', cur: 'ZAR', svc: ['fx', 'execution'] },
    ];
    // Derive each city's service participation from routes
    Object.values(C).forEach((c) => { c.svc = new Set(); });
    R.forEach((r) => { r.svc.forEach((s) => { C[r.from].svc.add(s); C[r.to].svc.add(s); }); });
    this._model = { C, R };
    return this._model;
  }

  _initChrome() {
    if (this._chromeDone) return;
    this._chromeDone = true;
    const root = document.documentElement, body = document.body;
    const burger = document.getElementById('bb-burger');
    const panel = document.getElementById('bb-mpanel');
    const prog = document.getElementById('bb-prog');
    const setMenu = (open) => {
      body.classList.toggle('bb-menu-open', open);
      // estado explícito: el panel no depende solo de la cascada
      if (panel) {
        panel.style.opacity = open ? '1' : '0';
        panel.style.visibility = open ? 'visible' : 'hidden';
        panel.style.transform = open ? 'none' : 'translateY(-8px)';
        panel.style.pointerEvents = open ? 'auto' : 'none';
        panel.setAttribute('aria-hidden', open ? 'false' : 'true');
      }
      if (burger) { burger.setAttribute('aria-expanded', open ? 'true' : 'false'); burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú'); }
    };
    if (burger) burger.addEventListener('click', () => setMenu(!body.classList.contains('bb-menu-open')));
    if (panel) panel.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
    this._onKey = (e) => { if (e.key === 'Escape') setMenu(false); };
    document.addEventListener('keydown', this._onKey);
    this._onResize = () => { if (window.innerWidth > 900) setMenu(false); };
    window.addEventListener('resize', this._onResize);

    const ids = ['soluciones', 'divisas', 'casos', 'proceso', 'confianza', 'contacto'];
    const topBtn = document.getElementById('bb-top');
    if (topBtn) topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    const links = Array.from(document.querySelectorAll('[data-navlink]'));
    let raf = 0;
    // medidas cacheadas: leer el layout en cada frame de scroll es lo que provoca el tirón
    let secTops = [], docMax = 1;
    const measure = () => {
      docMax = Math.max(1, (root.scrollHeight || 1) - window.innerHeight);
      secTops = ids.map((id) => {
        const s = document.getElementById(id);
        return s ? s.getBoundingClientRect().top + window.scrollY : Infinity;
      });
    };
    measure();
    this._measureNav = measure;
    window.addEventListener('resize', measure);
    [400, 1200, 2600].forEach((t) => setTimeout(measure, t));
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        if (prog) prog.style.transform = 'scaleX(' + Math.min(1, Math.max(0, y / docMax)).toFixed(4) + ')';
        if (topBtn) topBtn.classList.toggle('on', y > window.innerHeight * 1.2);
        const line = y + window.innerHeight * 0.42;
        let cur = '';
        for (let i = 0; i < ids.length; i++) if (secTops[i] <= line) cur = ids[i];
        links.forEach((a) => a.classList.toggle('on', a.dataset.navlink === cur));
      });
    };
    this._onScroll = onScroll;
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    this._syncCaseInd = () => {
      const wrap = document.getElementById('bb-casetabs');
      const ind = document.getElementById('bb-caseind');
      if (!wrap || !ind) return;
      const act = wrap.querySelector('[data-casetab][aria-selected="true"]');
      if (!act) return;
      ind.style.left = (act.offsetLeft) + 'px';
      ind.style.width = act.offsetWidth + 'px';
    };
    const tabs = document.getElementById('bb-casetabs');
    if (tabs) {
      tabs.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        const all = Array.from(tabs.querySelectorAll('[data-casetab]'));
        const i = all.indexOf(document.activeElement);
        if (i < 0) return;
        e.preventDefault();
        const n = all[(i + (e.key === 'ArrowRight' ? 1 : all.length - 1)) % all.length];
        n.focus(); n.click();
      });
    }
    setTimeout(this._syncCaseInd, 120);
    window.addEventListener('resize', this._syncCaseInd);
  }

  _routeFromHash() {
    var h = '';
    try { h = (location.hash || '').replace(/^#/, ''); } catch (e) {}
    return h.indexOf('servicio-') === 0 && SVC[h.slice(9)] ? h.slice(9) : '';
  }

  _initRoute() {
    var self = this;
    this.setState({ route: this._routeFromHash() });
    this._onHash = function () {
      var next = self._routeFromHash();
      if (next === self.state.route) return;
      var apply = function () {
        self.setState({ route: next });
        if (next) { try { window.scrollTo(0, 0); } catch (e) {} }
      };
      if (document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.startViewTransition(apply);
      } else apply();
    };
    addEventListener('hashchange', this._onHash);
  }

  componentDidMount() {
    this._initRoute();
    // idioma compartido con las páginas de servicio (URL manda sobre lo guardado)
    try {
      const qp = new URLSearchParams(location.search).get('lang');
      const st = (qp === 'es' || qp === 'en') ? qp : localStorage.getItem('bb-lang');
      if ((st === 'es' || st === 'en') && st !== (this.state.lang ?? this.props.defaultLang ?? 'es')) this.setState({ lang: st });
      this._onPopLang = () => {
        const q = new URLSearchParams(location.search).get('lang');
        if (q === 'es' || q === 'en') this.setState({ lang: q });
      };
      window.addEventListener('popstate', this._onPopLang);
    } catch (e) {}
    this._reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // salto al ancla tras el montaje: el navegador lo intenta antes de que exista la sección,
    // y la escena 3D cambia la altura de la página después de cargar
    if (location.hash && location.hash.length > 1) {
      const id = decodeURIComponent(location.hash.slice(1));
      let moved = false;
      const stop = () => { moved = true; };
      ['wheel', 'touchstart', 'keydown'].forEach((ev) => window.addEventListener(ev, stop, { passive: true, once: true }));
      let tries = 0;
      const go = () => {
        if (moved) return;
        const el = document.getElementById(id);
        if (el) {
          window.scrollTo(0, el.getBoundingClientRect().top + window.pageYOffset - 92);
          if (tries++ < 6) setTimeout(go, 260);
        } else if (tries++ < 26) setTimeout(go, 90);
      };
      setTimeout(go, 60);
    }
    this._initChrome();
    // Reveal on scroll
    this._io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'none';
          this._io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    this._prepReveals = () => {
      if (this._reduced) return;
      const seen = new Map();
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        if (el.dataset.revealDone) return;
        el.dataset.revealDone = '1';
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.9) return;
        const key = el.parentElement || el;
        const n = seen.get(key) || 0;
        seen.set(key, n + 1);
        const d = Math.min(n * 0.07, 0.35);
        el.style.opacity = '0';
        el.style.transform = 'translateY(18px)';
        el.style.transition = 'opacity 0.42s cubic-bezier(.2,.7,.2,1) ' + d + 's, transform 0.42s cubic-bezier(.2,.7,.2,1) ' + d + 's';
        this._io.observe(el);
      });
    };
    setTimeout(this._prepReveals, 60);

    // Fallback: never leave content hidden (screenshots, background tabs, IO failures)
    this._forceReveal = () => {
      this._forceDone = true;
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        if (this._io) this._io.unobserve(el);
      });
    };
    this._revealFallback = setTimeout(this._forceReveal, 1500);
    // Focal claim: light sweep on entry
    this._clio = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        this._clio.unobserve(e.target);
        e.target.classList.add('lit');
      });
    }, { threshold: 0.45 });
    document.querySelectorAll('[data-claim]').forEach((el) => this._clio.observe(el));
    this._claimFallback = setTimeout(() => {
      document.querySelectorAll('[data-claim]').forEach((el) => el.classList.add('lit'));
    }, 1700);
    // Count-up numbers
    this._cio = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        this._cio.unobserve(e.target);
        const el = e.target, target = parseInt(el.dataset.count, 10);
        if (this._reduced) { el.textContent = target; return; }
        const t0 = performance.now(), dur = 1400;
        const tick = (now) => {
          const p = Math.min(1, (now - t0) / dur);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(tick); else this._countDone = true;
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-count]').forEach((el) => this._cio.observe(el));
    this._countFallback = setTimeout(() => {
      this._countDone = true;
      document.querySelectorAll('[data-count]').forEach((el) => {
        if (el.textContent === '0') el.textContent = el.dataset.count;
      });
    }, 1500);
    // Watermark parallax + sticky CTA
    this._onScroll = () => {
      if (!this._reduced) {
        const w = document.getElementById('bb-watermark');
        if (w) w.style.transform = 'translateY(' + (-window.scrollY * 0.08) + 'px)';
        const vh = window.innerHeight;
        document.querySelectorAll('.bb-para').forEach((el) => {
          const r = el.getBoundingClientRect();
          const off = Math.max(-20, Math.min(20, (vh / 2 - (r.top + r.height / 2)) * 0.045));
          el.style.transform = 'translateY(' + off.toFixed(1) + 'px)';
        });
      }
      document.body.classList.toggle('bb-scrolled', window.scrollY > 90);
      // Sticky CTA: direct DOM toggle — never re-render on scroll
      const sk = document.getElementById('bb-sticky');
      if (sk) {
        const on = (this.props.stickyCta ?? false) && window.scrollY > 750;
        sk.style.opacity = on ? '1' : '0';
        sk.style.pointerEvents = on ? 'auto' : 'none';
        sk.style.transform = on ? 'translateY(0)' : 'translateY(16px)';
      }
    };
    window.addEventListener('scroll', this._onScroll, { passive: true });
    setTimeout(() => { this._initGlobe(); this._initFriction(); this._initOrbit(); this._prepArch(); this._caseAuto(); this._pauseOffscreen(); }, 80);
    // las librerías pesadas se piden cuando su sección se acerca, no al cargar
    setTimeout(() => {
      this._near(document.getElementById('bb-friction'), () => { this._frWant = true; this._initFriction(); });
      this._near(document.getElementById('bb-globe'), () => { this._globeWant = true; this._initGlobe(); });
    }, 100);
  }

  _lib(src) {
    this._libp = this._libp || {};
    if (this._libp[src]) return this._libp[src];
    this._libFail = this._libFail || {};
    this._libp[src] = new Promise((res) => {
      const s = document.createElement('script');
      const fail = () => { this._libFail[src] = true; res(); };
      s.src = src; s.async = false; s.onload = res; s.onerror = fail;
      document.head.appendChild(s);
      setTimeout(fail, 8000); // red bloqueada/lenta: no cuelga la cadena para siempre
    });
    return this._libp[src];
  }

  _libSeq(list) { return list.reduce((p, s) => p.then(() => this._lib(s)), Promise.resolve()); }

  _near(el, cb) {
    if (!el) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { io.disconnect(); cb(); } });
    }, { rootMargin: '900px 0px' });
    io.observe(el);
  }

  componentDidUpdate() {
    this._syncCaseInd();
    // Consulta fresca (el DOM cambia: nuevas tarjetas, tabs, idioma) pero solo escribe
    // estilo/texto si de verdad cambia, así no repinta de más en cada tecla o timer.
    document.querySelectorAll('[data-claim]').forEach((el) => { if (!el.classList.contains('lit')) el.classList.add('lit'); });
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      if (el.style.opacity !== '1') el.style.opacity = '1';
      if (el.style.transform !== 'none') el.style.transform = 'none';
    });
    document.querySelectorAll('[data-count]').forEach((el) => {
      if (el.textContent === '0') el.textContent = el.dataset.count;
    });
    this._initGlobe();
    this._initFriction();
    this._initOrbit();
    this._prepArch();
    this._caseAuto();
    this._pauseOffscreen();
    if (this._reduced && this._drawGlobe) this._drawGlobe(performance.now());
    if (this._reduced && this._drawOrbit) this._drawOrbit(performance.now());
  }

  _initOrbit() {
    const cv = document.getElementById('bb-orbit');
    if (!cv || cv.dataset.init) return;
    cv.dataset.init = '1';
    if (this._orbitRaf) cancelAnimationFrame(this._orbitRaf);
    const self = this;
    const S = 720, SH = 470, ctx = cv.getContext('2d');
    const fitBuffer = () => {
      const q = Math.max(1, Math.min(2, (cv.clientWidth * (window.devicePixelRatio || 1)) / S)) || 1;
      const px = Math.round(S * q), py = Math.round(SH * q);
      if (cv.width !== px || cv.height !== py) { cv.width = px; cv.height = py; }
      ctx.setTransform(q, 0, 0, q, 0, 0);
    };
    fitBuffer();
    if (this._orbitRO) this._orbitRO.disconnect();
    if (window.ResizeObserver) { this._orbitRO = new ResizeObserver(fitBuffer); this._orbitRO.observe(cv); }
    if (!this._orbitLogo) {
      const src = document.getElementById('bb-logo-off');
      if (src && src.complete && src.naturalWidth) {
        this._orbitLogo = src;
      } else {
        const li = new Image();
        li.onload = () => { self._orbitLogo = li; if (self._reduced && self._drawOrbit) self._drawOrbit(performance.now()); };
        li.src = (src && src.src) || 'brand/logo-monogram-offwhite.webp';
      }
    }
    const cx = S / 2, cy = SH / 2;
    const CORE = 84;
    const PROC = [106, 130, 154];
    const fiat = ['USD', 'MXN', 'EUR', 'GBP', 'CNY', 'JPY', 'CHF', 'CAD'];
    const digital = ['BTC', 'ETH', 'USDT', 'USDC'];
    // two orbital planes with different inclination → volumetric read
    const ORB = {
      f: { R: 290, sq: 0.34, tilt: -0.11, per: 62, dir: 1 },
      d: { R: 216, sq: 0.58, tilt: 0.30, per: 46, dir: -1 }
    };
    const project = (o, a) => {
      const lx = Math.cos(a) * o.R, ly = Math.sin(a) * o.R * o.sq;
      const ct = Math.cos(o.tilt), st = Math.sin(o.tilt);
      return { x: cx + lx * ct - ly * st, y: cy + lx * st + ly * ct, z: Math.sin(a) };
    };
    const ringArc = (o, front) => {
      ctx.beginPath();
      ctx.ellipse(cx, cy, o.R, o.R * o.sq, o.tilt, front ? 0 : Math.PI, front ? Math.PI : Math.PI * 2);
      ctx.stroke();
    };
    // one coordinated route per cycle: origin → core (3 layers) → destination
    const routes = [
      ['USD', 'EUR'], ['EUR', 'MXN'], ['BTC', 'USD'], ['CNY', 'USD'], ['GBP', 'CHF'],
      ['USDT', 'EUR'], ['MXN', 'CAD'], ['JPY', 'GBP'], ['ETH', 'USD'], ['CHF', 'CNY'],
      ['USDC', 'MXN'], ['CAD', 'JPY'],
    ];
    const CYCLE = 7000;
    const P = { approach: 900, inbound: 2300, l1: 3100, l2: 3900, l3: 4700, outbound: 6100 };
    const ease = (x) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2);
    const lang0 = () => self.state.lang ?? (self.props.defaultLang ?? 'es');
    let last = performance.now(), aF = -Math.PI / 2, aD = -Math.PI / 2, activeCode = null, destCode = null, stageOn = -1;
    let frameNodes = [];
    const stageEls = [];
    const syncStages = () => {};
    const hashAngle = (code) => {
      let h = 0;
      for (let i = 0; i < code.length; i++) h = (h * 31 + code.charCodeAt(i)) % 3600;
      return (h / 3600) * Math.PI * 2;
    };

    const node = (p) => {
      const on = self._orbitHover === p.code;
      const foc = !!(self._assetFocus && self._assetFocus.code === p.code);
      const act = p.code === activeCode || foc;
      const s = 0.74 + 0.26 * (p.z + 1) / 2;
      const dot = (p.ring === 'f' ? 5.6 : 4.9) * s + (on ? 1.8 : act ? 1.2 : 0);
      p.r = 16 * s;
      const dim = self._assetFocus ? (foc ? 1 : 0.26) : 1;
      const depth = p.z < 0 ? 0.42 + 0.58 * (p.z + 1) : 1;
      ctx.save();
      ctx.globalAlpha = depth * dim;
      // contact shadow under the sphere
      ctx.beginPath();
      ctx.ellipse(p.x + dot * 0.22, p.y + dot * 0.92, dot * 0.9, dot * 0.34, 0, 0, 7);
      ctx.fillStyle = 'rgba(6,14,24,0.5)';
      ctx.fill();
      const base = on || act ? [214, 228, 240] : (p.ring === 'f' ? [176, 204, 228] : [116, 156, 192]);
      const hi = 'rgba(' + Math.min(255, base[0] + 52) + ',' + Math.min(255, base[1] + 42) + ',' + Math.min(255, base[2] + 30) + ',1)';
      const mid = 'rgba(' + base[0] + ',' + base[1] + ',' + base[2] + ',1)';
      const lo = 'rgba(' + Math.round(base[0] * 0.34) + ',' + Math.round(base[1] * 0.4) + ',' + Math.round(base[2] * 0.5) + ',1)';
      const sph = ctx.createRadialGradient(p.x - dot * 0.38, p.y - dot * 0.42, dot * 0.12, p.x, p.y, dot * 1.08);
      sph.addColorStop(0, hi); sph.addColorStop(0.46, mid); sph.addColorStop(1, lo);
      ctx.beginPath(); ctx.arc(p.x, p.y, dot, 0, 7);
      ctx.fillStyle = sph;
      ctx.fill();
      // terminator rim on the shaded side
      ctx.beginPath(); ctx.arc(p.x, p.y, dot * 0.96, 0.5, 3.1);
      ctx.lineWidth = Math.max(0.6, dot * 0.16);
      ctx.strokeStyle = 'rgba(' + base[0] + ',' + base[1] + ',' + base[2] + ',0.35)';
      ctx.stroke();
      // specular glint
      ctx.beginPath();
      ctx.ellipse(p.x - dot * 0.36, p.y - dot * 0.4, dot * 0.3, dot * 0.22, -0.7, 0, 7);
      ctx.fillStyle = 'rgba(255,255,255,' + (on || act ? 0.85 : 0.55) + ')';
      ctx.fill();
      if (act || on) {
        ctx.beginPath(); ctx.arc(p.x, p.y, dot + 5 * s, 0, 7);
        ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(159,191,219,0.5)'; ctx.stroke();
      }
      ctx.font = '500 ' + (11.5 * s).toFixed(1) + 'px ui-monospace, Menlo, monospace';
      ctx.fillStyle = on || act ? 'rgba(234,241,248,0.98)' : 'rgba(214,228,240,' + (0.5 * s).toFixed(3) + ')';
      ctx.textAlign = 'center';
      try { ctx.letterSpacing = '1px'; } catch (e) {}
      // fiat rotula arriba, digital abajo: las dos órbitas no se pisan al cruzarse
      if (p.ring === 'd') {
        ctx.textBaseline = 'top';
        ctx.fillText(p.code, p.x, p.y + dot + 6);
      } else {
        ctx.textBaseline = 'bottom';
        ctx.fillText(p.code, p.x, p.y - dot - 6);
      }
      try { ctx.letterSpacing = '0px'; } catch (e) {}
      ctx.restore();
    };

    const drawProcRings = () => {
      PROC.forEach((rr) => {
        ctx.beginPath(); ctx.arc(cx, cy, rr, 0, 7);
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(126,166,200,0.13)';
        ctx.setLineDash([3, 7]);
        ctx.stroke(); ctx.setLineDash([]);
      });
    };

    const drawCore = (now, pulse) => {
      const pz = pulse || 0;
      const hR = CORE * 2.6 * (1 + 0.16 * pz);
      const halo = ctx.createRadialGradient(cx, cy, CORE * 0.55, cx, cy, hR);
      halo.addColorStop(0, 'rgba(66,112,146,' + (0.22 + 0.22 * pz).toFixed(3) + ')'); halo.addColorStop(1, 'rgba(66,112,146,0)');
      ctx.beginPath(); ctx.arc(cx, cy, hR, 0, 7); ctx.fillStyle = halo; ctx.fill();
      if (pz > 0.02) {
        ctx.beginPath(); ctx.arc(cx, cy, CORE * (1.06 + 1.1 * (1 - pz)), 0, 7);
        ctx.lineWidth = 1.4 * pz; ctx.strokeStyle = 'rgba(159,191,219,' + (0.42 * pz).toFixed(3) + ')'; ctx.stroke();
      }
      // oclusión de contacto: el núcleo se apoya en el plano orbital
      const ao = ctx.createRadialGradient(cx, cy + CORE * 0.9, CORE * 0.12, cx, cy + CORE * 0.9, CORE * 1.5);
      ao.addColorStop(0, 'rgba(4,10,18,0.45)'); ao.addColorStop(1, 'rgba(4,10,18,0)');
      ctx.beginPath(); ctx.ellipse(cx, cy + CORE * 0.9, CORE * 1.5, CORE * 0.5, 0, 0, 7);
      ctx.fillStyle = ao; ctx.fill();
      const g = ctx.createRadialGradient(cx - CORE * 0.42, cy - CORE * 0.46, CORE * 0.06, cx, cy, CORE * 1.06);
      g.addColorStop(0, 'rgba(88,132,170,1)'); g.addColorStop(0.34, 'rgba(44,80,114,1)'); g.addColorStop(0.72, 'rgba(18,40,64,1)'); g.addColorStop(1, 'rgba(5,12,22,1)');
      ctx.beginPath(); ctx.arc(cx, cy, CORE, 0, 7); ctx.fillStyle = g; ctx.fill();
      ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, CORE - 1, 0, 7); ctx.clip();
      ctx.strokeStyle = 'rgba(126,166,200,0.12)'; ctx.lineWidth = 1;
      [-0.62, -0.24, 0.24, 0.62].forEach((k) => {
        ctx.beginPath();
        ctx.ellipse(cx, cy + k * CORE * 0.82, CORE * Math.sqrt(Math.max(0.02, 1 - k * k * 0.68)), CORE * 0.15, 0, 0, 7);
        ctx.stroke();
      });
      // meridianos girando: la esfera rota, los paralelos quedan fijos
      const spin = (now || 0) / 16000 * Math.PI * 2;
      for (let m = 0; m < 4; m++) {
        const ph = spin + m * Math.PI / 4;
        const c = Math.cos(ph);
        const rx = Math.abs(c) * (CORE - 1.5);
        if (rx < 1.2) continue;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, CORE - 1.5, 0, 0, 7);
        ctx.strokeStyle = 'rgba(126,166,200,' + (0.05 + 0.09 * Math.abs(c)).toFixed(3) + ')';
        ctx.stroke();
      }
      // terminador: el lado en sombra se apaga y hunde los paralelos
      const term = ctx.createRadialGradient(cx - CORE * 0.4, cy - CORE * 0.44, CORE * 0.2, cx + CORE * 0.34, cy + CORE * 0.4, CORE * 1.5);
      term.addColorStop(0, 'rgba(3,9,16,0)'); term.addColorStop(0.55, 'rgba(3,9,16,0.26)'); term.addColorStop(1, 'rgba(3,9,16,0.66)');
      ctx.fillStyle = term; ctx.fillRect(cx - CORE, cy - CORE, CORE * 2, CORE * 2);
      ctx.restore();
      // contorno y luz de borde con degradado direccional: sin cortes en los flancos
      const lit = ctx.createLinearGradient(cx - CORE, cy - CORE, cx + CORE, cy + CORE);
      lit.addColorStop(0, 'rgba(226,238,250,0.42)'); lit.addColorStop(0.42, 'rgba(150,190,224,0.14)'); lit.addColorStop(1, 'rgba(126,166,200,0.06)');
      ctx.beginPath(); ctx.arc(cx, cy, CORE - 0.6, 0, 7);
      ctx.lineWidth = 1.4; ctx.strokeStyle = lit; ctx.stroke();
      const limb = ctx.createLinearGradient(cx - CORE * 0.6, cy - CORE * 0.6, cx + CORE, cy + CORE);
      limb.addColorStop(0, 'rgba(150,190,224,0)'); limb.addColorStop(0.5, 'rgba(150,190,224,0.1)'); limb.addColorStop(1, 'rgba(168,204,234,0.5)');
      ctx.beginPath(); ctx.arc(cx, cy, CORE - 1.1, 0, 7);
      ctx.lineWidth = 2; ctx.strokeStyle = limb; ctx.stroke();
      if (self._orbitLogo) {
        const li = self._orbitLogo;
        const lw = CORE * 1.05, lh = lw * (li.height / li.width);
        ctx.globalAlpha = 0.96;
        ctx.drawImage(li, cx - lw / 2, cy - lh / 2, lw, lh);
        ctx.globalAlpha = 1;
      }
      // el monograma recibe la misma luz: se apaga hacia el lado en sombra
      const lsh = ctx.createRadialGradient(cx - CORE * 0.4, cy - CORE * 0.44, CORE * 0.28, cx + CORE * 0.3, cy + CORE * 0.36, CORE * 1.35);
      lsh.addColorStop(0, 'rgba(4,10,18,0)'); lsh.addColorStop(1, 'rgba(4,10,18,0.4)');
      ctx.save();
      ctx.beginPath(); ctx.arc(cx, cy, CORE, 0, 7); ctx.clip();
      ctx.fillStyle = lsh; ctx.fillRect(cx - CORE, cy - CORE, CORE * 2, CORE * 2);
      ctx.restore();
    };

    // ramal: del borde de la esfera al borde del núcleo, arqueado según el plano orbital
    const legGeom = (p) => {
      const o = p.ring === 'd' ? ORB.d : ORB.f;
      const ux = p.x - cx, uy = p.y - cy, len = Math.hypot(ux, uy) || 1;
      const ex = cx + (ux / len) * (CORE + 0.5), ey = cy + (uy / len) * (CORE + 0.5);
      // arranca en la superficie de la esfera, no en su radio de clic
      const sc = 0.74 + 0.26 * (p.z + 1) / 2;
      const dr = (p.ring === 'f' ? 5.6 : 4.9) * sc + 1.2;
      const nx = p.x - (ux / len) * dr, ny = p.y - (uy / len) * dr;
      let bx = 0, by = 0;
      if (typeof p.a === 'number') {
        const t2 = project(o, p.a + 0.06);
        const tx = t2.x - p.x, ty = t2.y - p.y, tl = Math.hypot(tx, ty) || 1;
        const bow = len * 0.13;
        bx = (tx / tl) * bow; by = (ty / tl) * bow;
      }
      return { nx, ny, ex, ey, qx: (nx + ex) / 2 + bx, qy: (ny + ey) / 2 + by };
    };
    const qpt = (g, k) => {
      const m = 1 - k;
      return { x: m * m * g.nx + 2 * m * k * g.qx + k * k * g.ex, y: m * m * g.ny + 2 * m * k * g.qy + k * k * g.ey };
    };
    const drawLeg = (p2, frac, wantBack, fadeOut) => {
      if (!p2 || (p2.z < 0) !== wantBack) return;
      const g = legGeom(p2);
      const op = fadeOut ? 1 - frac : Math.min(1, frac * 2.2);
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = 'rgba(159,191,219,' + (0.3 * op).toFixed(3) + ')';
      ctx.beginPath(); ctx.moveTo(g.nx, g.ny); ctx.quadraticCurveTo(g.qx, g.qy, g.ex, g.ey); ctx.stroke();
      const d = qpt(g, fadeOut ? 1 - frac : frac);
      ctx.beginPath(); ctx.arc(d.x, d.y, 3.4, 0, 7);
      ctx.fillStyle = 'rgba(226,236,246,0.95)'; ctx.fill();
    };

    // hover de chip: el nodo real de ese activo emite un ramal hacia el núcleo
    const drawFocus = (now, wantBack) => {
      const f = self._assetFocus;
      if (!f) return;
      const p = frameNodes.find((n) => n.code === f.code);
      if (!p || (p.z < 0) !== wantBack) return;
      const g = legGeom(p);
      ctx.save();
      ctx.lineWidth = 1.3; ctx.strokeStyle = 'rgba(159,191,219,0.6)';
      ctx.setLineDash([5, 6]); ctx.lineDashOffset = -(now / 42) % 11;
      ctx.beginPath(); ctx.moveTo(g.nx, g.ny); ctx.quadraticCurveTo(g.qx, g.qy, g.ex, g.ey); ctx.stroke();
      ctx.setLineDash([]);
      const d = qpt(g, (now / 1500) % 1);
      ctx.beginPath(); ctx.arc(d.x, d.y, 3.4, 0, 7);
      ctx.fillStyle = 'rgba(226,236,246,0.95)'; ctx.fill();
      ctx.restore();
    };

    const draw = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      const frozen = self._orbitHover;
      if (!self._reduced && !frozen) {
        aF += dt * ORB.f.dir * (2 * Math.PI / ORB.f.per);
        aD += dt * ORB.d.dir * (2 * Math.PI / ORB.d.per);
      }
      ctx.clearRect(0, 0, S, SH);

      const fpos = fiat.map((c, i) => { const a = aF + i * (2 * Math.PI / fiat.length); return Object.assign(project(ORB.f, a), { code: c, ring: 'f', a: a }); });
      const dpos = digital.map((c, i) => { const a = aD + i * (2 * Math.PI / digital.length); return Object.assign(project(ORB.d, a), { code: c, ring: 'd', a: a }); });
      const all = fpos.concat(dpos);
      frameNodes = all;

      // ---- single coordinated route per cycle
      let inLeg = 0, outLeg = 0, corePulse = 0;
      if (!self._reduced && !self._assetFocus) {
        const cyc = Math.floor(now / CYCLE) % routes.length;
        const tt = now % CYCLE;
        activeCode = routes[cyc][0]; destCode = routes[cyc][1];
        if (tt < P.approach) { inLeg = 0; }
        else if (tt < P.inbound) { inLeg = ease((tt - P.approach) / (P.inbound - P.approach)); }
        else if (tt < P.l3) { inLeg = 1; }
        else if (tt < P.outbound) { outLeg = ease((tt - P.l3) / (P.outbound - P.l3)); }
        // latido sincronizado: recepción del activo y liberación hacia el destino
        const d1 = (tt - P.inbound) / 850, d2 = (tt - P.l3) / 850;
        if (d1 >= 0 && d1 < 1) corePulse = Math.max(corePulse, 1 - d1);
        if (d2 >= 0 && d2 < 1) corePulse = Math.max(corePulse, 1 - d2);
        corePulse *= corePulse;
      } else { activeCode = null; destCode = null; }

      const org = all.find((n) => n.code === activeCode);
      const dst = all.find((n) => n.code === destCode);

      // behind the core
      ctx.lineWidth = 1.3; ctx.strokeStyle = 'rgba(126,166,200,0.07)';
      ringArc(ORB.f, false); ringArc(ORB.d, false);
      if (inLeg > 0 && inLeg < 1) drawLeg(org, inLeg, true, false);
      if (outLeg > 0) drawLeg(dst, outLeg, true, true);
      drawFocus(now, true);
      all.filter((n) => n.z < 0).sort((a, b) => a.z - b.z).forEach(node);

      drawProcRings();
      drawCore(now, corePulse);

      // in front of the core
      ctx.lineWidth = 1.4; ctx.strokeStyle = 'rgba(126,166,200,0.17)';
      ringArc(ORB.f, true); ringArc(ORB.d, true);
      if (inLeg > 0 && inLeg < 1) drawLeg(org, inLeg, false, false);
      if (outLeg > 0) drawLeg(dst, outLeg, false, true);
      const front = all.filter((n) => n.z >= 0).sort((a, b) => a.z - b.z);
      front.forEach(node);
      drawFocus(now, false);

      self._orbitNodes = front.slice().reverse().concat(all.filter((n) => n.z < 0));
      if (!self._reduced) self._orbitRaf = requestAnimationFrame(draw);
    };
    this._drawOrbit = draw;
    const toCv = (e) => { const r = cv.getBoundingClientRect(); return { x: (e.clientX - r.left) * (S / r.width), y: (e.clientY - r.top) * (S / r.height) }; };
    this._orbitMove = (e) => {
      const pt = toCv(e);
      let hit = null;
      for (const p of (self._orbitNodes || [])) { if (Math.hypot(p.x - pt.x, p.y - pt.y) < ((p.r || 34) + 6)) { hit = p; break; } }
      cv.style.cursor = hit ? 'pointer' : 'default';
      const code = hit ? hit.code : null;
      if (code !== self._orbitHover) {
        self._orbitHover = code;
        const tip = document.getElementById('bb-orbit-tip');
        if (tip) {
          if (hit) {
            const cc = self.copy()[lang0()];
            const typ = digital.includes(hit.code) ? cc.orbitTypeDigital : cc.orbitTypeFiat;
            tip.innerHTML = '<div style="color:#E6E5E7">' + hit.code + ' — ' + cc.orbitNames[hit.code] + '</div><div style="font-size:9.5px;letter-spacing:1px;color:#9FBFDB;margin-top:3px">' + typ + '</div>';
            tip.style.display = 'block';
            const w = cv.clientWidth;
            let left = hit.x * (w / S); const top = hit.y * (cv.clientHeight / S);
            if (left < 66) left = 66; if (left > w - 66) left = w - 66;
            tip.style.left = left + 'px'; tip.style.top = (top - 18) + 'px';
          } else tip.style.display = 'none';
        }
        if (self._reduced) draw(performance.now());
      }
    };
    this._orbitLeave = () => { self._orbitHover = null; const tip = document.getElementById('bb-orbit-tip'); if (tip) tip.style.display = 'none'; if (self._reduced) draw(performance.now()); };
    cv.addEventListener('mousemove', this._orbitMove);
    cv.addEventListener('mouseleave', this._orbitLeave);
    // chips drive the core: hovering an asset pauses the cycle and shows only its route
    if (!this._chipsBound) {
      this._chipsBound = true;
      this._chipEnter = (ev) => {
        const el = ev.target.closest('[data-asset]');
        if (!el) return;
        if (self._chipLeaveT) { clearTimeout(self._chipLeaveT); self._chipLeaveT = null; }
        const code = el.dataset.asset, kind = el.dataset.kind || 'f';
        if (self._assetFocus && self._assetFocus.code === code) return;
        self._assetFocus = { code: code, kind: kind };
        if (self._reduced && self._drawOrbit) self._drawOrbit(performance.now());
      };
      this._chipLeave = (ev) => {
        const el = ev.target.closest('[data-asset]');
        if (!el) return;
        // sigue dentro de un activo (o de un hijo del mismo): lo resuelve el enter, no se apaga nada
        const to = ev.relatedTarget;
        if (to && to.closest && to.closest('[data-asset]')) return;
        if (self._chipLeaveT) clearTimeout(self._chipLeaveT);
        self._chipLeaveT = setTimeout(() => {
          self._chipLeaveT = null;
          self._assetFocus = null;
          if (self._reduced && self._drawOrbit) self._drawOrbit(performance.now());
        }, 120);
      };
      document.addEventListener('mouseover', this._chipEnter);
      document.addEventListener('mouseout', this._chipLeave);
    }
    this._orbitCv = cv;
    // fuera de pantalla no se dibuja
    if (this._orbitVis) this._orbitVis.disconnect();
    this._orbitVis = new IntersectionObserver((es) => {
      es.forEach((en) => {
        if (en.isIntersecting) {
          if (!self._orbitRaf && !self._reduced) { last = performance.now(); self._orbitRaf = requestAnimationFrame(draw); }
        } else if (self._orbitRaf) { cancelAnimationFrame(self._orbitRaf); self._orbitRaf = null; }
      });
    }, { threshold: 0.02 });
    this._orbitVis.observe(cv);
    if (self._reduced) draw(performance.now());
    else this._orbitRaf = requestAnimationFrame(draw);
  }

  _initFriction() {
    let cv = document.getElementById('bb-friction');
    if (!cv) return;
    if (this._frGaveUp) return;
    if (!window.THREE) {
      if (this._frWant) this._lib('https://cdn.jsdelivr.net/npm/three@0.137.0/build/three.min.js').then(() => {
        if (!window.THREE) { this._frGaveUp = true; return; } // CDN bloqueado/caído: no reintentar en bucle
        this._initFriction();
      });
      return;
    }
    // el terreno se versiona en data-topo: al cambiar de versión se descarta la escena vieja
    const TOPO = cv.dataset.topo || '1';
    if (cv.dataset.frInit === TOPO) return;
    if (cv.dataset.frInit) {
      if (this._frRaf) { cancelAnimationFrame(this._frRaf); this._frRaf = null; }
      this._frOn = false;
      if (this._frVis) { this._frVis.disconnect(); this._frVis = null; }
      if (this._frRenderer) { try { this._frRenderer.dispose(); } catch (e) {} this._frRenderer = null; }
      // el contexto WebGL es irrepetible en el mismo lienzo: se estrena un nodo limpio
      const fresh = cv.cloneNode(false);
      delete fresh.dataset.frInit;
      if (cv.parentNode) cv.parentNode.replaceChild(fresh, cv);
      cv = fresh;
      this._frTex = null; this._hbuf = null; this._hypBuf = null;
    }
    const THREE = window.THREE;
    if (!THREE) { clearTimeout(this._frWait); this._frWait = setTimeout(() => this._initFriction(), 200); return; }
    cv.dataset.frInit = TOPO;
    const self = this;
    const lang0 = () => self.state.lang ?? (self.props.defaultLang ?? 'es');
    const isMobile = window.matchMedia('(max-width:900px)').matches;
    const clamp01 = (x) => x < 0 ? 0 : x > 1 ? 1 : x;
    const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };

    // ---- campo de alturas: cordillera dominante, cadenas secundarias, valles y escarpe sur
    const ridge = (pts, h0, h1, w, n) => {
      const out = [];
      for (let i = 0; i < n; i++) {
        const tt = n > 1 ? i / (n - 1) : 0;
        const seg = tt * (pts.length - 1), k = Math.min(pts.length - 2, seg | 0), f = seg - k;
        const x = pts[k][0] + (pts[k + 1][0] - pts[k][0]) * f;
        const y = pts[k][1] + (pts[k + 1][1] - pts[k][1]) * f;
        const hh = h0 + (h1 - h0) * Math.sin(Math.PI * tt) + Math.sin(i * 1.7) * (h1 - h0) * 0.09;
        out.push({ x: x + Math.sin(i * 2.3) * 0.005, y: y + Math.cos(i * 1.9) * 0.007, h: hh, wx: w, wy: w * 1.5 });
      }
      return out;
    };
    const forms = [
      // borde oeste: el relieve llega hasta el filo del cuadro
      { x: 0.004, y: 0.26, h: 0.78, wx: 0.0024, wy: 0.0036 },
      { x: 0.012, y: 0.38, h: 0.62, wx: 0.0020, wy: 0.0030 },
      { x: 0.006, y: 0.60, h: 0.70, wx: 0.0022, wy: 0.0034 },
      { x: 0.018, y: 0.72, h: 0.84, wx: 0.0025, wy: 0.0038 },
      { x: 0.010, y: 0.84, h: 0.52, wx: 0.0018, wy: 0.0026 },
      { x: 0.022, y: 0.50, h: 0.46, wx: 0.0016, wy: 0.0026 },
      // continuación oeste: cadena de cumbres menores (misma escala que el macizo) descendiendo al piedemonte
      { x: -0.014, y: 0.20, h: 0.50, wx: 0.0016, wy: 0.0025 },
      { x: -0.016, y: 0.34, h: 0.56, wx: 0.0018, wy: 0.0027 },
      { x: -0.020, y: 0.47, h: 0.48, wx: 0.0016, wy: 0.0025 },
      { x: -0.018, y: 0.60, h: 0.54, wx: 0.0017, wy: 0.0026 },
      { x: -0.022, y: 0.74, h: 0.50, wx: 0.0016, wy: 0.0025 },
      { x: -0.026, y: 0.87, h: 0.38, wx: 0.0014, wy: 0.0021 },
      { x: -0.040, y: 0.14, h: 0.42, wx: 0.0015, wy: 0.0023 },
      { x: -0.044, y: 0.27, h: 0.52, wx: 0.0017, wy: 0.0026 },
      { x: -0.048, y: 0.41, h: 0.44, wx: 0.0015, wy: 0.0024 },
      { x: -0.042, y: 0.54, h: 0.50, wx: 0.0016, wy: 0.0025 },
      { x: -0.050, y: 0.68, h: 0.46, wx: 0.0016, wy: 0.0024 },
      { x: -0.046, y: 0.81, h: 0.40, wx: 0.0014, wy: 0.0022 },
      { x: -0.070, y: 0.21, h: 0.44, wx: 0.0015, wy: 0.0024 },
      { x: -0.074, y: 0.35, h: 0.48, wx: 0.0016, wy: 0.0025 },
      { x: -0.068, y: 0.49, h: 0.40, wx: 0.0014, wy: 0.0022 },
      { x: -0.076, y: 0.63, h: 0.44, wx: 0.0015, wy: 0.0024 },
      { x: -0.072, y: 0.77, h: 0.38, wx: 0.0014, wy: 0.0022 },
      { x: -0.098, y: 0.16, h: 0.36, wx: 0.0013, wy: 0.0021 },
      { x: -0.102, y: 0.30, h: 0.42, wx: 0.0015, wy: 0.0023 },
      { x: -0.096, y: 0.44, h: 0.34, wx: 0.0013, wy: 0.0020 },
      { x: -0.104, y: 0.58, h: 0.40, wx: 0.0014, wy: 0.0022 },
      { x: -0.100, y: 0.72, h: 0.34, wx: 0.0013, wy: 0.0020 },
      { x: -0.126, y: 0.24, h: 0.32, wx: 0.0013, wy: 0.0020 },
      { x: -0.130, y: 0.38, h: 0.36, wx: 0.0014, wy: 0.0021 },
      { x: -0.124, y: 0.52, h: 0.30, wx: 0.0012, wy: 0.0019 },
      { x: -0.132, y: 0.66, h: 0.32, wx: 0.0013, wy: 0.0020 },
      { x: -0.152, y: 0.32, h: 0.26, wx: 0.0012, wy: 0.0019 },
      { x: -0.156, y: 0.58, h: 0.24, wx: 0.0011, wy: 0.0018 },
      // collados del piedemonte: cortan la cadena en cuencas, no una rampa lisa
      { x: -0.030, y: 0.27, h: -0.16, wx: 0.0022, wy: 0.0016 },
      { x: -0.034, y: 0.67, h: -0.15, wx: 0.0022, wy: 0.0016 },
      { x: -0.058, y: 0.48, h: -0.14, wx: 0.0020, wy: 0.0015 },
      { x: -0.086, y: 0.28, h: -0.13, wx: 0.0020, wy: 0.0015 },
      { x: -0.088, y: 0.70, h: -0.12, wx: 0.0019, wy: 0.0015 },
      { x: -0.114, y: 0.46, h: -0.11, wx: 0.0018, wy: 0.0014 },
      // cadena dominante: cumbres menores y más numerosas
      { x: 0.035, y: 0.20, h: 0.72, wx: 0.0022, wy: 0.0034 },
      { x: 0.055, y: 0.27, h: 0.68, wx: 0.0026, wy: 0.0040 },
      { x: 0.045, y: 0.36, h: 0.56, wx: 0.0020, wy: 0.0030 },
      { x: 0.075, y: 0.32, h: 0.78, wx: 0.0030, wy: 0.0044 },
      { x: 0.095, y: 0.24, h: 0.58, wx: 0.0018, wy: 0.0028 },
      { x: 0.105, y: 0.39, h: 0.88, wx: 0.0024, wy: 0.0036 },
      { x: 0.135, y: 0.33, h: 0.70, wx: 0.0021, wy: 0.0032 },
      { x: 0.145, y: 0.44, h: 1.05, wx: 0.0027, wy: 0.0040 },
      { x: 0.125, y: 0.22, h: 0.52, wx: 0.0017, wy: 0.0026 },
      { x: 0.175, y: 0.37, h: 0.78, wx: 0.0022, wy: 0.0034 },
      { x: 0.19, y: 0.47, h: 1.22, wx: 0.0030, wy: 0.0044 },
      { x: 0.205, y: 0.28, h: 0.84, wx: 0.0023, wy: 0.0035 },
      { x: 0.225, y: 0.41, h: 0.62, wx: 0.0019, wy: 0.0029 },
      { x: 0.245, y: 0.33, h: 0.92, wx: 0.0025, wy: 0.0038 },
      { x: 0.235, y: 0.20, h: 0.46, wx: 0.0016, wy: 0.0024 },
      { x: 0.275, y: 0.26, h: 1.00, wx: 0.0026, wy: 0.0040 },
      { x: 0.285, y: 0.40, h: 0.68, wx: 0.0020, wy: 0.0031 },
      { x: 0.315, y: 0.31, h: 0.74, wx: 0.0022, wy: 0.0033 },
      { x: 0.345, y: 0.38, h: 0.80, wx: 0.0023, wy: 0.0035 },
      { x: 0.335, y: 0.24, h: 0.44, wx: 0.0015, wy: 0.0023 },
      { x: 0.375, y: 0.44, h: 0.66, wx: 0.0020, wy: 0.0031 },
      { x: 0.395, y: 0.35, h: 0.50, wx: 0.0017, wy: 0.0026 },
      // franja norte: cierra el hueco del encuadre superior con la misma familia de cumbres
      { x: 0.025, y: 0.115, h: 0.62, wx: 0.0022, wy: 0.0034 },
      { x: 0.075, y: 0.145, h: 0.84, wx: 0.0026, wy: 0.0040 },
      { x: 0.055, y: 0.075, h: 0.5, wx: 0.0018, wy: 0.0028 },
      { x: 0.125, y: 0.10, h: 0.72, wx: 0.0023, wy: 0.0035 },
      { x: 0.165, y: 0.155, h: 0.58, wx: 0.0019, wy: 0.0029 },
      { x: 0.205, y: 0.09, h: 0.66, wx: 0.0021, wy: 0.0032 },
      { x: 0.255, y: 0.135, h: 0.52, wx: 0.0018, wy: 0.0027 },
      { x: 0.305, y: 0.08, h: 0.46, wx: 0.0016, wy: 0.0025 },
      { x: 0.145, y: 0.05, h: 0.44, wx: 0.0016, wy: 0.0024 },
      // vaguada entre la franja norte y la cadena dominante
      { x: 0.12, y: 0.21, h: -0.18, wx: 0.0026, wy: 0.0016 },
      { x: 0.24, y: 0.195, h: -0.16, wx: 0.0024, wy: 0.0015 },
      // cadena secundaria sur
      { x: 0.055, y: 0.66, h: 0.80, wx: 0.0023, wy: 0.0035 },
      { x: 0.085, y: 0.71, h: 1.02, wx: 0.0027, wy: 0.0040 },
      { x: 0.065, y: 0.80, h: 0.62, wx: 0.0019, wy: 0.0029 },
      { x: 0.115, y: 0.65, h: 0.58, wx: 0.0018, wy: 0.0028 },
      { x: 0.135, y: 0.76, h: 0.86, wx: 0.0024, wy: 0.0036 },
      { x: 0.175, y: 0.69, h: 0.70, wx: 0.0021, wy: 0.0032 },
      { x: 0.195, y: 0.81, h: 0.94, wx: 0.0025, wy: 0.0038 },
      { x: 0.225, y: 0.72, h: 0.60, wx: 0.0019, wy: 0.0029 },
      { x: 0.255, y: 0.66, h: 0.82, wx: 0.0023, wy: 0.0035 },
      { x: 0.265, y: 0.79, h: 0.54, wx: 0.0018, wy: 0.0027 },
      { x: 0.305, y: 0.62, h: 0.96, wx: 0.0026, wy: 0.0039 },
      { x: 0.325, y: 0.76, h: 0.58, wx: 0.0019, wy: 0.0028 },
      { x: 0.355, y: 0.68, h: 0.64, wx: 0.0020, wy: 0.0030 },
      { x: 0.385, y: 0.59, h: 0.70, wx: 0.0021, wy: 0.0032 },
      { x: 0.395, y: 0.73, h: 0.48, wx: 0.0016, wy: 0.0025 },
      { x: 0.425, y: 0.50, h: 0.52, wx: 0.0018, wy: 0.0027 },
      { x: 0.435, y: 0.63, h: 0.40, wx: 0.0015, wy: 0.0023 },
      // escarpe sur: frente bajo pero definido
      { x: 0.095, y: 0.875, h: 0.50, wx: 0.0016, wy: 0.0020 },
      { x: 0.165, y: 0.885, h: 0.44, wx: 0.0015, wy: 0.0019 },
      { x: 0.235, y: 0.878, h: 0.48, wx: 0.0016, wy: 0.0020 },
      { x: 0.305, y: 0.868, h: 0.38, wx: 0.0014, wy: 0.0018 },
      // contrafuertes que cruzan el valle central: evitan un pasillo plano continuo
      { x: 0.085, y: 0.55, h: 0.46, wx: 0.0016, wy: 0.0030 },
      { x: 0.165, y: 0.565, h: 0.58, wx: 0.0018, wy: 0.0034 },
      { x: 0.265, y: 0.575, h: 0.50, wx: 0.0017, wy: 0.0032 },
      { x: 0.355, y: 0.555, h: 0.42, wx: 0.0015, wy: 0.0028 },
      // valles y collados
      { x: 0.125, y: 0.545, h: -0.26, wx: 0.0026, wy: 0.0022 },
      { x: 0.215, y: 0.575, h: -0.24, wx: 0.0024, wy: 0.0022 },
      { x: 0.315, y: 0.55, h: -0.20, wx: 0.0022, wy: 0.0020 },
      { x: 0.16, y: 0.325, h: -0.20, wx: 0.0028, wy: 0.0018 },
      // collado bajo el pico noroeste: la carretera pasa delimitada, no coronando la cumbre
      { x: 0.082, y: 0.33, h: -0.22, wx: 0.0022, wy: 0.0016 },
      { x: 0.29, y: 0.735, h: -0.20, wx: 0.0028, wy: 0.0020 },
      { x: 0.15, y: 0.75, h: -0.18, wx: 0.0028, wy: 0.0018 },
      // continuación oriental del macizo: el relieve sigue al norte del corredor en vez de cortarse en seco
      { x: 0.435, y: 0.26, h: 0.62, wx: 0.0022, wy: 0.0033 },
      { x: 0.455, y: 0.33, h: 0.44, wx: 0.0018, wy: 0.0026 },
      { x: 0.465, y: 0.19, h: 0.72, wx: 0.0025, wy: 0.0037 },
      { x: 0.495, y: 0.26, h: 0.62, wx: 0.0022, wy: 0.0033 },
      { x: 0.515, y: 0.16, h: 0.56, wx: 0.0020, wy: 0.0029 },
      { x: 0.535, y: 0.30, h: 0.46, wx: 0.0018, wy: 0.0027 },
      { x: 0.555, y: 0.22, h: 0.58, wx: 0.0020, wy: 0.0030 },
      { x: 0.585, y: 0.28, h: 0.38, wx: 0.0015, wy: 0.0024 },
      { x: 0.605, y: 0.19, h: 0.34, wx: 0.0014, wy: 0.0022 },
      { x: 0.625, y: 0.26, h: 0.28, wx: 0.0012, wy: 0.0020 },
      // cumbres subordinadas: rompen la línea de hombro continua
      { x: 0.478, y: 0.225, h: 0.34, wx: 0.0012, wy: 0.0019 },
      { x: 0.522, y: 0.235, h: 0.30, wx: 0.0011, wy: 0.0018 },
      { x: 0.568, y: 0.175, h: 0.26, wx: 0.0010, wy: 0.0017 },
      // franja norte: la misma familia de cumbres cierra el encuadre superior hasta el este
      { x: 0.355, y: 0.10, h: 0.52, wx: 0.0018, wy: 0.0027 },
      { x: 0.405, y: 0.14, h: 0.60, wx: 0.0020, wy: 0.0030 },
      { x: 0.455, y: 0.08, h: 0.46, wx: 0.0016, wy: 0.0025 },
      { x: 0.505, y: 0.12, h: 0.54, wx: 0.0018, wy: 0.0028 },
      { x: 0.555, y: 0.07, h: 0.38, wx: 0.0014, wy: 0.0022 },
      { x: 0.585, y: 0.13, h: 0.34, wx: 0.0013, wy: 0.0021 },
      // vaguadas de la continuación: evitan una loma uniforme
      { x: 0.475, y: 0.255, h: -0.18, wx: 0.0024, wy: 0.0016 },
      { x: 0.505, y: 0.205, h: -0.13, wx: 0.0020, wy: 0.0014 },
      { x: 0.565, y: 0.27, h: -0.14, wx: 0.0022, wy: 0.0015 },
    ];
    // ruido fractal (FBM): grano irregular natural en vez de ondas sinusoidales regulares
    const h2 = (x, y) => { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); };
    const vnoise = (x, y) => {
      const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
      const sx = xf * xf * (3 - 2 * xf), sy = yf * yf * (3 - 2 * yf);
      const a = h2(xi, yi), b = h2(xi + 1, yi), c = h2(xi, yi + 1), d = h2(xi + 1, yi + 1);
      return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
    };
    const fbm = (x, y) => {
      let s = 0, a = 0.5, f = 1;
      for (let o = 0; o < 4; o++) { s += (vnoise(x * f + o * 7.3, y * f - o * 3.1) - 0.5) * a; a *= 0.52; f *= 2.07; }
      return s;
    };
    const rawField = (u, v) => {
      let h = 0;
      for (let i = 0; i < forms.length; i++) { const f = forms[i], dx = u - f.x, dy = v - f.y, q = dx * dx / (f.wx * 1.1) + dy * dy / (f.wy * 0.8); if (q < 8) h += f.h * Math.exp(-q); }
      h += fbm(u * 13, v * 8.5) * 0.15;
      // asimetría vertical: cumbres convexas y redondeadas, valles cóncavos y abiertos
      return h > 0 ? Math.pow(h, 0.7) * 0.85 : -Math.pow(-h, 1.28) * 0.72;
    };
    // calibración: el campo se normaliza para conservar la escala del relieve original
    let GAIN = 1;
    (() => {
      let mx = 0;
      for (let i = 0; i <= 72; i++) for (let j = 0; j <= 48; j++) {
        const a = Math.abs(rawField(-0.20 + i / 72 * 0.86, j / 48));
        if (a > mx) mx = a;
      }
      GAIN = mx > 3.4 ? 3.4 / mx : 1;
    })();
    // horneado del campo: se muestrea una vez en rejilla, se suaviza (más a lo largo de las
    // cadenas), se erosiona por pendiente máxima y se lee con interpolación bilineal
    const BNX = 336, BNY = 132, BU0 = -0.22, BU = 0.68;
    let BG = new Float32Array(BNX * BNY);
    for (let j = 0; j < BNY; j++) for (let i = 0; i < BNX; i++) BG[j * BNX + i] = rawField(BU0 + (BU - BU0) * (i / (BNX - 1)), j / (BNY - 1)) * GAIN;
    const blurPass = (horiz) => {
      const src = BG.slice();
      for (let j = 0; j < BNY; j++) for (let i = 0; i < BNX; i++) {
        const k = j * BNX + i;
        const m = horiz ? (i > 0 ? src[k - 1] : src[k]) : (j > 0 ? src[k - BNX] : src[k]);
        const pfin = horiz ? (i < BNX - 1 ? src[k + 1] : src[k]) : (j < BNY - 1 ? src[k + BNX] : src[k]);
        BG[k] = (m + 2 * src[k] + pfin) * 0.25;
      }
    };
    // anisotropía: doble pasada horizontal enlaza las cumbres en lomos continuos
    blurPass(true); blurPass(true); blurPass(false);
    // erosión térmica: ninguna ladera supera el ángulo de reposo
    const MAXD = 0.048;
    for (let pass = 0; pass < 4; pass++) {
      for (let j = 0; j < BNY; j++) for (let i = 0; i < BNX - 1; i++) {
        const a = j * BNX + i, b = a + 1, d = BG[a] - BG[b];
        if (d > MAXD) { const ex = (d - MAXD) * 0.5; BG[a] -= ex; BG[b] += ex; }
        else if (-d > MAXD) { const ex = (-d - MAXD) * 0.5; BG[b] -= ex; BG[a] += ex; }
      }
      for (let j = 0; j < BNY - 1; j++) for (let i = 0; i < BNX; i++) {
        const a = j * BNX + i, b = a + BNX, d = BG[a] - BG[b];
        if (d > MAXD * 1.5) { const ex = (d - MAXD * 1.5) * 0.5; BG[a] -= ex; BG[b] += ex; }
        else if (-d > MAXD * 1.5) { const ex = (-d - MAXD * 1.5) * 0.5; BG[b] -= ex; BG[a] += ex; }
      }
    }
    // erosión hidráulica: gotas que bajan por máxima pendiente tallando cárcavas dendríticas
    const FLOW = new Float32Array(BNX * BNY);
    (() => {
      let seed = 7;
      const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
      for (let dcount = 0; dcount < 4200; dcount++) {
        let ci = 8 + Math.floor(rnd() * (BNX - 16)), cj = 6 + Math.floor(rnd() * (BNY - 12));
        let sed = 0;
        for (let step = 0; step < 46; step++) {
          const k = cj * BNX + ci;
          let bi = -1, bj = -1, bh = BG[k];
          for (let oj = -1; oj <= 1; oj++) for (let oi = -1; oi <= 1; oi++) {
            if (!oi && !oj) continue;
            const ni2 = ci + oi, nj2 = cj + oj;
            if (ni2 < 1 || ni2 >= BNX - 1 || nj2 < 1 || nj2 >= BNY - 1) continue;
            const hn = BG[nj2 * BNX + ni2];
            if (hn < bh) { bh = hn; bi = ni2; bj = nj2; }
          }
          if (bi < 0) { BG[k] += sed * 0.5; break; }
          const er = Math.min(0.006, (BG[k] - bh) * 0.28);
          BG[k] -= er; sed += er;
          if (sed > 0.02) { BG[bj * BNX + bi] += sed * 0.3; sed *= 0.7; }
          FLOW[bj * BNX + bi] += 1;
          ci = bi; cj = bj;
        }
      }
    })();
    const bSample = (u, v) => {
      const gx = Math.max(0, Math.min(BNX - 1.001, (u - BU0) / (BU - BU0) * (BNX - 1)));
      const gy = Math.max(0, Math.min(BNY - 1.001, v * (BNY - 1)));
      const x0 = gx | 0, y0 = gy | 0, fx = gx - x0, fy = gy - y0;
      const k = y0 * BNX + x0;
      return BG[k] * (1 - fx) * (1 - fy) + BG[k + 1] * fx * (1 - fy) + BG[k + BNX] * (1 - fx) * fy + BG[k + BNX + 1] * fx * fy;
    };
    const disp = (u, v) => {
      // el corredor central conserva la llanura original (carreteras, plataforma y puente intactos);
      // en los flancos el macizo continúa hacia el este y rellena el hueco del encuadre
      // sólo el flanco norte (fondo) continúa hacia el este: el corredor y el primer plano
      // conservan la llanura original, así el puente y la plataforma quedan intactos
      const north = smooth(0.44, 0.28, v);
      // el relieve rebasa el filo oeste y desciende como piedemonte, sin corte
      const ampW = smooth(0.48, -0.02, u) * smooth(-0.195, -0.02, u);
      const east = smooth(0.32, 0.46, u) * smooth(0.645, 0.52, u) * 0.6;
      const amp = ampW + east * north;
      if (amp < 0.001) return 0;
      const venv = smooth(-0.02, 0.05, v) * smooth(0.965, 0.925, v);
      return bSample(u, v) * amp * venv;
    };
    // los caminos buscan el fondo de valle / collado más próximo a su latitud original
    // búsqueda de collado reforzada: ventana más ancha y menor castigo por desviarse
    const snapValley = (pts) => pts.map((p, i) => {
      if (i >= pts.length - 1 || p[0] > 0.43) return [p[0], p[1]];
      let best = p[1], bv = 1e9;
      for (let k = -22; k <= 22; k++) {
        const vv = p[1] + k * 0.007;
        if (vv < 0.14 || vv > 0.88) continue;
        const cost = disp(p[0], vv) + Math.abs(k) * 0.0022;
        if (cost < bv) { bv = cost; best = vv; }
      }
      return [p[0], best];
    });
    const ROADS = [
      [[0.015, 0.30], [0.06, 0.36], [0.11, 0.29], [0.17, 0.39], [0.24, 0.33], [0.31, 0.42], [0.38, 0.47], [0.44, 0.5]],
      [[0.015, 0.52], [0.07, 0.47], [0.13, 0.56], [0.20, 0.48], [0.27, 0.57], [0.34, 0.50], [0.40, 0.51], [0.44, 0.5]],
      [[0.015, 0.74], [0.07, 0.68], [0.14, 0.75], [0.21, 0.66], [0.28, 0.71], [0.35, 0.61], [0.41, 0.54], [0.44, 0.5]]
    ].map(snapValley);
    // obstáculo y desvío: cada ruta encuentra un paso bloqueado y lo rodea (mismo trazado en 2D y 3D)
    const smoothL = (pts, per) => {
      const out = [pts[0].slice()]; let cur = pts[0];
      const qp = (a, b, c, s) => { const m = 1 - s; return [m * m * a[0] + 2 * m * s * b[0] + s * s * c[0], m * m * a[1] + 2 * m * s * b[1] + s * s * c[1]]; };
      for (let i = 1; i < pts.length - 1; i++) {
        const c = pts[i], n = pts[i + 1], end = [(c[0] + n[0]) / 2, (c[1] + n[1]) / 2];
        for (let s = 1; s <= per; s++) out.push(qp(cur, c, end, s / per));
        cur = end;
      }
      const L = pts[pts.length - 1];
      for (let s = 1; s <= per; s++) out.push([cur[0] + (L[0] - cur[0]) * s / per, cur[1] + (L[1] - cur[1]) * s / per]);
      return out;
    };
    const DETOURS = [];
    for (let ri = 0; ri < ROADS.length; ri++) {
      const pl = smoothL(ROADS[ri], 10);
      let bi = -1, bh = 0.28;
      for (let i = 4; i < pl.length - 4; i++) {
        if (pl[i][0] > 0.38 || pl[i][0] < 0.06) continue;
        const hh = disp(pl[i][0], pl[i][1]);
        if (hh > bh) { bh = hh; bi = i; }
      }
      if (bi < 0) { DETOURS.push(null); continue; }
      const i0 = Math.max(2, bi - 9), i1 = Math.min(pl.length - 3, bi + 9);
      const A = pl[i0], B = pl[i1], P = pl[bi];
      const dx = B[0] - A[0], dy = B[1] - A[1], nl = Math.hypot(dx, dy) || 1;
      let nx = -dy / nl, ny = dx / nl;
      const probe = 0.035;
      if (disp(P[0] + nx * probe, P[1] + ny * probe) > disp(P[0] - nx * probe, P[1] - ny * probe)) { nx = -nx; ny = -ny; }
      // el ramal busca el arco de menor cota, no un desplazamiento fijo
      let bow = 0.042, bcost = 1e9;
      for (let bw = 0.028; bw <= 0.075; bw += 0.008) {
        const mx = (A[0] + B[0]) / 2 + nx * bw, my = (A[1] + B[1]) / 2 + ny * bw;
        const c = disp(mx, my) + disp((A[0] + mx) / 2, (A[1] + my) / 2) + disp((B[0] + mx) / 2, (B[1] + my) / 2);
        if (c < bcost) { bcost = c; bow = bw; }
      }
      const mid = [(A[0] + B[0]) / 2 + nx * bow, (A[1] + B[1]) / 2 + ny * bow];
      const ang = Math.atan2(pl[bi + 3][1] - pl[bi - 3][1], pl[bi + 3][0] - pl[bi - 3][0]);
      DETOURS.push({ A: A, B: B, mid: mid, P: P, ang: ang, blocked: pl.slice(i0, i1 + 1) });
      // el trazado real (2D y 3D) pasa por el ramal, no por el paso bloqueado
      const head = [], tail = [];
      for (let k = 0; k < ROADS[ri].length; k++) {
        const t = k / (ROADS[ri].length - 1);
        if (ROADS[ri][k][0] < A[0]) head.push(ROADS[ri][k]);
        else if (ROADS[ri][k][0] > B[0]) tail.push(ROADS[ri][k]);
      }
      ROADS[ri] = head.concat([A, mid, B], tail);
    }
    // coherencia con la topografía: cada ruta se relaja en transversal al avance buscando
    // la línea de menor pendiente longitudinal — contornea la ladera, cruza por collado
    const relaxRoad = (pts) => {
      let pl = smoothL(pts, 8);
      const GMAX = 1.0;
      const gradeAt = (p, tx2, ty2) => {
        const d = 0.013;
        const ha = disp(p[0] + tx2 * d, p[1] + ty2 * d);
        const hb = disp(p[0] - tx2 * d, p[1] - ty2 * d);
        return (ha - hb) / (2 * d);
      };
      for (let it = 0; it < 40; it++) {
        const nx2 = pl.map((p) => p.slice());
        for (let i = 2; i < pl.length - 2; i++) {
          const p = pl[i];
          if (p[0] > 0.42 || p[0] < 0.02 || p[1] < 0.06 || p[1] > 0.9) continue;
          const a = pl[i - 1], b = pl[i + 1];
          let tx2 = b[0] - a[0], ty2 = b[1] - a[1];
          const tl = Math.hypot(tx2, ty2) || 1e-6; tx2 /= tl; ty2 /= tl;
          const nx3 = -ty2, ny3 = tx2;
          // 1 · rampa: si el tramo sube demasiado, desliza en transversal hacia donde la rampa cede
          const e = 0.011;
          const g0 = Math.abs(gradeAt(p, tx2, ty2));
          let dx = 0, dy = 0;
          if (g0 > GMAX) {
            const gp = Math.abs(gradeAt([p[0] + nx3 * e, p[1] + ny3 * e], tx2, ty2));
            const gm = Math.abs(gradeAt([p[0] - nx3 * e, p[1] - ny3 * e], tx2, ty2));
            const sgn = gp < gm ? 1 : -1;
            const step = Math.min(0.0038, (g0 - GMAX) * 0.0032);
            dx += nx3 * sgn * step; dy += ny3 * sgn * step;
          }
          // 2 · cota: preferencia suave por el fondo del valle, siempre en transversal
          const eg = 0.006;
          const gx = disp(p[0] + eg, p[1]) - disp(p[0] - eg, p[1]);
          const gy = disp(p[0], p[1] + eg) - disp(p[0], p[1] - eg);
          let ex = -gx * 0.03, ey = -gy * 0.03;
          const dot = ex * tx2 + ey * ty2;
          ex -= dot * tx2; ey -= dot * ty2;
          dx += Math.max(-0.0025, Math.min(0.0025, ex));
          dy += Math.max(-0.0025, Math.min(0.0025, ey));
          nx2[i][0] = p[0] + dx + ((a[0] + b[0]) / 2 - p[0]) * 0.16;
          nx2[i][1] = p[1] + dy + ((a[1] + b[1]) / 2 - p[1]) * 0.16;
        }
        pl = nx2;
      }
      return pl;
    };
    for (let ri = 0; ri < ROADS.length; ri++) ROADS[ri] = relaxRoad(ROADS[ri]);

    // ---- texture: contour lines (left) + sparse clean lines (right) + hub + route, baked onto the relief
    const TW = isMobile ? 1200 : 1792, TH = Math.round(TW * (isMobile ? 0.64 : 0.55));
    const tcv = document.createElement('canvas'); tcv.width = TW; tcv.height = TH;
    const tx = tcv.getContext('2d');
    const HUBX = 0.5, HUBY = 0.52;
    let logoImg = null;

    const buildTexture = () => {
      tx.clearRect(0, 0, TW, TH);
      tx.fillStyle = '#e6e5e7'; tx.fillRect(0, 0, TW, TH);
      // atmospheric depth: faint cool wash over the friction territory (left)
      const atm = tx.createLinearGradient(0, 0, TW * 0.5, 0);
      atm.addColorStop(0, 'rgba(66,88,120,0.06)'); atm.addColorStop(1, 'rgba(66,88,120,0)');
      tx.fillStyle = atm; tx.fillRect(0, 0, TW * 0.5, TH);
      // soft contact shadow grounding the massif (light from top-left -> shadow to lower-right)
      const csh = tx.createRadialGradient(TW * 0.24, TH * 0.66, 12, TW * 0.24, TH * 0.66, TW * 0.28);
      csh.addColorStop(0, 'rgba(28,38,56,0.11)'); csh.addColorStop(1, 'rgba(28,38,56,0)');
      tx.save(); tx.fillStyle = csh; tx.beginPath(); tx.ellipse(TW * 0.25, TH * 0.68, TW * 0.27, TH * 0.32, 0, 0, 7); tx.fill(); tx.restore();
      // sculpted-relief hillshade (light on ridges, soft AO in valleys) — baked small & upscaled for softness
      const HXn = isMobile ? 150 : 264, HYn = Math.round(HXn * TH / TW);
      if (!self._hbuf) self._hbuf = document.createElement('canvas');
      const hbuf = self._hbuf; hbuf.width = HXn; hbuf.height = HYn;
      const hbx = hbuf.getContext('2d');
      const hImg = hbx.createImageData(HXn, HYn);
      const ex = 1.2 / HXn, ey = 1.2 / HYn;
      for (let y = 0; y < HYn; y++) for (let x = 0; x < HXn; x++) {
        const u = x / (HXn - 1), v = y / (HYn - 1);
        const hh = disp(u, v);
        const sx = disp(u + ex, v) - disp(u - ex, v);
        const sy = disp(u, v + ey) - disp(u, v - ey);
        const idx = (y * HXn + x) * 4;
        // sombreado continuo: normal contra la luz (arriba-izquierda), sin decisión binaria
        let nnx = -sx * 30, nny = -sy * 30, nnz = 1;
        const nnl = Math.hypot(nnx, nny, nnz); nnx /= nnl; nny /= nnl; nnz /= nnl;
        const ndl = Math.max(0, nnx * -0.55 + nny * -0.62 + nnz * 0.56);
        let wA = Math.max(0, ndl - 0.56) * 62 + Math.max(0, hh) * 5;
        let dA = Math.max(0, 0.56 - ndl) * 96;
        // oclusión de vaguadas: los fondos cóncavos acumulan sombra (dos radios)
        const ar1 = (disp(u + 3 * ex, v) + disp(u - 3 * ex, v) + disp(u, v + 3 * ey) + disp(u, v - 3 * ey)) * 0.25;
        const ar2 = (disp(u + 7 * ex, v) + disp(u - 7 * ex, v) + disp(u, v + 7 * ey) + disp(u, v - 7 * ey)) * 0.25;
        const ao = Math.max(0, (ar1 - hh) * 0.65 + (ar2 - hh) * 0.45);
        dA += ao * 72;
        if (hh < 0) dA = Math.max(dA, -hh * 70);
        // sombra proyectada por las crestas (luz desde arriba-izquierda)
        let cast = 0;
        for (let s = 1; s <= 6; s++) {
          const hs = disp(u - 0.019 * s, v - 0.012 * s);
          const need = hh + 0.052 * s;
          if (hs > need) cast = Math.max(cast, Math.min(1, (hs - need) * 2.4));
        }
        dA = Math.max(dA, cast * 32);
        // perspectiva atmosférica: lo lejano (norte) más pálido y frío, lo cercano con más contraste
        dA = Math.min(50, dA * 1.3 * (0.74 + 0.4 * v));
        wA = wA * (0.82 + 0.18 * v) + (1 - v) * (1 - v) * 6;
        const snow = Math.max(0, hh - 0.86) * 55;
        if (wA + snow >= dA) { hImg.data[idx] = 255; hImg.data[idx + 1] = 253; hImg.data[idx + 2] = 247; hImg.data[idx + 3] = Math.min(104, wA + snow); }
        else { hImg.data[idx] = 40; hImg.data[idx + 1] = 54; hImg.data[idx + 2] = 78; hImg.data[idx + 3] = dA; }
      }
      hbx.putImageData(hImg, 0, 0);
      tx.save(); tx.imageSmoothingEnabled = true; tx.drawImage(hbuf, 0, 0, TW, TH); tx.restore();
      // hipsometría: tres pasos de tinte cálido por altitud, separan cumbre, ladera y valle
      const hyp = self._hypBuf || (self._hypBuf = document.createElement('canvas'));
      hyp.width = HXn; hyp.height = HYn;
      const hyx = hyp.getContext('2d'); const yImg = hyx.createImageData(HXn, HYn);
      const BANDS = [[0.10, 176, 172, 162, 26], [0.34, 168, 162, 150, 30], [0.62, 158, 150, 136, 34]];
      for (let y = 0; y < HYn; y++) for (let x = 0; x < HXn; x++) {
        const hh = disp(x / (HXn - 1), y / (HYn - 1)); const idx = (y * HXn + x) * 4;
        let b = null;
        for (let k = BANDS.length - 1; k >= 0; k--) if (hh >= BANDS[k][0]) { b = BANDS[k]; break; }
        if (!b) continue;
        yImg.data[idx] = b[1]; yImg.data[idx + 1] = b[2]; yImg.data[idx + 2] = b[3]; yImg.data[idx + 3] = b[4];
      }
      hyx.putImageData(yImg, 0, 0);
      tx.save(); tx.globalAlpha = 0.9; tx.drawImage(hyp, 0, 0, TW, TH); tx.restore();
      // red de drenaje: los cauces con más caudal bajan de las vaguadas hacia la llanura
      tx.save();
      tx.lineCap = 'round'; tx.lineJoin = 'round';
      const dseen = new Uint8Array(BNX * BNY);
      for (let j = 2; j < BNY - 2; j++) for (let i = 2; i < BNX - 2; i++) {
        const k0 = j * BNX + i;
        if (FLOW[k0] < 26 || dseen[k0]) continue;
        const uu0 = i / (BNX - 1) * BU, vv0 = j / (BNY - 1);
        if (uu0 > 0.455 || disp(uu0, vv0) < 0.05) continue;
        let ci = i, cj = j; const ptsD = []; let acc = 0;
        for (let s = 0; s < 40; s++) {
          const kk = cj * BNX + ci;
          if (dseen[kk]) break;
          dseen[kk] = 1;
          const u2 = ci / (BNX - 1) * BU, v2 = cj / (BNY - 1);
          if (disp(u2, v2) < 0.03) break;
          ptsD.push([u2 * TW, v2 * TH]); acc += FLOW[kk];
          let bi = -1, bj = -1, bh = BG[kk];
          for (let oj = -1; oj <= 1; oj++) for (let oi = -1; oi <= 1; oi++) {
            if (!oi && !oj) continue;
            const n2 = ci + oi, m2 = cj + oj;
            if (n2 < 1 || n2 >= BNX - 1 || m2 < 1 || m2 >= BNY - 1) continue;
            const hn = BG[m2 * BNX + n2];
            if (hn < bh) { bh = hn; bi = n2; bj = m2; }
          }
          if (bi < 0) break;
          ci = bi; cj = bj;
        }
        if (ptsD.length < 4) continue;
        tx.beginPath();
        tx.moveTo(ptsD[0][0], ptsD[0][1]);
        for (let s2 = 1; s2 < ptsD.length; s2++) tx.lineTo(ptsD[s2][0], ptsD[s2][1]);
        tx.strokeStyle = 'rgba(92,120,150,0.24)';
        tx.lineWidth = 0.6 + Math.min(1.2, acc / (ptsD.length * 180));
        tx.stroke();
      }
      tx.restore();
      // marching-squares contours of the left terrain
      const Nx = isMobile ? 120 : 190, Ny = isMobile ? 74 : 112;
      const grid = []; let mn = 1e9, mx = -1e9;
      for (let gy = 0; gy < Ny; gy++) { grid[gy] = []; for (let gx = 0; gx < Nx; gx++) { const val = disp(gx / (Nx - 1), gy / (Ny - 1)); grid[gy][gx] = val; if (val < mn) mn = val; if (val > mx) mx = val; } }
      const ip = (x1, y1, v1, x2, y2, v2, v) => { const t = (v - v1) / (v2 - v1 || 1e-6); return [x1 + (x2 - x1) * t, y1 + (y2 - y1) * t]; };
      const TBL = { 1: [[3, 2]], 2: [[2, 1]], 3: [[3, 1]], 4: [[0, 1]], 5: [[0, 3], [2, 1]], 6: [[0, 2]], 7: [[0, 3]], 8: [[0, 3]], 9: [[0, 2]], 10: [[0, 1], [2, 3]], 11: [[0, 1]], 12: [[3, 1]], 13: [[2, 1]], 14: [[3, 2]] };
      const NL = isMobile ? 20 : 34;
      // los niveles llegan hasta casi el máximo: la cumbre cierra con anillos, no queda en blanco
      const dv = (mx - mn) / (NL + 0.35);
      const DRAW_CONTOURS = false; // curvas de nivel retiradas: el relieve lo cuentan sombra, drenaje e hipsometría
      if (DRAW_CONTOURS) for (let li = 1; li <= NL; li++) {
        const v = mn + dv * li; const vt = li / NL;
        tx.beginPath();
        for (let gy = 0; gy < Ny - 1; gy++) for (let gx = 0; gx < Nx - 1; gx++) {
          const x0 = gx / (Nx - 1), x1 = (gx + 1) / (Nx - 1), y0 = gy / (Ny - 1), y1 = (gy + 1) / (Ny - 1);
          const va = grid[gy][gx], vb = grid[gy][gx + 1], vc = grid[gy + 1][gx + 1], vd = grid[gy + 1][gx];
          let ci = 0; if (va > v) ci |= 8; if (vb > v) ci |= 4; if (vc > v) ci |= 2; if (vd > v) ci |= 1;
          const ln = TBL[ci]; if (!ln) continue;
          const ep = (idx) => idx === 0 ? ip(x0, y0, va, x1, y0, vb, v) : idx === 1 ? ip(x1, y0, vb, x1, y1, vc, v) : idx === 2 ? ip(x1, y1, vc, x0, y1, vd, v) : ip(x0, y1, vd, x0, y0, va, v);
          for (let l = 0; l < ln.length; l++) { const p = ep(ln[l][0]), q = ep(ln[l][1]); tx.moveTo(p[0] * TW, p[1] * TH); tx.lineTo(q[0] * TW, q[1] * TH); }
        }
        const master = li % 5 === 0;
        // opacidad de base más alta y menos dependiente del nivel: curvas continuas también en la umbría
        tx.strokeStyle = 'rgba(48,60,78,' + ((master ? 0.42 : 0.24) + vt * (master ? 0.3 : 0.16)) + ')';
        tx.lineWidth = (master ? 1.25 : 0.6) + vt * (master ? 0.7 : 0.4);
        tx.stroke();
      }
      // (right side is a single clean road — handled by the road system below)
      // bruma en las vaguadas: da profundidad y separa planos sin oscurecer
      tx.save();
      [[0.11, 0.545, 0.085], [0.22, 0.575, 0.08], [0.33, 0.55, 0.07], [0.16, 0.325, 0.055], [0.29, 0.735, 0.062], [0.15, 0.75, 0.058]].forEach((m) => {
        const g = tx.createRadialGradient(m[0] * TW, m[1] * TH, 0, m[0] * TW, m[1] * TH, m[2] * TW);
        g.addColorStop(0, 'rgba(250,251,252,0.52)'); g.addColorStop(0.6, 'rgba(250,251,252,0.22)'); g.addColorStop(1, 'rgba(250,251,252,0)');
        tx.fillStyle = g; tx.beginPath(); tx.arc(m[0] * TW, m[1] * TH, m[2] * TW, 0, 7); tx.fill();
      });
      tx.restore();
      tx.textAlign = 'center';
      // ---- CAMINOS: múltiples carreteras con curvas serpentean entre las montañas (fricción),
      //      convergen en el logo (coordinación) y salen como un solo camino limpio (claridad y control)
      const CVX = 0.44, CVY = 0.5;
      const roadPath = (pts) => { tx.beginPath(); tx.moveTo(pts[0][0] * TW, pts[0][1] * TH); for (let i = 1; i < pts.length - 1; i++) { const c = pts[i], n = pts[i + 1]; tx.quadraticCurveTo(c[0] * TW, c[1] * TH, (c[0] + n[0]) / 2 * TW, (c[1] + n[1]) / 2 * TH); } const L = pts[pts.length - 1]; tx.lineTo(L[0] * TW, L[1] * TH); };
      const drawRoad = (pts, cas, cw, cen, ccw, dash) => { tx.lineCap = 'round'; tx.lineJoin = 'round'; roadPath(pts); tx.strokeStyle = cas; tx.lineWidth = cw; tx.stroke(); roadPath(pts); tx.strokeStyle = cen; tx.lineWidth = ccw; tx.setLineDash(dash); tx.stroke(); tx.setLineDash([]); };
      const roadsL = ROADS;
      tx.save();
      // cada ruta con su propio carácter: continua, discontinua y punteada
      // trazas tenues bajo la plataforma 3D: el camino con superficie lo dibuja la escena
      const RSTYLE = [{ w: 9.0, cw: 1.2, dash: [] }, { w: 8.5, cw: 1.1, dash: [11, 6] }, { w: 8.0, cw: 1.0, dash: [2, 6] }];
      for (let ri = 0; ri < roadsL.length; ri++) { const st = RSTYLE[ri]; drawRoad(roadsL[ri], 'rgba(116,128,146,0.12)', st.w, 'rgba(54,78,110,0.22)', st.cw, st.dash); }
      // tramo hub -> destino: lo dibuja el viaducto 3D, no el terreno (evita la línea punteada bajo el puente)
      const roadM = [[CVX, CVY], [HUBX, HUBY]];
      drawRoad(roadM, 'rgba(116,128,146,0.24)', 10, 'rgba(46,72,106,0.6)', 1.7, [5, 12]);
      tx.restore();

      // ---- llanura cartografiada: retícula de coordenadas sobre el sector derecho
      tx.save();
      tx.lineCap = 'butt'; tx.lineJoin = 'miter';
      const GU0 = 0.455, GSTEP = 0.0453;
      for (let i = 0; GU0 + i * GSTEP <= 0.998; i++) {
        const u = GU0 + i * GSTEP, major = i % 4 === 0;
        tx.beginPath(); tx.moveTo(u * TW, 0.055 * TH); tx.lineTo(u * TW, 0.945 * TH);
        tx.strokeStyle = 'rgba(64,88,118,' + (major ? 0.17 : 0.09) + ')';
        tx.lineWidth = major ? 1.5 : 0.8; tx.stroke();
      }
      for (let j = 0; j < 13; j++) {
        const v = 0.075 + j * 0.0708, major = j % 4 === 0;
        tx.beginPath(); tx.moveTo(GU0 * TW, v * TH); tx.lineTo(0.995 * TW, v * TH);
        tx.strokeStyle = 'rgba(64,88,118,' + (major ? 0.15 : 0.08) + ')';
        tx.lineWidth = major ? 1.4 : 0.8; tx.stroke();
      }
      tx.restore();

      // ---- anotación de proyecto: estaciones del viaducto y cotas sueltas en la llanura
      tx.save();
      tx.font = '500 11px ui-monospace, Menlo, monospace';
      tx.fillStyle = 'rgba(46,72,106,0.5)';
      tx.textAlign = 'center'; tx.textBaseline = 'top';
      const SV = 0.615;
      tx.strokeStyle = 'rgba(46,72,106,0.32)'; tx.lineWidth = 1;
      tx.beginPath(); tx.moveTo(0.565 * TW, SV * TH); tx.lineTo(0.95 * TW, SV * TH); tx.stroke();
      for (let k = 0; k <= 8; k++) {
        const u = 0.565 + (0.95 - 0.565) * k / 8, big = k % 2 === 0;
        tx.beginPath(); tx.moveTo(u * TW, SV * TH); tx.lineTo(u * TW, (SV + (big ? 0.017 : 0.009)) * TH);
        tx.lineWidth = big ? 1.3 : 0.8; tx.stroke();
      }
      [[0.515, 0.235], [0.705, 0.30], [0.87, 0.72], [0.63, 0.815]].forEach((c) => {
        const X = c[0] * TW, Y = c[1] * TH;
        tx.lineWidth = 1;
        tx.beginPath(); tx.moveTo(X - 5, Y); tx.lineTo(X + 5, Y); tx.moveTo(X, Y - 5); tx.lineTo(X, Y + 5); tx.stroke();
      });
      tx.restore();

      // ---- aparato cartográfico: pasos de montaña, cotas, escala y norte
      tx.save();
      tx.lineCap = 'butt'; tx.lineJoin = 'miter';
      // pasos de montaña donde una ruta cruza una cresta (la fricción, señalada)
      const passes = [];
      const smoothLocal = (pts, per) => {
        const out = [pts[0].slice()]; let cur = pts[0];
        const qp = (a, b, c, s) => { const m = 1 - s; return [m * m * a[0] + 2 * m * s * b[0] + s * s * c[0], m * m * a[1] + 2 * m * s * b[1] + s * s * c[1]]; };
        for (let i = 1; i < pts.length - 1; i++) {
          const c = pts[i], n = pts[i + 1], end = [(c[0] + n[0]) / 2, (c[1] + n[1]) / 2];
          for (let s = 1; s <= per; s++) out.push(qp(cur, c, end, s / per));
          cur = end;
        }
        const L = pts[pts.length - 1];
        for (let s = 1; s <= per; s++) out.push([cur[0] + (L[0] - cur[0]) * s / per, cur[1] + (L[1] - cur[1]) * s / per]);
        return out;
      };
      for (let ri = 0; ri < roadsL.length; ri++) {
        const pl = smoothLocal(roadsL[ri], 10);
        let bestI = -1, bestH = 0.30;
        for (let i = 3; i < pl.length - 3; i++) {
          const hh = disp(pl[i][0], pl[i][1]);
          if (pl[i][0] > 0.40 || pl[i][0] < 0.04) continue;
          if (hh > bestH) { bestH = hh; bestI = i; }
        }
        if (bestI < 0) continue;
        const a = pl[bestI - 2], b = pl[bestI + 2], pt = pl[bestI];
        passes.push({ x: pt[0], y: pt[1], ang: Math.atan2((b[1] - a[1]) * TH, (b[0] - a[0]) * TW) });
      }
      // ---- delimitación geográfica: frontera cartográfica entre el territorio de fricción y el corredor
      tx.save();
      const bord = [];
      for (let k = 0; k <= 64; k++) {
        const vv = 0.04 + 0.92 * (k / 64);
        const uu = 0.445 + Math.sin(vv * 9.3 + 1.7) * 0.012 + Math.sin(vv * 21.7) * 0.005;
        bord.push([uu * TW, vv * TH]);
      }
      // banda de neutralidad: halo ancho y tenue a ambos lados de la línea
      tx.beginPath();
      tx.moveTo(bord[0][0], bord[0][1]);
      for (let k = 1; k < bord.length; k++) tx.lineTo(bord[k][0], bord[k][1]);
      tx.strokeStyle = 'rgba(122,140,162,0.07)'; tx.lineWidth = 26; tx.lineCap = 'round'; tx.stroke();
      // línea de frontera internacional: raya-punto-raya
      tx.beginPath();
      tx.moveTo(bord[0][0], bord[0][1]);
      for (let k = 1; k < bord.length; k++) tx.lineTo(bord[k][0], bord[k][1]);
      tx.strokeStyle = 'rgba(84,100,122,0.5)'; tx.lineWidth = 1.3;
      tx.setLineDash([10, 5, 2.2, 5]); tx.stroke(); tx.setLineDash([]);
      // cruces de ruta: pequeño rombo donde las carreteras atraviesan la frontera
      ROADS.forEach((rd) => {
        let best = null, bd2 = 1e9;
        for (let i = 0; i < rd.length; i++) {
          const px2 = rd[i][0] * TW, py2 = rd[i][1] * TH;
          for (let k = 0; k < bord.length; k += 2) {
            const d2 = (px2 - bord[k][0]) * (px2 - bord[k][0]) + (py2 - bord[k][1]) * (py2 - bord[k][1]);
            if (d2 < bd2) { bd2 = d2; best = [bord[k][0], bord[k][1]]; }
          }
        }
        if (!best || bd2 > 300) return;
        tx.save();
        tx.translate(best[0], best[1]); tx.rotate(Math.PI / 4);
        tx.strokeStyle = 'rgba(84,100,122,0.55)'; tx.lineWidth = 1.1;
        tx.strokeRect(-3, -3, 6, 6);
        tx.restore();
      });
      tx.restore();
      // (la vía cortada del desvío ya no se dibuja: las rutas toman el ramal directamente)
      tx.font = '500 10px Jost, sans-serif';
      tx.fillStyle = 'rgba(46,60,80,0.5)';
      // norte
      const nx = 0.415 * TW, ny = 0.135 * TH;
      tx.strokeStyle = 'rgba(46,60,80,0.45)'; tx.lineWidth = 1.1;
      tx.beginPath(); tx.moveTo(nx, ny + 15); tx.lineTo(nx, ny - 11); tx.stroke();
      tx.beginPath(); tx.moveTo(nx, ny - 15); tx.lineTo(nx - 3.6, ny - 7); tx.lineTo(nx + 3.6, ny - 7); tx.closePath();
      tx.fillStyle = 'rgba(46,60,80,0.5)'; tx.fill();
      tx.textAlign = 'center'; tx.textBaseline = 'top';
      tx.fillText('N', nx, ny + 18);
      tx.restore();
      tx.textAlign = 'center'; tx.textBaseline = 'alphabetic';

      // ---- llanura al este: el suelo continúa bajo el viaducto en vez de disolverse
      tx.save();
      const PY = 0.52, PX0 = 0.44, PX1 = 0.995;
      const plainG = tx.createLinearGradient(PX0 * TW, 0, PX1 * TW, 0);
      plainG.addColorStop(0, 'rgba(150,158,170,0.10)'); plainG.addColorStop(0.55, 'rgba(150,158,170,0.055)'); plainG.addColorStop(1, 'rgba(150,158,170,0)');
      tx.fillStyle = plainG;
      tx.fillRect(PX0 * TW, 0.20 * TH, (PX1 - PX0) * TW, 0.66 * TH);
      // curvas muy espaciadas: llanura, no relieve
      for (let i = 0; i < 5; i++) {
        const off = 0.13 + i * 0.075;
        [-1, 1].forEach((sg) => {
          tx.beginPath();
          for (let k = 0; k <= 60; k++) {
            const u = PX0 + (PX1 - PX0) * (k / 60);
            const wob = Math.sin(u * 21 + i * 2.1) * 0.006 + Math.sin(u * 47 - i * 1.3) * 0.003;
            const vv = PY + sg * (off + wob);
            const px = u * TW, py = vv * TH;
            if (k === 0) tx.moveTo(px, py); else tx.lineTo(px, py);
          }
          tx.strokeStyle = 'rgba(70,84,104,' + (0.10 - i * 0.014) * (1 - (i / 6)) + ')';
          tx.lineWidth = 0.7; tx.stroke();
        });
      }
      // cauce bajo el viaducto: la razón por la que existe el puente
      const rivG = tx.createLinearGradient(0, (PY - 0.055) * TH, 0, (PY + 0.055) * TH);
      rivG.addColorStop(0, 'rgba(120,152,184,0)'); rivG.addColorStop(0.5, 'rgba(120,152,184,0.16)'); rivG.addColorStop(1, 'rgba(120,152,184,0)');
      tx.fillStyle = rivG;
      tx.beginPath();
      for (let k = 0; k <= 70; k++) {
        const u = 0.46 + 0.53 * (k / 70);
        const c = PY + Math.sin(u * 9.1 + 1.2) * 0.022 + Math.sin(u * 19.3) * 0.009;
        const w = 0.036 * (1 - Math.max(0, (u - 0.86) / 0.14));
        const px = u * TW, py = (c - w) * TH;
        if (k === 0) tx.moveTo(px, py); else tx.lineTo(px, py);
      }
      for (let k = 70; k >= 0; k--) {
        const u = 0.46 + 0.53 * (k / 70);
        const c = PY + Math.sin(u * 9.1 + 1.2) * 0.022 + Math.sin(u * 19.3) * 0.009;
        const w = 0.036 * (1 - Math.max(0, (u - 0.86) / 0.14));
        tx.lineTo(u * TW, (c + w) * TH);
      }
      tx.closePath(); tx.fill();
      // orillas
      [-1, 1].forEach((sg) => {
        tx.beginPath();
        for (let k = 0; k <= 70; k++) {
          const u = 0.46 + 0.53 * (k / 70);
          const c = PY + Math.sin(u * 9.1 + 1.2) * 0.022 + Math.sin(u * 19.3) * 0.009;
          const w = 0.036 * (1 - Math.max(0, (u - 0.86) / 0.14));
          const px = u * TW, py = (c + sg * w) * TH;
          if (k === 0) tx.moveTo(px, py); else tx.lineTo(px, py);
        }
        tx.strokeStyle = 'rgba(88,120,152,0.24)'; tx.lineWidth = 0.9; tx.stroke();
      });
      tx.restore();

      // ---- plaza del núcleo: disco a nivel de suelo con radiales hacia las rutas y el puente
      tx.save();
      const pzx = HUBX * TW, pzy = HUBY * TH, pzr = Math.min(TW, TH) * 0.145;
      const pzg = tx.createRadialGradient(pzx, pzy, pzr * 0.2, pzx, pzy, pzr);
      pzg.addColorStop(0, 'rgba(146,158,174,0.13)'); pzg.addColorStop(0.72, 'rgba(146,158,174,0.06)'); pzg.addColorStop(1, 'rgba(146,158,174,0)');
      tx.fillStyle = pzg; tx.beginPath(); tx.arc(pzx, pzy, pzr, 0, 7); tx.fill();
      tx.strokeStyle = 'rgba(66,112,146,0.16)'; tx.lineWidth = 0.8;
      tx.beginPath(); tx.arc(pzx, pzy, pzr * 0.82, 0, 7); tx.stroke();
      [188, 172, 156, 0].forEach((deg) => {
        const a = deg * Math.PI / 180;
        tx.beginPath();
        tx.moveTo(pzx + Math.cos(a) * pzr * 0.34, pzy + Math.sin(a) * pzr * 0.34);
        tx.lineTo(pzx + Math.cos(a) * pzr * 0.95, pzy + Math.sin(a) * pzr * 0.95);
        tx.strokeStyle = 'rgba(66,112,146,' + (deg === 0 ? 0.26 : 0.16) + ')'; tx.lineWidth = deg === 0 ? 1.1 : 0.8; tx.stroke();
      });
      tx.restore();
      // hub: serene concentric field + monogram
      const hx = HUBX * TW, hy = HUBY * TH, hr = Math.min(TW, TH) * 0.14;
      const disc = tx.createRadialGradient(hx, hy, hr * 0.1, hx, hy, hr * 1.05);
      disc.addColorStop(0, 'rgba(238,236,231,0.7)'); disc.addColorStop(0.5, 'rgba(238,236,231,0.24)'); disc.addColorStop(1, 'rgba(238,236,231,0)');
      tx.fillStyle = disc; tx.beginPath(); tx.arc(hx, hy, hr * 1.05, 0, 7); tx.fill();
      for (let k = 0; k < 2; k++) { tx.beginPath(); tx.arc(hx, hy, hr * (0.46 + k * 0.34), 0, 7); tx.strokeStyle = 'rgba(66,112,146,' + (0.26 - k * 0.10) + ')'; tx.lineWidth = 1.0; tx.stroke(); }
      // el monograma ya no se pinta en el terreno: lo lleva el plano 3D sobre la losa

      if (self._frTex) self._frTex.needsUpdate = true;
      // fade the plane edges into the ivory section (no visible seam)
      tx.globalCompositeOperation = 'destination-out';
      const fade = (x0, y0, x1, y1, w, h) => { const g = tx.createLinearGradient(x0, y0, x1, y1); g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(1, 'rgba(0,0,0,0)'); tx.fillStyle = g; tx.fillRect(Math.min(x0, x1) === x0 ? x0 : x1, Math.min(y0, y1) === y0 ? y0 : y1, w, h); };
      // el filo oeste ya no se desvanece: el relieve continúa en el delantal, y el degradado
      // dejaba una franja vertical translúcida justo en la costura
      fade(TW, 0, TW * 0.90, 0, TW * 0.10, TH);
      fade(0, 0, 0, TH * 0.11, TW, TH * 0.11);
      fade(0, TH, 0, TH * 0.92, TW, TH * 0.08);
      tx.globalCompositeOperation = 'source-over';
      if (self._frTex) self._frTex.needsUpdate = true;
    };

    const inkEl = document.getElementById('bb-logo-ink');
    if (inkEl && inkEl.complete && inkEl.naturalWidth) { logoImg = inkEl; }
    else { const im = new Image(); im.onload = () => { logoImg = im; buildTexture(); if (self._paintHubLogo) self._paintHubLogo(); }; im.src = (inkEl && inkEl.src) || 'brand/logo-monogram-ink.webp'; }

    // ---- three.js scene: displaced relief, lit top-left for papercut shadows
    // el montaje espera a que el hilo esté libre: la página pinta antes de construir la escena
    const buildScene = () => {
    const renderer = new THREE.WebGLRenderer({ canvas: cv, alpha: true, antialias: true, powerPreference: 'high-performance' });
    self._frRenderer = renderer;
    renderer.setPixelRatio(Math.min(1.5, window.devicePixelRatio || 1));
    renderer.shadowMap.enabled = false;
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(30, 2.4, 0.1, 200);

    const Wp = 22, Dp = Wp * (TH / TW), SX = isMobile ? 190 : 340, SY = isMobile ? 120 : 210;
    const geo = new THREE.PlaneGeometry(Wp, Dp, SX, SY);
    const pos = geo.attributes.position, uv = geo.attributes.uv;
    const HSCALE = 2.15;
    // normales analíticas del campo de alturas: continuas entre mallas, sin costura ni facetas
    const setNormals = (g, uAt, vAt, du, dv) => {
      const p = g.attributes.position, q = g.attributes.uv, n = g.attributes.normal;
      for (let i = 0; i < p.count; i++) {
        const u = uAt(q.getX(i)), v = vAt(q.getY(i));
        const gx = (disp(u + du, v) - disp(u - du, v)) * HSCALE / (2 * du * Wp);
        const gy = (disp(u, v + dv) - disp(u, v - dv)) * HSCALE / (2 * dv * Dp) * -1;
        const nx = -gx, ny = -gy, nz = 1, L = Math.hypot(nx, ny, nz) || 1;
        n.setXYZ(i, nx / L, ny / L, nz / L);
      }
      n.needsUpdate = true;
    };
    for (let i = 0; i < pos.count; i++) { const u = uv.getX(i), v = 1 - uv.getY(i); pos.setZ(i, disp(u, v) * HSCALE); }
    geo.computeVertexNormals();
    setNormals(geo, (x) => x, (y) => 1 - y, 1 / SX, 1 / SY);
    const tex = new THREE.CanvasTexture(tcv); tex.anisotropy = 4; self._frTex = tex;
    buildTexture();
    const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.96, metalness: 0.0, transparent: true });
    const mesh = new THREE.Mesh(geo, mat); mesh.rotation.x = -Math.PI / 2; scene.add(mesh);

    // ---- delantal oeste: relieve 3D real que continúa el macizo más allá del filo del plano
    (() => {
      const EXT = 0.2, U0 = -EXT;
      const gA = new THREE.PlaneGeometry(Wp * EXT, Dp, isMobile ? 40 : 70, SY);
      const pA = gA.attributes.position, uvA = gA.attributes.uv;
      for (let i = 0; i < pA.count; i++) pA.setZ(i, disp(U0 + uvA.getX(i) * EXT, 1 - uvA.getY(i)) * HSCALE);
      gA.computeVertexNormals();
      setNormals(gA, (x) => U0 + x * EXT, (y) => 1 - y, 1 / SX, 1 / SY);
      // misma densidad de píxel y misma receta que la textura del macizo
      const AW = Math.round(TW * EXT), AH = TH;
      const cvA = document.createElement('canvas'); cvA.width = AW; cvA.height = AH;
      const ax = cvA.getContext('2d');
      ax.fillStyle = '#e6e5e7'; ax.fillRect(0, 0, AW, AH);
      const HXa = Math.max(24, Math.round((isMobile ? 150 : 264) * EXT)), HYa = Math.round((isMobile ? 150 : 264) * TH / TW);
      const buf = document.createElement('canvas'); buf.width = HXa; buf.height = HYa;
      const bx = buf.getContext('2d');
      const iA = bx.createImageData(HXa, HYa), iB = bx.createImageData(HXa, HYa);
      const ex = 1.2 / (HXa / EXT), ey = 1.2 / HYa;
      const BANDS = [[0.10, 176, 172, 162, 26], [0.34, 168, 162, 150, 30], [0.62, 158, 150, 136, 34]];
      for (let y = 0; y < HYa; y++) for (let x = 0; x < HXa; x++) {
        const u = U0 + (x / (HXa - 1)) * EXT, v = y / (HYa - 1);
        const hh = disp(u, v);
        const sx = disp(u + ex, v) - disp(u - ex, v);
        const sy = disp(u, v + ey) - disp(u, v - ey);
        let nx2 = -sx * 30, ny2 = -sy * 30, nz2 = 1;
        const nl = Math.hypot(nx2, ny2, nz2); nx2 /= nl; ny2 /= nl; nz2 /= nl;
        const ndl = Math.max(0, nx2 * -0.55 + ny2 * -0.62 + nz2 * 0.56);
        let wA = Math.max(0, ndl - 0.56) * 62 + Math.max(0, hh) * 5;
        let dA = Math.max(0, 0.56 - ndl) * 96;
        const ar1 = (disp(u + 3 * ex, v) + disp(u - 3 * ex, v) + disp(u, v + 3 * ey) + disp(u, v - 3 * ey)) * 0.25;
        const ar2 = (disp(u + 7 * ex, v) + disp(u - 7 * ex, v) + disp(u, v + 7 * ey) + disp(u, v - 7 * ey)) * 0.25;
        dA += Math.max(0, (ar1 - hh) * 0.65 + (ar2 - hh) * 0.45) * 72;
        if (hh < 0) dA = Math.max(dA, -hh * 70);
        // sombra proyectada por las crestas, igual que en el macizo
        let cast = 0;
        for (let s = 1; s <= 6; s++) {
          const hs = disp(u - 0.019 * s, v - 0.012 * s);
          const need = hh + 0.052 * s;
          if (hs > need) cast = Math.max(cast, Math.min(1, (hs - need) * 2.4));
        }
        dA = Math.max(dA, cast * 32);
        dA = Math.min(50, dA * 1.3 * (0.74 + 0.4 * v));
        wA = wA * (0.82 + 0.18 * v) + (1 - v) * (1 - v) * 6;
        const snow = Math.max(0, hh - 0.86) * 55;
        const k = (y * HXa + x) * 4;
        if (wA + snow >= dA) { iA.data[k] = 255; iA.data[k + 1] = 253; iA.data[k + 2] = 247; iA.data[k + 3] = Math.min(104, wA + snow); }
        else { iA.data[k] = 40; iA.data[k + 1] = 54; iA.data[k + 2] = 78; iA.data[k + 3] = dA; }
        let b = null;
        for (let q = BANDS.length - 1; q >= 0; q--) if (hh >= BANDS[q][0]) { b = BANDS[q]; break; }
        if (b) { iB.data[k] = b[1]; iB.data[k + 1] = b[2]; iB.data[k + 2] = b[3]; iB.data[k + 3] = b[4]; }
      }
      bx.putImageData(iA, 0, 0);
      ax.save(); ax.imageSmoothingEnabled = true; ax.drawImage(buf, 0, 0, AW, AH); ax.restore();
      bx.putImageData(iB, 0, 0);
      ax.save(); ax.globalAlpha = 0.9; ax.drawImage(buf, 0, 0, AW, AH); ax.restore();
      // red de drenaje: los mismos cauces tallados por la erosión, en coordenadas del delantal
      ax.save();
      ax.lineCap = 'round'; ax.lineJoin = 'round';
      const AX = (u) => (u - U0) / EXT * AW, AY = (v) => v * AH;
      const dseen = new Uint8Array(BNX * BNY);
      for (let j = 2; j < BNY - 2; j++) for (let i = 2; i < BNX - 2; i++) {
        const k0 = j * BNX + i;
        if (FLOW[k0] < 22 || dseen[k0]) continue;
        const uu0 = BU0 + (BU - BU0) * (i / (BNX - 1)), vv0 = j / (BNY - 1);
        if (uu0 > -0.004 || uu0 < U0 + 0.006 || disp(uu0, vv0) < 0.04) continue;
        let ci = i, cj = j; const pts = []; let acc = 0;
        for (let s = 0; s < 40; s++) {
          const kk = cj * BNX + ci;
          if (dseen[kk]) break;
          dseen[kk] = 1;
          const u2 = BU0 + (BU - BU0) * (ci / (BNX - 1)), v2 = cj / (BNY - 1);
          if (u2 > 0.002 || disp(u2, v2) < 0.025) break;
          pts.push([AX(u2), AY(v2)]); acc += FLOW[kk];
          let bi = -1, bj = -1, bh = BG[kk];
          for (let oj = -1; oj <= 1; oj++) for (let oi = -1; oi <= 1; oi++) {
            if (!oi && !oj) continue;
            const n2 = ci + oi, m2 = cj + oj;
            if (n2 < 1 || n2 >= BNX - 1 || m2 < 1 || m2 >= BNY - 1) continue;
            const hn = BG[m2 * BNX + n2];
            if (hn < bh) { bh = hn; bi = n2; bj = m2; }
          }
          if (bi < 0) break;
          ci = bi; cj = bj;
        }
        if (pts.length < 4) continue;
        ax.beginPath();
        ax.moveTo(pts[0][0], pts[0][1]);
        for (let s2 = 1; s2 < pts.length; s2++) ax.lineTo(pts[s2][0], pts[s2][1]);
        ax.strokeStyle = 'rgba(92,120,150,0.24)';
        ax.lineWidth = 0.6 + Math.min(1.2, acc / (pts.length * 180));
        ax.stroke();
      }
      ax.restore();
      // bruma en las vaguadas, como en el macizo
      [[-0.045, 0.31, 0.075], [-0.085, 0.60, 0.07], [-0.125, 0.44, 0.06], [-0.06, 0.79, 0.058]].forEach((m) => {
        const mx = AX(m[0]), my = AY(m[1]), mr = m[2] * TW;
        const g = ax.createRadialGradient(mx, my, 0, mx, my, mr);
        g.addColorStop(0, 'rgba(250,251,252,0.52)'); g.addColorStop(0.6, 'rgba(250,251,252,0.22)'); g.addColorStop(1, 'rgba(250,251,252,0)');
        ax.fillStyle = g; ax.beginPath(); ax.arc(mx, my, mr, 0, 7); ax.fill();
      });
      // velo atmosférico igual al del plano principal y desvanecido hacia el filo exterior
      ax.fillStyle = 'rgba(66,88,120,0.06)'; ax.fillRect(0, 0, AW, AH);
      const fade = ax.createLinearGradient(0, 0, AW * 0.72, 0);
      fade.addColorStop(0, 'rgba(0,0,0,1)'); fade.addColorStop(0.45, 'rgba(0,0,0,0.34)'); fade.addColorStop(1, 'rgba(0,0,0,0)');
      ax.globalCompositeOperation = 'destination-out';
      ax.fillStyle = fade; ax.fillRect(0, 0, AW * 0.72, AH);
      ax.globalCompositeOperation = 'source-over';
      // el delantal sólo existe donde hay relieve: lo llano se borra para que no quede una banda gris
      const mbuf = document.createElement('canvas'); mbuf.width = HXa; mbuf.height = HYa;
      const mbx = mbuf.getContext('2d');
      const iM = mbx.createImageData(HXa, HYa);
      for (let y = 0; y < HYa; y++) for (let x = 0; x < HXa; x++) {
        const u = U0 + (x / (HXa - 1)) * EXT, v = y / (HYa - 1);
        const keep = smooth(0.02, 0.13, disp(u, v));
        const k = (y * HXa + x) * 4;
        iM.data[k] = 0; iM.data[k + 1] = 0; iM.data[k + 2] = 0;
        iM.data[k + 3] = Math.round(255 * (1 - keep));
      }
      mbx.putImageData(iM, 0, 0);
      ax.save();
      ax.globalCompositeOperation = 'destination-out';
      ax.imageSmoothingEnabled = true;
      ax.drawImage(mbuf, 0, 0, AW, AH);
      ax.restore();
      const texA = new THREE.CanvasTexture(cvA); texA.anisotropy = 4;
      const mA = new THREE.Mesh(gA, new THREE.MeshStandardMaterial({ map: texA, roughness: 0.96, metalness: 0.0, transparent: true }));
      mA.rotation.x = -Math.PI / 2;
      mA.position.x = -Wp * (0.5 + EXT / 2);
      scene.add(mA);
    })();

    scene.add(new THREE.AmbientLight(0xffffff, 0.66));
    // ---- cordilleras lejanas: tres capas con relieve sombreado (luz desde arriba-izquierda)
    (() => {
      const LAYERS = [
        { z: -6.7, h: 1.7, op: 0.34, seed: 1.7, f: 0.42, tone: [138, 158, 182] },
        { z: -9.2, h: 2.2, op: 0.22, seed: 4.1, f: 0.31, tone: [156, 174, 194] },
        { z: -12.4, h: 2.7, op: 0.13, seed: 8.3, f: 0.24, tone: [174, 190, 208] },
      ];
      const XA = -34, XB = 26, CW = 700, CH = 200;
      LAYERS.forEach((ly) => {
        const x0 = ly.x0 != null ? ly.x0 : XA, x1 = ly.x1 != null ? ly.x1 : XB;
        const maxH = ly.h * 1.2;
        const cvL = document.createElement('canvas'); cvL.width = CW; cvL.height = CH;
        const c2 = cvL.getContext('2d');
        const img = c2.createImageData(CW, CH);
        const ridge = new Float32Array(CW);
        for (let i = 0; i < CW; i++) {
          const x = x0 + (x1 - x0) * (i / (CW - 1)), t = x * ly.f;
          const r = Math.sin(t + ly.seed) * 0.5 + Math.sin(t * 2.3 + ly.seed * 1.7) * 0.28
            + Math.sin(t * 0.47 + ly.seed * 0.6) * 0.34 + Math.sin(t * 5.1 + ly.seed * 2.3) * 0.07;
          ridge[i] = Math.max(0.06, ly.h * (0.5 + 0.5 * r));
        }
        const base = ly.tone;
        for (let i = 0; i < CW; i++) {
          const hPix = Math.round((ridge[i] / maxH) * CH);
          const top = CH - hPix;
          // pendiente local: cara a la izquierda = iluminada, a la derecha = umbría
          const sl = (ridge[Math.min(CW - 1, i + 3)] - ridge[Math.max(0, i - 3)]) / (ly.h || 1);
          const lum = Math.max(-1, Math.min(1, sl * 2.6));
          const r0 = base[0] + lum * 52, g0 = base[1] + lum * 46, b0 = base[2] + lum * 34;
          for (let y = top; y < CH; y++) {
            const k = (y * CW + i) * 4;
            const fr = hPix > 1 ? (y - top) / hPix : 1;
            // la cresta pesa y la falda se disuelve por completo: sin canto recto sobre las cumbres
            let a = Math.pow(1 - fr, 0.9) * Math.min(1, (1 - fr) / 0.26);
            // filo de luz en la propia cima, tenue: no debe leerse como línea dibujada
            const rim = y - top < 2 ? (y - top < 1 ? 0.45 : 0.2) : 0;
            img.data[k] = Math.max(0, Math.min(255, r0 + rim * 46));
            img.data[k + 1] = Math.max(0, Math.min(255, g0 + rim * 44));
            img.data[k + 2] = Math.max(0, Math.min(255, b0 + rim * 40));
            img.data[k + 3] = Math.round(255 * Math.min(1, a + rim * 0.25));
          }
        }
        c2.putImageData(img, 0, 0);
        const texL = new THREE.CanvasTexture(cvL); texL.anisotropy = 2;
        const pw = x1 - x0;
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(pw, maxH),
          new THREE.MeshBasicMaterial({ map: texL, transparent: true, opacity: ly.op, depthWrite: false, side: THREE.DoubleSide })
        );
        m.position.set((x0 + x1) / 2, maxH / 2 - 0.42, ly.z);
        scene.add(m);
      });
    })();
    const key = new THREE.DirectionalLight(0xfff6ec, 1.0); key.position.set(-8, 8.5, 5); scene.add(key);
    const fill = new THREE.DirectionalLight(0xdfe6ee, 0.2); fill.position.set(7, 4, 3); scene.add(fill);

    // hub pulse ring (on the surface) + travelling light along the route
    const ringGeo = new THREE.RingGeometry(0.98, 1.02, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x427092, transparent: true, opacity: 0.35, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(ringGeo, ringMat); ring.rotation.x = -Math.PI / 2;
    ring.position.set((HUBX - 0.5) * Wp, 0.05, (HUBY - 0.5) * Dp); scene.add(ring);
    const BRIDGE_Y = 0.34;
    // el flujo sube por la rampa real que arranca en la plataforma del logo (u 0.533) y llega al tablero (u 0.565)
    const bridgeLift = (u) => BRIDGE_Y * Math.max(0, Math.min(1, (u - 0.5327) / 0.0323));
    // punto exacto sobre la superficie (sin vuelo): el desplazamiento se hace luego a lo largo del rayo de cámara
    const to3D = (u, v) => [(u - 0.5) * Wp, disp(u, v) * HSCALE + bridgeLift(u), (v - 0.5) * Dp];
    // eleva un punto hacia la cámara: se ve exactamente sobre el mismo píxel del camino pintado
    const liftToCam = (S, h) => {
      const dx = cam.position.x - S[0], dy = cam.position.y - S[1], dz = cam.position.z - S[2];
      const L2 = Math.hypot(dx, dy, dz) || 1;
      return [S[0] + dx / L2 * h, S[1] + dy / L2 * h, S[2] + dz / L2 * h];
    };
    const FR = ROADS;
    const MR = [[0.44, 0.5], [HUBX, HUBY], [0.62, 0.52], [0.80, 0.52], [0.99, 0.52]];
    const fullPaths = FR.map((fr) => fr.concat(MR.slice(1)));
    // trazado suavizado idéntico al pintado en la textura (cuádricas por punto medio), reparametrizado por longitud
    const qpt = (a, c, b, t) => [(1 - t) * (1 - t) * a[0] + 2 * (1 - t) * t * c[0] + t * t * b[0], (1 - t) * (1 - t) * a[1] + 2 * (1 - t) * t * c[1] + t * t * b[1]];
    const smoothPoly = (pts, per) => {
      const out = [pts[0].slice()];
      let cur = pts[0];
      for (let i = 1; i < pts.length - 1; i++) {
        const c = pts[i], n = pts[i + 1], end = [(c[0] + n[0]) / 2, (c[1] + n[1]) / 2];
        for (let s = 1; s <= per; s++) out.push(qpt(cur, c, end, s / per));
        cur = end;
      }
      const last = pts[pts.length - 1];
      for (let s = 1; s <= per; s++) out.push([cur[0] + (last[0] - cur[0]) * s / per, cur[1] + (last[1] - cur[1]) * s / per]);
      return out;
    };
    const buildTrack = (pts) => {
      const poly = smoothPoly(pts, 12);
      const P = poly.map((uv) => ({ uv: uv }));
      let acc = 0; P[0].s = 0;
      for (let i = 1; i < P.length; i++) {
        const a = to3D(P[i - 1].uv[0], P[i - 1].uv[1]), b = to3D(P[i].uv[0], P[i].uv[1]);
        acc += Math.hypot(b[0] - a[0], b[2] - a[2]); P[i].s = acc;
      }
      for (let i = 0; i < P.length; i++) P[i].t = acc ? P[i].s / acc : 0;
      return P;
    };
    const tracks = fullPaths.map(buildTrack);

    // ---- superficie de los caminos de montaña: plataforma 3D con rasante, peralte, taludes y sombra
    const roadProfiles = [];
    (() => {
      const W2 = 0.052, LIFT = 0.012;
      const surfMat = new THREE.MeshStandardMaterial({ color: 0xf4f6f8, roughness: 0.94, metalness: 0.0, side: THREE.DoubleSide });
      const fillMat = new THREE.MeshStandardMaterial({ color: 0xd6dde4, roughness: 0.96, metalness: 0.0, side: THREE.DoubleSide, flatShading: true });
      const cutMat = new THREE.MeshStandardMaterial({ color: 0xc2ccd6, roughness: 0.96, metalness: 0.0, side: THREE.DoubleSide, flatShading: true });
      const edgeMat = new THREE.LineBasicMaterial({ color: 0x8fa3b8, transparent: true, opacity: 0.5 });
      ROADS.forEach((road, ri) => {
        const pl = smoothPoly(road, 12).filter((p) => p[0] <= 0.437 && p[0] >= -0.02);
        const N = pl.length; if (N < 8) return;
        // rasante: pendiente controlada (media móvil mezclada con el terreno)
        const hRaw = pl.map((p) => disp(p[0], p[1]) * HSCALE);
        const world = pl.map((p) => [(p[0] - 0.5) * Wp, (p[1] - 0.5) * Dp]);
        // rasante de ingeniería: suavizado corto y después limitación de rampa por longitud real
        const hFin = hRaw.map((h, i) => {
          let s = 0, c = 0;
          for (let k = -3; k <= 3; k++) { const j = i + k; if (j < 0 || j >= N) continue; s += hRaw[j]; c++; }
          return h + (s / c - h) * 0.35;
        });
        const dsW = [];
        for (let i = 1; i < N; i++) dsW.push(Math.hypot(world[i][0] - world[i - 1][0], world[i][1] - world[i - 1][1]) || 1e-5);
        const GMAXV = 0.17;
        for (let pass = 0; pass < 3; pass++) {
          for (let i = 1; i < N; i++) {
            const m = GMAXV * dsW[i - 1];
            if (hFin[i] - hFin[i - 1] > m) hFin[i] = hFin[i - 1] + m;
            else if (hFin[i - 1] - hFin[i] > m) hFin[i] = hFin[i - 1] - m;
          }
          for (let i = N - 2; i >= 0; i--) {
            const m = GMAXV * dsW[i];
            if (hFin[i] - hFin[i + 1] > m) hFin[i] = hFin[i + 1] + m;
            else if (hFin[i + 1] - hFin[i] > m) hFin[i] = hFin[i + 1] - m;
          }
        }
        const L = [], R = [], Lg = [], Rg = [], banks = [];
        for (let i = 0; i < N; i++) {
          const a = world[Math.max(0, i - 1)], b = world[Math.min(N - 1, i + 1)];
          let tx3 = b[0] - a[0], tz3 = b[1] - a[1];
          const tl = Math.hypot(tx3, tz3) || 1e-5; tx3 /= tl; tz3 /= tl;
          const nx3 = -tz3, nz3 = tx3;
          const lgv = disp(pl[i][0] + nx3 * W2 / Wp, pl[i][1] + nz3 * W2 / Dp) * HSCALE;
          const rgv = disp(pl[i][0] - nx3 * W2 / Wp, pl[i][1] - nz3 * W2 / Dp) * HSCALE;
          // peralte: la plataforma se inclina hacia el interior de la curva
          let bank = 0;
          if (i > 1 && i < N - 2) {
            const a2 = world[i - 2], b2 = world[i + 2];
            const t1x = world[i][0] - a2[0], t1z = world[i][1] - a2[1];
            const t2x = b2[0] - world[i][0], t2z = b2[1] - world[i][1];
            const cr = t1x * t2z - t1z * t2x;
            bank = Math.max(-0.03, Math.min(0.03, cr * 2.2));
          }
          // la rasante nunca cae bajo el terreno de su franja: el firme no puede quedar enterrado
          // en cresta la plataforma se hunde un poco más: sin repisas que corten la silueta
          const h = Math.max(hFin[i], hRaw[i] - 0.011, Math.max(lgv, rgv) - 0.02) + LIFT;
          L.push([world[i][0] + nx3 * W2, h + bank, world[i][1] + nz3 * W2]);
          R.push([world[i][0] - nx3 * W2, h - bank, world[i][1] - nz3 * W2]);
          Lg.push(lgv);
          Rg.push(rgv);
          banks.push(bank);
        }
        const strip = (A, B, mat) => {
          const pos = [], idx = [];
          for (let i = 0; i < N; i++) { pos.push(A[i][0], A[i][1], A[i][2], B[i][0], B[i][1], B[i][2]); }
          for (let i = 0; i < N - 1; i++) { const k = i * 2; idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2); }
          const g = new THREE.BufferGeometry();
          g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
          g.setIndex(idx); g.computeVertexNormals();
          scene.add(new THREE.Mesh(g, mat));
        };
        strip(L, R, surfMat);
        // taludes: desmonte donde el terreno queda por encima, terraplén donde queda por debajo
        [[L, Lg], [R, Rg]].forEach((sd) => {
          const E = sd[0], G = sd[1];
          const MAXSK = 0.11, MINSK = 0.02;
          const buf = { cut: { pos: [], idx: [], vi: 0 }, fill: { pos: [], idx: [], vi: 0 } };
          const segs = [];
          for (let i = 0; i < N; i++) {
            const gap = E[i][1] - G[i];
            const drop = Math.max(MINSK, Math.min(MAXSK, Math.abs(gap)));
            segs.push({ e: E[i], g: [E[i][0], E[i][1] - drop - 0.004, E[i][2]], on: Math.abs(gap) > 0.03, cut: gap < 0 });
          }
          for (let i = 0; i < N - 1; i++) {
            if (!segs[i].on && !segs[i + 1].on) continue;
            const a = segs[i], b = segs[i + 1];
            const t = (a.cut || b.cut) ? buf.cut : buf.fill;
            t.pos.push(a.e[0], a.e[1], a.e[2], a.g[0], a.g[1], a.g[2], b.e[0], b.e[1], b.e[2], b.g[0], b.g[1], b.g[2]);
            t.idx.push(t.vi, t.vi + 1, t.vi + 2, t.vi + 1, t.vi + 3, t.vi + 2); t.vi += 4;
          }
          [['cut', cutMat], ['fill', fillMat]].forEach((kk) => {
            const t = buf[kk[0]];
            if (!t.pos.length) return;
            const g = new THREE.BufferGeometry();
            g.setAttribute('position', new THREE.Float32BufferAttribute(t.pos, 3));
            g.setIndex(t.idx); g.computeVertexNormals();
            scene.add(new THREE.Mesh(g, kk[1]));
          });
        });
        // firme: eje discontinuo y bordes de arcén
        const mkLine = (P, mat) => {
          const g = new THREE.BufferGeometry().setFromPoints(P.map((p) => new THREE.Vector3(p[0], p[1] + 0.004, p[2])));
          const ln = new THREE.Line(g, mat);
          if (mat.isLineDashedMaterial) ln.computeLineDistances();
          scene.add(ln);
        };
        mkLine(L, edgeMat); mkLine(R, edgeMat);
        const axis = [];
        for (let i = 0; i < N; i++) axis.push([(L[i][0] + R[i][0]) / 2, (L[i][1] + R[i][1]) / 2, (L[i][2] + R[i][2]) / 2]);
        mkLine(axis, new THREE.LineDashedMaterial({ color: 0x5b7893, transparent: true, opacity: 0.55, dashSize: 0.075, gapSize: 0.06 }));
        // perfil publicado: los nodos circulan exactamente sobre este eje
        roadProfiles[ri] = { pts: axis, bank: banks };
        // sombra propia: banda oscura desplazada al lado de sombra (luz desde arriba-izquierda)
        const shA = [], shB = [];
        for (let i = 0; i < N; i++) {
          const gy = Math.min(Lg[i], Rg[i]);
          shA.push([R[i][0] + 0.035, gy + 0.006, R[i][2] + 0.05]);
          shB.push([R[i][0] + 0.035 + W2 * 1.15, gy + 0.006, R[i][2] + 0.05 + W2 * 0.7]);
        }
        const shPos = [], shIdx = [];
        for (let i = 0; i < N; i++) shPos.push(shA[i][0], shA[i][1], shA[i][2], shB[i][0], shB[i][1], shB[i][2]);
        for (let i = 0; i < N - 1; i++) { const k = i * 2; shIdx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2); }
        const shG = new THREE.BufferGeometry();
        shG.setAttribute('position', new THREE.Float32BufferAttribute(shPos, 3));
        shG.setIndex(shIdx);
        scene.add(new THREE.Mesh(shG, new THREE.MeshBasicMaterial({ color: 0x2b3d55, transparent: true, opacity: 0.13, depthWrite: false })));
      });
    })();
    const trackAt = (tr, p) => {
      const q = clamp01(p);
      let lo = 0, hi = tr.length - 1;
      while (lo < hi - 1) { const mid = (lo + hi) >> 1; if (tr[mid].t <= q) lo = mid; else hi = mid; }
      const a = tr[lo], b = tr[hi], span = (b.t - a.t) || 1, k = (q - a.t) / span;
      return to3D(a.uv[0] + (b.uv[0] - a.uv[0]) * k, a.uv[1] + (b.uv[1] - a.uv[1]) * k);
    };
    // altura y peralte del firme bajo un punto del trazado (montaña); fuera de la cinta, el punto original
    const MEND = (0.437 - 0.5) * Wp;
    const surfPos = (road, q3) => {
      const pr = roadProfiles[road];
      if (!pr || q3[0] > MEND) return { onRoad: false, y: q3[1], bank: 0 };
      let bi = 0, bd = 1e9;
      for (let i = 0; i < pr.pts.length; i += 2) {
        const dx = pr.pts[i][0] - q3[0], dz = pr.pts[i][2] - q3[2];
        const d = dx * dx + dz * dz;
        if (d < bd) { bd = d; bi = i; }
      }
      if (bd > 0.03) return { onRoad: false, y: q3[1], bank: 0 };
      return { onRoad: true, y: pr.pts[bi][1], bank: pr.bank[bi] };
    };
    // puntos de frenada: la bifurcación del desvío de cada ruta, en coordenadas de mundo
    const brakePts = DETOURS.map((dt) => dt ? [(dt.A[0] - 0.5) * Wp, (dt.A[1] - 0.5) * Dp] : null);
    const pathAt = (pts, p) => trackAt(buildTrack(pts), p);
    const routeAt = (p) => trackAt(tracks[1], p);
    // nodo con volumen: núcleo mate iluminado + envolvente traslúcida + estela
    const dotGeo = new THREE.OctahedronGeometry(0.082, 0);
    const shellGeo = new THREE.OctahedronGeometry(0.118, 1);
    // proa y popa: el vértice delantero se alarga y la popa se recoge — el nodo apunta a donde va
    [[dotGeo, 1.62, 0.74], [shellGeo, 1.48, 0.8]].forEach((gg) => {
      const pa = gg[0].attributes.position;
      for (let i = 0; i < pa.count; i++) { const x = pa.getX(i); pa.setX(i, x > 0 ? x * gg[1] : x * gg[2]); }
      pa.needsUpdate = true; gg[0].computeVertexNormals();
    });
    const trailGeo = new THREE.SphereGeometry(0.062, 12, 12);
    const flowDots = [];
    for (let r = 0; r < FR.length; r++) for (let s = 0; s < 2; s++) {
      const m = new THREE.Mesh(dotGeo, new THREE.MeshStandardMaterial({ color: 0xdce7f2, roughness: 0.3, metalness: 0.18, emissive: 0x2f4f72, emissiveIntensity: 0.5, transparent: true, flatShading: true }));
      scene.add(m);
      const sh = new THREE.Mesh(shellGeo, new THREE.MeshBasicMaterial({ color: 0x6e96be, transparent: true, opacity: 0.14, depthWrite: false }));
      scene.add(sh);
      // estela continua: dos tramos de línea (cercano y lejano) con buffers preasignados
      const mkTrail = (op, n) => {
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
        const ln = new THREE.Line(g, new THREE.LineBasicMaterial({ color: 0x8fb0d0, transparent: true, opacity: op, depthWrite: false }));
        scene.add(ln);
        return { line: ln, n: n };
      };
      const trailNear = mkTrail(0.5, 8), trailFar = mkTrail(0.18, 8);
      // sombra de contacto: elipse oscura pegada al firme, lo que ancla el nodo a la superficie
      const halo = new THREE.Mesh(new THREE.CircleGeometry(0.082, 20), new THREE.MeshBasicMaterial({ color: 0x22344a, transparent: true, opacity: 0.18, depthWrite: false }));
      halo.rotation.x = -Math.PI / 2; scene.add(halo);
      flowDots.push({ mesh: m, shell: sh, trailNear: trailNear, trailFar: trailFar, halo: halo, road: r, phase: (s * 0.5 + r * 0.17) % 1, lastX: -99 });
    }
    const dot = flowDots[0].mesh;
    // convergence ring at the merge point (coordinación)
    const cvRing = new THREE.Mesh(new THREE.RingGeometry(0.9, 1.0, 48), new THREE.MeshBasicMaterial({ color: 0x6e96be, transparent: true, opacity: 0.2, side: THREE.DoubleSide }));
    cvRing.rotation.x = -Math.PI / 2; cvRing.position.set((0.44 - 0.5) * Wp, 0.07, 0); cvRing.visible = false;
    // ---- Corredor Institucional de Coordinación: volumen de cristal multicapa que se construye alrededor del flujo
    const corridor = new THREE.Group();
    const CX0 = (0.565 - 0.5) * Wp, CX1 = (0.95 - 0.5) * Wp, CZ = 0;
    const cwid = 0.62, floorY = 0.05, ceilY = 0.82, clen = CX1 - CX0, cmid = (CX0 + CX1) / 2, midY = (floorY + ceilY) / 2;
    const warm = 0xeceef1, steel = 0x6f88a4, bev = 0.66;
    const glMat = (op) => new THREE.LineBasicMaterial({ color: steel, transparent: true, opacity: op });
    const L = (a, b, m) => new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(a[0], a[1], a[2]), new THREE.Vector3(b[0], b[1], b[2])]), m);
    // beveled hexagonal cross-section: 6 longitudinal edges give a glass-volume silhouette (not a flat box)
    const eBase = BRIDGE_Y + floorY + 0.03;
    const edges = [[-cwid * bev, eBase], [-cwid, midY], [-cwid * bev, ceilY], [cwid * bev, ceilY], [cwid, midY], [cwid * bev, eBase]];
    const edgeLines = [];
    // sin aristas al nivel del suelo: dejaban un trazado de líneas visible bajo el puente
    edges.forEach(([zz, yy], i) => { if (i === 0 || i === 5) return; const ln = L([CX0, yy, CZ + zz], [CX1, yy, CZ + zz], glMat(0.24)); corridor.add(ln); edgeLines.push(ln); });
    corridor.add(L([CX0, midY, CZ], [CX1, midY, CZ], glMat(0.18)));
    // 5 capacidades translúcidas apiladas (FX / Compliance / Treasury / Settlement / Liquidity) — sin texto
    const layers = [];
    for (let i = 0; i < 5; i++) {
      // las capas viven por ENCIMA del tablero: por debajo se leían como líneas sueltas bajo el puente
      const lBase = BRIDGE_Y + floorY + 0.03;
      const ly = lBase + (ceilY - lBase) * (i + 0.5) / 5, tt = (i + 0.5) / 5;
      const hw = cwid * (bev + (1 - bev) * (1 - Math.abs(tt - 0.5) * 2));
      const m = new THREE.Mesh(new THREE.PlaneGeometry(clen, hw * 2), new THREE.MeshBasicMaterial({ color: i % 2 ? steel : warm, transparent: true, opacity: 0.05, side: THREE.DoubleSide, depthWrite: false }));
      m.rotation.x = -Math.PI / 2; m.position.set(cmid, ly, CZ); corridor.add(m);
      layers.push({ mesh: m, base: 0.055 });
    }
    // checkpoints dinámicos: planos que validan el flujo al pasar (se iluminan y regresan lento)
    const checks = [], nchk = 4;
    for (let i = 0; i < nchk; i++) {
      const cx = CX0 + clen * (i + 0.5) / nchk;
      const ckBase = BRIDGE_Y + floorY + 0.03;
      const m = new THREE.Mesh(new THREE.PlaneGeometry(cwid * 2 * bev, ceilY - ckBase), new THREE.MeshBasicMaterial({ color: warm, transparent: true, opacity: 0.04, side: THREE.DoubleSide, depthWrite: false }));
      m.position.set(cx, (ckBase + ceilY) / 2, CZ); corridor.add(m);
      corridor.add(L([cx, floorY, CZ - cwid * bev], [cx, ceilY, CZ - cwid * bev], glMat(0.2)));
      corridor.add(L([cx, floorY, CZ + cwid * bev], [cx, ceilY, CZ + cwid * bev], glMat(0.2)));
      checks.push({ mesh: m, cx: cx, lit: 0 });
    }
    corridor.position.y = BRIDGE_Y;
    // el volumen de cristal sobre el tablero se leía como una pared tras los pilonos:
    // la estructura atirantada ya cuenta el corredor por sí sola
    corridor.visible = false;
    scene.add(corridor);

    // ---- viaducto: tablero con canto, vigas laterales, pilas y sombra en el terreno
    const deckTop = BRIDGE_Y + floorY;
    const deckTh = 0.055, halfW = cwid * bev * 0.94;
    const CAMBER = 0.075;
    const camberAt = (x) => CAMBER * Math.sin(Math.PI * Math.max(0, Math.min(1, (x - CX0) / clen)));
    const deckMat = new THREE.MeshStandardMaterial({ color: 0xf2f4f6, roughness: 0.9, metalness: 0.0 });
    const sideMat = new THREE.MeshStandardMaterial({ color: 0xb6c2ce, roughness: 0.85, metalness: 0.0 });
    const pierMat = new THREE.MeshStandardMaterial({ color: 0xd2dae1, roughness: 0.9, metalness: 0.0 });
    const railMat = new THREE.LineBasicMaterial({ color: 0x7f97ae, transparent: true, opacity: 0.5 });
    const shadeMat = new THREE.MeshBasicMaterial({ color: 0x2b3d55, transparent: true, opacity: 0.18, depthWrite: false });

    // ---- tablero: cajón trapezoidal con voladizos, extruido a lo largo de la contraflecha
    const nSeg = 40, segLen = clen / nSeg;
    const deckShape = new THREE.Shape();
    const wT = halfW, wB = halfW * 0.52, hBox = deckTh * 2.2, tSlab = deckTh * 0.5;
    deckShape.moveTo(-wT, 0);
    deckShape.lineTo(wT, 0);
    deckShape.lineTo(wT, -tSlab);
    deckShape.lineTo(wB, -hBox);
    deckShape.lineTo(-wB, -hBox);
    deckShape.lineTo(-wT, -tSlab);
    deckShape.closePath();
    const spine = [];
    for (let i = 0; i <= nSeg; i++) {
      const sx = CX0 + clen * (i / nSeg);
      spine.push(new THREE.Vector3(sx, deckTop + camberAt(sx), CZ));
    }
    const deckCurve = new THREE.CatmullRomCurve3(spine, false, 'catmullrom', 0.02);
    const deckGeo = new THREE.ExtrudeGeometry(deckShape, { steps: nSeg, extrudePath: deckCurve, curveSegments: 4 });
    scene.add(new THREE.Mesh(deckGeo, deckMat));
    // cornisa: filo sombreado bajo el voladizo, a ambos lados
    [-1, 1].forEach((sgn) => {
      const corn = [];
      for (let i = 0; i <= nSeg; i++) {
        const sx = CX0 + clen * (i / nSeg);
        corn.push(new THREE.Vector3(sx, deckTop + camberAt(sx) - tSlab, CZ + sgn * halfW));
      }
      const cg = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(corn), nSeg, 0.016, 6, false);
      scene.add(new THREE.Mesh(cg, sideMat));
      // barandilla: pasamanos continuo sobre montantes regulares
      const railPts = [];
      for (let i = 0; i <= nSeg; i++) {
        const sx = CX0 + clen * (i / nSeg);
        railPts.push(new THREE.Vector3(sx, deckTop + camberAt(sx) + 0.075, CZ + sgn * (halfW - 0.02)));
      }
      scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(railPts), railMat));
      for (let i = 0; i <= 24; i++) {
        const sx = CX0 + clen * (i / 24);
        const y0 = deckTop + camberAt(sx);
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.075, 0.012), sideMat);
        post.position.set(sx, y0 + 0.037, CZ + sgn * (halfW - 0.02));
        scene.add(post);
      }
    });
    // juntas de dovela: el tablero se lee construido por segmentos
    for (let i = 1; i < 16; i++) {
      const sx = CX0 + clen * (i / 16);
      const y = deckTop + camberAt(sx);
      const j = new THREE.Line(new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(sx, y + 0.003, CZ - halfW), new THREE.Vector3(sx, y + 0.003, CZ + halfW)
      ]), new THREE.LineBasicMaterial({ color: 0x9fb0c2, transparent: true, opacity: 0.3 }));
      scene.add(j);
    }
    // ---- pilas: dos principales bajo los pilonos, tres secundarias entre vanos
    const PYL = [0.30, 0.70];
    const pierAt = [0.075, PYL[0], 0.50, PYL[1], 0.925];
    const pierCaps = [];
    pierAt.forEach((f, i) => {
      const main = f === PYL[0] || f === PYL[1];
      const pxx = CX0 + clen * f;
      const gy = disp(pxx / Wp + 0.5, 0.5) * HSCALE;
      const dTopHere = deckTop + camberAt(pxx);
      const boxBot = dTopHere - hBox;
      const h = Math.max(0.1, boxBot - 0.02 - gy);
      const rTop = main ? 0.075 : 0.048, rBot = main ? 0.105 : 0.062;
      const spread = main ? 0.46 : 0.42;
      [-1, 1].forEach((sgn) => {
        const zz = sgn * halfW * spread;
        const col = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBot, h, 16), pierMat);
        col.position.set(pxx, gy + h / 2, CZ + zz);
        scene.add(col);
        const foot = new THREE.Mesh(new THREE.CylinderGeometry(rBot * 1.9, rBot * 2.15, 0.03, 16), sideMat);
        foot.position.set(pxx, gy + 0.016, CZ + zz);
        scene.add(foot);
      });
      // riostra entre fustes en las pilas altas
      if (h > 0.42) {
        const tie = new THREE.Mesh(new THREE.BoxGeometry(rTop * 1.2, 0.026, halfW * spread * 2), sideMat);
        tie.position.set(pxx, gy + h * 0.55, CZ);
        scene.add(tie);
      }
      const cap = new THREE.Mesh(new THREE.BoxGeometry(main ? 0.17 : 0.12, 0.032, halfW * (main ? 1.28 : 1.06)), new THREE.MeshStandardMaterial({ color: 0xc5cfd8, roughness: 0.88, metalness: 0.0, emissive: 0x2f4f72, emissiveIntensity: 0 }));
      cap.position.set(pxx, boxBot - 0.014, CZ);
      scene.add(cap);
      pierCaps.push({ mesh: cap, x: pxx, lit: 0 });
    });
    // ---- estribo: el tablero muere sobre un macizo apoyado en el terreno
    (() => {
      const gy = disp(CX1 / Wp + 0.5, 0.5) * HSCALE;
      const dTop = deckTop + camberAt(CX1);
      const boxBot = dTop - hBox;
      const seatY = boxBot - 0.02;
      const bw = halfW * 1.3, len = 0.30, cxm = CX1 - len * 0.32;
      const hM = Math.max(0.12, seatY - gy);
      const body = new THREE.Mesh(new THREE.BoxGeometry(len, hM, bw * 2), pierMat);
      body.position.set(cxm, gy + hM / 2, CZ);
      scene.add(body);
      const foot = new THREE.Mesh(new THREE.BoxGeometry(len * 1.24, 0.036, bw * 2.24), sideMat);
      foot.position.set(cxm, gy + 0.018, CZ);
      scene.add(foot);
      const seat = new THREE.Mesh(new THREE.BoxGeometry(len * 0.6, 0.03, halfW * 1.28), new THREE.MeshStandardMaterial({ color: 0xc5cfd8, roughness: 0.88, metalness: 0.0 }));
      seat.position.set(CX1 - len * 0.3, seatY + 0.015, CZ);
      scene.add(seat);
      // muro de guarda: se levanta tras la testa y cierra el corte del cajón
      const bTop = dTop + 0.05, bBot = seatY, bH = bTop - bBot;
      const back = new THREE.Mesh(new THREE.BoxGeometry(0.06, bH, halfW * 1.86), pierMat);
      back.position.set(CX1 + 0.04, (bTop + bBot) / 2, CZ);
      scene.add(back);
      // aletas en talud: reconducen el terreno a ambos lados
      [-1, 1].forEach((sgn) => {
        const wl = new THREE.Mesh(new THREE.BoxGeometry(len * 1.45, hM * 0.7, 0.028), sideMat);
        wl.position.set(cxm + len * 0.24, gy + hM * 0.35, CZ + sgn * bw);
        wl.rotation.y = sgn * 0.13;
        scene.add(wl);
      });
    })();
    // ---- atirantado: dos pilonos sobre el tablero con abanicos de tirantes a ambos lados
    const cableMat = new THREE.LineBasicMaterial({ color: 0x7f97ae, transparent: true, opacity: 0.46 });
    const pylonMat = new THREE.MeshStandardMaterial({ color: 0xdde4ea, roughness: 0.86, metalness: 0.02 });
    // pilonos en A sobre las pilas principales: los mástiles convergen arriba
    PYL.forEach((f) => {
      const px = CX0 + clen * f;
      const dTop = deckTop + camberAt(px);
      const PH = clen * 0.20;
      const zBase = halfW * 0.92, zApex = halfW * 0.16;
      const apexY = dTop + PH;
      [-1, 1].forEach((sgn) => {
        const b = new THREE.Vector3(px, dTop - hBox * 0.6, CZ + sgn * zBase);
        const a = new THREE.Vector3(px, apexY, CZ + sgn * zApex);
        const len = b.distanceTo(a);
        const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.052, len, 14), pylonMat);
        mast.position.copy(b).lerp(a, 0.5);
        mast.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), a.clone().sub(b).normalize());
        scene.add(mast);
      });
      // remate y riostra del cabezal
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.09, zApex * 2 + 0.07), pylonMat);
      head.position.set(px, apexY - 0.03, CZ);
      scene.add(head);
      const tie = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, zBase * 1.55), pylonMat);
      tie.position.set(px, dTop + PH * 0.42, CZ);
      scene.add(tie);
      // tirantes en abanico: anclan al borde del tablero, más tendidos cuanto más lejos
      [-1, 1].forEach((sgn) => {
        const top = new THREE.Vector3(px, apexY - 0.05, CZ + sgn * zApex * 0.9);
        [-1, 1].forEach((dir) => {
          for (let k = 1; k <= 6; k++) {
            const reach = clen * 0.175 * Math.pow(k / 6, 0.92);
            const ax = px + dir * reach;
            if (ax < CX0 + 0.06 || ax > CX1 - 0.06) continue;
            const ay = deckTop + camberAt(ax) + 0.008;
            const anchor = new THREE.Vector3(ax, ay, CZ + sgn * (halfW - 0.03));
            const g = new THREE.TubeGeometry(new THREE.LineCurve3(top, anchor), 1, 0.0055, 4, false);
            scene.add(new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0x8296ab, transparent: true, opacity: 0.62 })));
            const an = new THREE.Mesh(new THREE.BoxGeometry(0.022, 0.03, 0.022), sideMat);
            an.position.copy(anchor);
            scene.add(an);
          }
        });
      });
    });
    const passRings = [];
    for (let i = 0; i < 6; i++) {
      const rg = new THREE.Mesh(new THREE.RingGeometry(0.12, 0.16, 32), new THREE.MeshBasicMaterial({ color: 0x9fbcd8, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false }));
      rg.rotation.x = -Math.PI / 2; rg.visible = false; scene.add(rg);
      passRings.push({ mesh: rg, t0: -1, x: 0 });
    }
    // acuse de llegada: anillo que se cierra en el destino
    const arrRing = new THREE.Mesh(new THREE.RingGeometry(0.9, 1.0, 64), new THREE.MeshBasicMaterial({ color: 0x427092, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false }));
    arrRing.rotation.x = -Math.PI / 2;
    arrRing.position.set(CX1 + 0.55, deckTop * 0.34 + 0.03, CZ);
    scene.add(arrRing);
    const arrDot = new THREE.Mesh(new THREE.SphereGeometry(0.075, 16, 12), new THREE.MeshBasicMaterial({ color: 0x2e4a6a, transparent: true, opacity: 0 }));
    arrDot.position.copy(arrRing.position);
    scene.add(arrDot);
    // resalte de ruta al pasar el puntero: una se refuerza, las otras se atenúan
    const roadHi = tracks.map((tr) => {
      const pts = [];
      for (let i = 0; i <= 90; i++) { const q = trackAt(tr, i / 90); const s3 = surfPos(tracks.indexOf(tr), q); pts.push(new THREE.Vector3(q[0], (s3.onRoad ? s3.y : q[1] + (q[0] > CX0 ? camberAt(q[0]) : 0)) + 0.028, q[2])); }
      const ln = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x2e4a6a, transparent: true, opacity: 0, depthWrite: false }));
      scene.add(ln);
      return { line: ln, pts: pts, cur: 0 };
    });
    self._frHover = -1;
    let ringCursor = 0;
    const fireRing = (x, tnow) => {
      const r = passRings[ringCursor % passRings.length]; ringCursor++;
      r.t0 = tnow; r.x = x; r.mesh.visible = true;
      r.mesh.position.set(x, deckTop + camberAt(x) + 0.012, CZ);
    };
    // --- plataforma del núcleo: plinto anular alrededor del monograma (no lo tapa)
    const HUBX3 = (HUBX - 0.5) * Wp, HUBZ3 = (HUBY - 0.5) * Dp;
    const plinth = new THREE.Mesh(new THREE.CylinderGeometry(1.02, 1.06, 0.055, 56, 1, true), sideMat);
    plinth.position.set(HUBX3, 0.028, HUBZ3);
    scene.add(plinth);
    const plinthTop = new THREE.Mesh(new THREE.CircleGeometry(1.02, 56), new THREE.MeshStandardMaterial({ color: 0xe7eaee, roughness: 0.92, metalness: 0.0, side: THREE.DoubleSide, transparent: true, opacity: 0.62, emissive: 0x35597d, emissiveIntensity: 0 }));
    plinthTop.rotation.x = -Math.PI / 2;
    plinthTop.position.set(HUBX3, 0.056, HUBZ3);
    scene.add(plinthTop);
    // el monograma se repinta en negro sobre la losa (la plataforma completa tapaba el del terreno)
    const logoCv = document.createElement('canvas'); logoCv.width = 512; logoCv.height = 512;
    const logoTex = new THREE.CanvasTexture(logoCv);
    const logoMesh = new THREE.Mesh(new THREE.PlaneGeometry(1.04, 1.04),
      new THREE.MeshBasicMaterial({ map: logoTex, transparent: true, depthWrite: false, depthTest: false, opacity: 0 }));
    logoMesh.rotation.x = -Math.PI / 2;
    logoMesh.position.set(HUBX3, 0.06, HUBZ3 + 0.07);
    logoMesh.renderOrder = 20;
    scene.add(logoMesh);
    const paintLogo = () => {
      if (!logoImg || !logoImg.naturalWidth) return;
      const ar = logoImg.naturalHeight / logoImg.naturalWidth;
      logoCv.width = 512; logoCv.height = Math.max(2, Math.round(512 * ar));
      const lx = logoCv.getContext('2d');
      lx.clearRect(0, 0, logoCv.width, logoCv.height);
      lx.drawImage(logoImg, 0, 0, logoCv.width, logoCv.height);
      lx.globalCompositeOperation = 'source-in';
      lx.fillStyle = '#0B1A2B';
      lx.fillRect(0, 0, logoCv.width, logoCv.height);
      lx.globalCompositeOperation = 'source-over';
      // el webp del monograma trae un fondo casi transparente (alfa 1-39) en el 90% del lienzo:
      // sobre la losa se leía como una veladura moteada alrededor del logo
      const ldat = lx.getImageData(0, 0, logoCv.width, logoCv.height), ld = ldat.data;
      for (let i = 3; i < ld.length; i += 4) {
        const a = ld[i];
        ld[i] = a <= 44 ? 0 : Math.min(255, Math.round((a - 44) * 255 / 106));
      }
      lx.putImageData(ldat, 0, 0);
      logoTex.needsUpdate = true;
      logoMesh.geometry.dispose();
      logoMesh.geometry = new THREE.PlaneGeometry(1.04, 1.04 * ar);
      // el monograma se endereza hasta quedar casi perpendicular al eje de cámara:
      // se lee completo, apoyado en el centro de la losa
      const lh2 = (1.04 * ar) / 2, tilt = 0.68;
      logoMesh.rotation.x = -tilt;
      logoMesh.userData.baseY = 0.062 + lh2 * Math.cos(tilt) + 0.13;
      logoMesh.position.set(HUBX3, logoMesh.userData.baseY, HUBZ3 - lh2 * Math.sin(tilt));
      logoMesh.material.opacity = 1;
    };
    self._paintHubLogo = paintLogo;
    paintLogo();
    // los degradados radiales de canvas salen tramados (ruido de ±1 por canal): ampliados sobre la losa
    // ese tramado se leía como un moteado de colores. Se calculan a mano, sin trama y sin mipmaps.
    const falloffTex = (size, rgb, prof) => {
      const fcv = document.createElement('canvas'); fcv.width = fcv.height = size;
      const fx2 = fcv.getContext('2d');
      const im = fx2.createImageData(size, size), dd = im.data, hf = (size - 1) / 2;
      for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
        const t = Math.min(1, Math.hypot(x - hf, y - hf) / hf), i4 = (y * size + x) * 4;
        dd[i4] = rgb[0]; dd[i4 + 1] = rgb[1]; dd[i4 + 2] = rgb[2];
        dd[i4 + 3] = Math.round(255 * Math.max(0, Math.min(1, prof(t))));
      }
      fx2.putImageData(im, 0, 0);
      const t2 = new THREE.CanvasTexture(fcv);
      t2.generateMipmaps = false; t2.minFilter = THREE.LinearFilter; t2.magFilter = THREE.LinearFilter;
      return t2;
    };
    // sombra de contacto: delata que el monograma flota sobre la losa
    const logoShadow = new THREE.Mesh(new THREE.CircleGeometry(0.42, 40),
      new THREE.MeshBasicMaterial({ map: falloffTex(256, [11, 26, 43], (t) => t < 0.5 ? 0.42 - 0.26 * (t / 0.5) : 0.16 * (1 - (t - 0.5) / 0.5)), transparent: true, opacity: 0.9, depthWrite: false, depthTest: false }));
    logoShadow.rotation.x = -Math.PI / 2;
    logoShadow.scale.set(1, 0.62, 1);
    logoShadow.position.set(HUBX3, 0.0635, HUBZ3 + 0.02);
    logoShadow.renderOrder = 18;
    scene.add(logoShadow);
    self._logoShadow = logoShadow;
    // halo de absorción: se enciende cuando un nodo se integra en el logo
    const hubGlowM = new THREE.Mesh(new THREE.CircleGeometry(1.0, 48), new THREE.MeshBasicMaterial({ color: 0x9FBFDB, map: falloffTex(256, [255, 255, 255], (t) => t < 0.55 ? 1 - 0.55 * (t / 0.55) : 0.45 * (1 - (t - 0.55) / 0.45)), transparent: true, opacity: 0, depthWrite: false }));
    hubGlowM.rotation.x = -Math.PI / 2;
    hubGlowM.position.set(HUBX3, 0.059, HUBZ3);
    hubGlowM.renderOrder = 19;
    scene.add(hubGlowM);
    // onda de fusión: anillo que se expande desde el borde de la losa al fundirse un nodo
    const fuseRing = new THREE.Mesh(new THREE.RingGeometry(0.955, 1.0, 48), new THREE.MeshBasicMaterial({ color: 0x7EA6C8, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false }));
    fuseRing.rotation.x = -Math.PI / 2;
    fuseRing.position.set(HUBX3, 0.061, HUBZ3);
    fuseRing.renderOrder = 19;
    scene.add(fuseRing);
    // segunda onda, más fina y tenue, desfasada: lectura de agua
    const fuseRing2 = new THREE.Mesh(new THREE.RingGeometry(0.972, 1.0, 48), new THREE.MeshBasicMaterial({ color: 0x7EA6C8, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false }));
    fuseRing2.rotation.x = -Math.PI / 2;
    fuseRing2.position.set(HUBX3, 0.0605, HUBZ3);
    fuseRing2.renderOrder = 19;
    scene.add(fuseRing2);
    // parámetro del trazado donde cada ruta entra al centro del logo
    const pHubArr = tracks.map((tr) => {
      let lo = 0.3, hi = 0.9;
      for (let it = 0; it < 24; it++) { const mid2 = (lo + hi) / 2; if (trackAt(tr, mid2)[0] < HUBX3) lo = mid2; else hi = mid2; }
      return (lo + hi) / 2;
    });
    // arcos de memoria: cada fusión deja un arco en el perímetro; al cerrarse el anillo, pulso y limpieza
    const hubArcs = new THREE.Group();
    hubArcs.position.set(HUBX3, 0.06, HUBZ3);
    hubArcs.rotation.x = -Math.PI / 2;
    scene.add(hubArcs);
    const ARCN = 12;
    // radiales de reconocimiento: una por ruta, del borde de la losa hacia su procedencia
    const hubRads = [0, 1, 2].map((ri) => {
      const q = trackAt(tracks[ri], Math.max(0, pHubArr[ri] - 0.05));
      const dx = q[0] - HUBX3, dz = q[2] - HUBZ3, dl = Math.hypot(dx, dz) || 1;
      const g = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(HUBX3 + dx / dl * 0.42, 0.062, HUBZ3 + dz / dl * 0.42),
        new THREE.Vector3(HUBX3 + dx / dl * 1.02, 0.062, HUBZ3 + dz / dl * 1.02)
      ]);
      const ln = new THREE.Line(g, new THREE.LineBasicMaterial({ color: 0x7EA6C8, transparent: true, opacity: 0 }));
      scene.add(ln);
      return ln;
    });
    // corredor de nacimiento: punto de luz que cruza la losa antes de materializarse el nodo
    const hubRunner = new THREE.Mesh(new THREE.SphereGeometry(0.042, 12, 10), new THREE.MeshBasicMaterial({ color: 0x9FBFDB, transparent: true, opacity: 0 }));
    scene.add(hubRunner);

    // --- rampa de acceso: losa inclinada desde la plataforma hasta el tablero
    // la rampa arranca en el borde exacto de la losa: el círculo del núcleo se ve completo
    const rx0 = HUBX3 + 1.03, ry0 = 0.058, rx1 = CX0, ry1 = deckTop - deckTh * 0.5;
    const rdx = rx1 - rx0, rdy = ry1 - ry0, rlen = Math.hypot(rdx, rdy);
    const ramp = new THREE.Mesh(new THREE.BoxGeometry(rlen, 0.07, halfW * 1.9), deckMat);
    ramp.position.set((rx0 + rx1) / 2, (ry0 + ry1) / 2, CZ);
    ramp.rotation.z = Math.atan2(rdy, rdx);
    scene.add(ramp);
    [-1, 1].forEach((sgn) => {
      const rg = new THREE.Mesh(new THREE.BoxGeometry(rlen, 0.1, 0.055), sideMat);
      rg.position.set((rx0 + rx1) / 2, (ry0 + ry1) / 2 - 0.02, CZ + sgn * (halfW * 0.95 + 0.03));
      rg.rotation.z = ramp.rotation.z;
      scene.add(rg);
    });
    // estribo en cuña al pie de la rampa
    const plate = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.022, halfW * 1.95), deckMat);
    plate.position.set(rx0 - 0.06, 0.068, CZ);
    scene.add(plate);
    const abut = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.12, halfW * 2.05), pierMat);
    abut.position.set(rx0 + 0.05, 0.06, CZ);
    scene.add(abut);
    // pila cero: apoyo intermedio de la rampa
    const p0x = rx0 + rdx * 0.55, p0y = ry0 + rdy * 0.55;
    [-1, 1].forEach((sgn) => {
      const col = new THREE.Mesh(new THREE.BoxGeometry(0.1, p0y - 0.02, 0.14), pierMat);
      col.position.set(p0x, (p0y - 0.02) / 2, CZ + sgn * halfW * 0.6);
      scene.add(col);
      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.028, 0.3), sideMat);
      foot.position.set(p0x, 0.015, CZ + sgn * halfW * 0.6);
      scene.add(foot);
    });

    // sombra del tablero: cae desplazada sobre la llanura y da altura real a la estructura
    const shCv = document.createElement('canvas'); shCv.width = 8; shCv.height = 64;
    const shx = shCv.getContext('2d');
    const shg = shx.createLinearGradient(0, 0, 0, 64);
    shg.addColorStop(0, 'rgba(43,61,85,0)'); shg.addColorStop(0.34, 'rgba(43,61,85,0.85)');
    shg.addColorStop(0.66, 'rgba(43,61,85,0.85)'); shg.addColorStop(1, 'rgba(43,61,85,0)');
    shx.fillStyle = shg; shx.fillRect(0, 0, 8, 64);
    const shTex = new THREE.CanvasTexture(shCv);
    const shade = new THREE.Mesh(new THREE.PlaneGeometry(clen + (CX0 - rx0) + 0.3, halfW * 2.6),
      new THREE.MeshBasicMaterial({ map: shTex, color: 0x2b3d55, transparent: true, opacity: 0.3, depthWrite: false }));
    shade.rotation.x = -Math.PI / 2;
    shade.position.set((rx0 + CX1) / 2 + 0.16, 0.012, CZ + halfW * 1.15);
    scene.add(shade);
    // el extremo derecho se desvanece en el fondo: la operación continúa
    const fadeCv = document.createElement('canvas'); fadeCv.width = 128; fadeCv.height = 8;
    const fctx = fadeCv.getContext('2d');
    const fgr = fctx.createLinearGradient(0, 0, 128, 0);
    fgr.addColorStop(0, 'rgba(246,247,248,0)'); fgr.addColorStop(0.5, 'rgba(246,247,248,0.5)'); fgr.addColorStop(0.82, 'rgba(246,247,248,0.88)'); fgr.addColorStop(1, 'rgba(246,247,248,0.99)');
    fctx.fillStyle = fgr; fctx.fillRect(0, 0, 128, 8);
    const fadeTex = new THREE.CanvasTexture(fadeCv);
    const fadeLen = clen * 0.42;
    const fadePlane = new THREE.Mesh(new THREE.PlaneGeometry(fadeLen, halfW * 5.2), new THREE.MeshBasicMaterial({ map: fadeTex, transparent: true, depthWrite: false }));
    fadePlane.rotation.x = -Math.PI / 2;
    fadePlane.position.set(CX1 - fadeLen / 2 + 0.35, deckTop + 0.16, CZ);
    scene.add(fadePlane);

    // final abierto: el corredor se abre en tres carriles (la operación continúa)
    // veta longitudinal sobre el tablero: la misma trama de líneas que el terreno
    [-0.62, -0.2, 0.2, 0.62].forEach((k) => {
      const n = 26, pts = [];
      for (let i = 0; i < n; i++) {
        const x = CX0 + clen * (i / (n - 1));
        pts.push(new THREE.Vector3(x, deckTop + camberAt(x) + 0.004, CZ + k * halfW));
      }
      const ln = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x8fa3b8, transparent: true, opacity: Math.abs(k) > 0.4 ? 0.3 : 0.16 }));
      scene.add(ln);
    });

    const fit = () => {
      const w = Math.max(320, cv.parentElement ? cv.parentElement.clientWidth : 1000);
      const h = Math.round(w * (isMobile ? 0.72 : 0.44));
      renderer.setSize(w, h, false); cv.style.width = '100%'; cv.style.height = h + 'px';
      cam.aspect = w / h;
      // campo horizontal fijo: en móvil el marco es más alto, y con fov vertical fijo la escena se recortaba a lo ancho
      const HTAN = Math.tan(15 * Math.PI / 180) * (1 / 0.44);
      cam.fov = 2 * Math.atan(HTAN / cam.aspect) * 180 / Math.PI;
      cam.updateProjectionMatrix();
    };
    const place = (px, py) => {
      cam.up.set(0, 1, 0);
      // vista oblicua a ~37°: el puente gana volumen y las montañas silueta
      cam.position.set(px * 0.5, 12.4, 16.4 + py * 0.5);
      cam.lookAt(px * 0.25, 0.55, -0.6);
    };

    const s0 = document.getElementById('bb-fr-s0'), s1 = document.getElementById('bb-fr-s1'), s2 = document.getElementById('bb-fr-s2');
    if (s0) { s0.style.color = '#8a8175'; s0.style.opacity = '0.9'; }
    if (s1) { s1.style.color = '#427092'; s1.style.opacity = '1'; }
    if (s2) { s2.style.color = '#46586e'; s2.style.opacity = '0.9'; }

    fit(); place(0, 0);
    self._frResize = () => { fit(); if (self._reduced) renderer.render(scene, cam); };
    window.addEventListener('resize', self._frResize);

    const frame = (t, pulse) => {
      // un solo anillo en el núcleo: pulsa al paso de un nodo, en reposo queda quieto
      const hage = self._hubHit ? (t - self._hubHit) / 1.35 : 9;
      if (hage < 1) {
        const he = hage * hage;
        ring.scale.setScalar(0.9 + he * 1.5); ring.material.opacity = 0.34 * (1 - hage) * (1 - hage);
        plinthTop.material.opacity = 0.62 + 0.2 * (1 - hage);
      } else {
        ring.scale.setScalar(1); ring.material.opacity = 0.1;
        plinthTop.material.opacity = 0.62;
      }
      const beat = hage < 0.45 ? 1 + 0.04 * Math.sin(Math.PI * (hage / 0.45)) : 1;
      plinth.scale.set(beat, 1, beat);

      // phase staging across the 10s loop: friction (restless) -> alignment -> calm
      const calm = smooth(0.45, 1, pulse);
      // el terreno ya no "respira": ese escalado periódico movía las laderas sobre las carreteras fijas
      mesh.scale.z = 1;
      let activity = 0, glowAcc = 0;
      for (let d = 0; d < flowDots.length; d++) {
        const fd = flowDots[d];
        const raw = (pulse * 0.78 + fd.phase) % 1;
        // perfil de velocidad: irregular en la montaña, frena al entrar a la rampa, acelera en el tablero
        // MT < M: la montaña se recorre un 10% más rápido; el resto del ciclo absorbe la diferencia
        const M = 0.56, MT = 0.509;
        let p;
        if (raw < MT) p = M * (raw / MT - 0.07 * Math.sin((raw / MT) * Math.PI * 3));
        else { const k = (raw - MT) / (1 - MT); p = M + (1 - M) * Math.pow(k, 1.22); }
        // fricción literal: el nodo del carril central se atasca y retrocede antes de retomar
        if (fd.road === 1 && raw > 0.20 && raw < 0.29) {
          const s = (raw - 0.20) / 0.09;
          p -= 0.038 * Math.sin(Math.PI * s) * (0.7 + 0.3 * Math.sin(s * 11));
        }
        // integración en el núcleo: el nodo se absorbe en el logo, este brilla, y el nodo sale al puente
        const pH = pHubArr[fd.road], HOLD = 0.055, EMIT = 0.028;
        let hubPh = -1;
        if (p > pH) {
          if (p < pH + HOLD) {
            hubPh = (p - pH) / HOLD;
            // la emisión ya avanza: el nodo cristaliza en marcha, no aparece parado
            p = hubPh > 0.65 ? pH + EMIT * ((hubPh - 0.65) / 0.35) : pH;
          }
          else { p = pH + EMIT + (p - pH - HOLD) * (1 - pH - EMIT) / (1 - pH - HOLD); }
        }
        const pos = trackAt(tracks[fd.road], p);
        // velocidad instantánea: alimenta el estirado del nodo y la longitud de la estela
        const dp = fd.pPrev === undefined ? 0.0017 : Math.max(0, p - fd.pPrev);
        fd.pPrev = p;
        const spdN = Math.min(1.7, dp * 620);
        fd.spd = fd.spd === undefined ? spdN : fd.spd + (spdN - fd.spd) * 0.12;
        const ahead = trackAt(tracks[fd.road], Math.min(1, p + 0.004));
        const rough = 1 - smooth(0.40, 0.56, p);
        const camb = pos[0] > CX0 ? camberAt(pos[0]) : 0;
        const bob = rough * 0.016 * Math.sin(t * 2.6 + d * 1.7) + camb;
        // el nodo circula sobre el firme: altura de la rasante construida, no del terreno crudo
        const sp3 = surfPos(fd.road, pos);
        // despeje mínimo: el vientre roza el firme; sin oscilación vertical en la montaña
        const CLEAR = sp3.onRoad ? 0.026 : 0.04;
        const tY = (sp3.onRoad ? sp3.y : pos[1] + camb) + CLEAR + (sp3.onRoad ? 0 : bob * 0.3);
        fd.sy = fd.sy === undefined ? tY : fd.sy + (tY - fd.sy) * 0.34; // suspensión: asentamiento suave
        fd.mesh.position.set(pos[0], fd.sy, pos[2]);
        const fade = smooth(0, 0.06, p) * smooth(1, 0.94, p);
        // normalización a través del corredor: el mismo nodo sale más brillante, definido y estable (sin cambiar color)
        const norm = smooth(CX0, CX1, pos[0]);
        const hv = self._frHover;
        const dTgt = (hv < 0 || hv === fd.road) ? 1 : 0.34;
        fd.dim = (fd.dim === undefined ? 1 : fd.dim) + (dTgt - (fd.dim === undefined ? 1 : fd.dim)) * 0.16;
        fd.mesh.material.opacity = ((0.5 + 0.4 * fade) * (0.84 + 0.16 * norm) + 0.14 * norm) * fd.dim;
        fd.mesh.material.emissiveIntensity = 0.42 + 0.3 * norm;
        // sobre el tablero (fondo claro) el núcleo se oscurece para no perderse
        // azul acero apagado y profundo: se distingue del terreno claro sin gritar
        fd.mesh.material.color.setRGB(
          0.33 - 0.12 * norm,
          0.45 - 0.13 * norm,
          0.61 - 0.15 * norm
        );
        // orientación completa sobre el trazado: rumbo, cabeceo por pendiente y alabeo en curva
        const behind = trackAt(tracks[fd.road], Math.max(0, p - 0.012));
        const yaw = Math.atan2(ahead[2] - pos[2], ahead[0] - pos[0]);
        const run = Math.hypot(ahead[0] - pos[0], ahead[2] - pos[2]) || 1e-4;
        const pitch = Math.atan2(ahead[1] - pos[1], run);
        const yawB = Math.atan2(pos[2] - behind[2], pos[0] - behind[0]);
        let dyaw = yaw - yawB;
        while (dyaw > Math.PI) dyaw -= Math.PI * 2;
        while (dyaw < -Math.PI) dyaw += Math.PI * 2;
        // alabeo: en la montaña, el peralte real de la plataforma; en el resto, el giro del trazado
        const bankT = sp3.onRoad ? Math.atan2(sp3.bank * 2, 0.104) * 1.5 : Math.max(-0.85, Math.min(0.85, dyaw * 3.4));
        fd.bank = (fd.bank || 0) + (bankT - (fd.bank || 0)) * 0.14;
        const eul = new THREE.Euler(0, -yaw, 0, 'YXZ');
        fd.mesh.rotation.set(0, 0, 0);
        fd.mesh.quaternion.setFromEuler(eul);
        const qp = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), pitch);
        const qr = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), fd.bank);
        fd.mesh.quaternion.multiply(qp).multiply(qr);
        // dinámica de marcha: frena cuesta arriba y ante la bifurcación, se suelta cuesta abajo
        let strain = 1 - Math.max(-0.3, Math.min(0.4, pitch * 0.9));
        const bp = brakePts[fd.road];
        if (bp) {
          const bd2 = Math.hypot(pos[0] - bp[0], pos[2] - bp[1]);
          if (bd2 < 0.5 && pos[0] < bp[0] + 0.1) { strain *= 0.78 + 0.44 * (bd2 / 0.5); fd.mesh.material.emissiveIntensity += 0.22 * (1 - bd2 / 0.5); }
        }
        // silueta baja de vehículo: vientre plano, perfil achatado; sobre el puente se estira con la velocidad
        const sBase = 0.92 + 0.08 * norm, stretch = (1.3 + 1.2 * norm) * (1 - rough * 0.14) * strain * (0.86 + 0.16 * (fd.spd || 1));
        fd.mesh.scale.set(sBase * stretch, sBase * (0.52 - 0.05 * norm), sBase * (0.78 + 0.05 * rough));
        fd.shell.position.copy(fd.mesh.position);
        fd.shell.quaternion.copy(fd.mesh.quaternion);
        fd.shell.material.opacity = (0.13 + 0.16 * norm) * fade;
        fd.shell.scale.set(1.3 + 0.4 * norm, 1.0, 1.0);
        if (hubPh >= 0) {
          if (hubPh < 0.35) {
            // fusión: el nodo se aplana y se derrama en un disco que se funde con la losa
            const a = hubPh / 0.35;
            const spread = 1 + a * 1.9;
            fd.mesh.scale.x *= spread; fd.mesh.scale.z *= spread;
            fd.mesh.scale.y *= Math.max(0.04, 1 - a * 0.96);
            fd.mesh.position.y = fd.sy + (0.072 - fd.sy) * a;
            fd.mesh.material.opacity *= (1 - a * a);
            fd.shell.scale.multiplyScalar(Math.max(0.001, 1 - a));
            fd.shell.material.opacity *= (1 - a);
            if (!fd.fusing) {
              fd.fusing = true; self._fuseT = t;
              self._fuseCount = (self._fuseCount || 0) + 1;
              (self._radT = self._radT || [-9, -9, -9])[fd.road] = t;
            }
          } else if (hubPh > 0.65) {
            // emisión: renace desde el centro y sale hacia el puente
            const e2 = (hubPh - 0.65) / 0.35;
            fd.mesh.scale.multiplyScalar(Math.max(0.001, e2));
            fd.mesh.material.opacity *= e2;
            fd.shell.scale.multiplyScalar(Math.max(0.001, e2));
            fd.shell.material.opacity *= e2;
          } else {
            fd.mesh.scale.multiplyScalar(0.001);
            fd.mesh.material.opacity = 0;
            fd.shell.scale.multiplyScalar(0.001);
            fd.shell.material.opacity = 0;
            if (hubPh > 0.5) {
              const rp = (hubPh - 0.5) / 0.15, er = rp * rp;
              const eP = trackAt(tracks[fd.road], pH + EMIT);
              hubRunner.position.set(HUBX3 + (eP[0] - HUBX3) * er, 0.074, HUBZ3 + (eP[2] - HUBZ3) * er);
              hubRunner.material.opacity = 0.55;
            }
          }
          glowAcc = Math.max(glowAcc, Math.sin(Math.PI * Math.min(1, hubPh)));
        } else fd.fusing = false;
        // estela continua a lo largo del trazado
        const writeTrail = (tr, from, to) => {
          const arr = tr.line.geometry.attributes.position.array;
          for (let k = 0; k < tr.n; k++) {
            const tp = Math.max(0, p - (from + (to - from) * (k / (tr.n - 1))));
            const q3 = trackAt(tracks[fd.road], tp);
            const cb = q3[0] > CX0 ? camberAt(q3[0]) : 0;
            const s3 = surfPos(fd.road, q3);
            const ty = (s3.onRoad ? s3.y : q3[1] + cb) + 0.032;
            arr[k * 3] = q3[0]; arr[k * 3 + 1] = ty; arr[k * 3 + 2] = q3[2];
          }
          tr.line.geometry.attributes.position.needsUpdate = true;
          tr.line.geometry.computeBoundingSphere();
        };
        const span = (0.032 + 0.045 * norm) * (0.55 + 0.5 * (fd.spd || 1));
        writeTrail(fd.trailNear, 0, span);
        writeTrail(fd.trailFar, span, span * 2.6);
        fd.trailNear.line.material.opacity = (0.34 + 0.42 * norm) * fade * (0.62 + 0.38 * (fd.spd || 1));
        fd.trailFar.line.material.opacity = (0.14 + 0.22 * norm) * fade * (0.62 + 0.38 * (fd.spd || 1));
        // sombra de contacto: siempre pegada a la superficie que corresponda (firme, terreno o tablero)
        const onDeck = pos[0] > rx0 && pos[0] < CX1 + 0.1;
        const shY = onDeck ? deckTop + camberAt(pos[0]) + 0.007 : (sp3.onRoad ? sp3.y : pos[1]) + 0.008;
        fd.halo.position.set(pos[0], shY, onDeck ? CZ : pos[2]);
        fd.halo.material.opacity = (0.16 + 0.06 * norm) * fade * fd.dim * (hubPh >= 0 ? Math.max(0, 1 - hubPh * 2.4) : 1);
        fd.halo.scale.set(1.55 * (0.9 + 0.35 * norm), 1, 0.9);
        // reacción de la estructura al cruzar cada pórtico
        for (let c = 0; c < pierCaps.length; c++) {
          const pc = pierCaps[c];
          if (fd.lastX < pc.x && pos[0] >= pc.x) { pc.lit = 1; }
        }
        // el núcleo reacciona: cada nodo que lo cruza dispara un pulso desde el logo
        if (fd.lastX < HUBX3 && pos[0] >= HUBX3) self._hubHit = t;
        if ((fd.lastP || 0) < 0.94 && p >= 0.94) self._arrHit = t;
        fd.lastP = p;
        fd.lastX = pos[0];
        if (pos[0] > CX0 && pos[0] < CX1) activity = Math.min(1, activity + 0.34);
      }
      // brillo del logo mientras absorbe: halo + losa encendida, con decaimiento suave
      self._hubGlowV = (self._hubGlowV || 0) + (glowAcc - (self._hubGlowV || 0)) * 0.28;
      const gv = self._hubGlowV;
      // quietud que respira + la luz nace en el borde oeste (donde toca el nodo) y se derrama al centro
      const gage = self._fuseT ? Math.min(1, (t - self._fuseT) / 0.5) : 1;
      hubGlowM.material.opacity = 0.06 + 0.018 * Math.sin(t * 0.32) + 0.52 * gv;
      hubGlowM.scale.setScalar((0.85 + 0.5 * gv) * (1 + 0.006 * Math.sin(t * 0.21)));
      hubGlowM.position.x = HUBX3 - 0.55 * (1 - gage);
      plinthTop.material.emissiveIntensity = 0.6 * gv;
      // el monograma levita: deriva lenta, y crece un instante cuando un nodo se integra
      if (logoMesh.userData.baseY) {
        const bob = 0.026 * Math.sin(t * 0.55);
        logoMesh.position.y = logoMesh.userData.baseY + bob + 0.05 * gv;
        logoMesh.scale.setScalar(1 + 0.055 * gv);
        logoShadow.scale.set(1 + 0.10 * (bob / 0.026) * 0.18 + 0.10 * gv, 0.62 * (1 + 0.08 * gv), 1);
        logoShadow.material.opacity = 0.9 - 0.24 * (bob / 0.026) * 0.5 - 0.2 * gv;
      }
      // onda doble de fusión, lenta y fina
      const fage = self._fuseT ? (t - self._fuseT) / 0.95 : 9;
      if (fage < 1) {
        fuseRing.scale.setScalar(0.55 + fage * 0.85);
        fuseRing.material.opacity = 0.42 * (1 - fage) * (1 - fage);
      } else fuseRing.material.opacity = 0;
      const fage2 = self._fuseT ? (t - self._fuseT - 0.16) / 0.95 : 9;
      let r2op = (fage2 > 0 && fage2 < 1) ? 0.26 * (1 - fage2) : 0;
      if (fage2 > 0 && fage2 < 1) fuseRing2.scale.setScalar(0.55 + fage2 * 0.9);
      // arcos de memoria: registro orbital de fusiones; al cerrarse, pulso único y limpieza
      if ((self._fuseCount || 0) !== (self._arcDrawn || 0)) {
        self._arcDrawn = self._fuseCount;
        const slot = (self._fuseCount - 1) % ARCN;
        if (slot === ARCN - 1) {
          self._arcBurst = t;
          while (hubArcs.children.length) { const c = hubArcs.children.pop(); c.geometry.dispose(); }
        } else {
          const a0 = -Math.PI / 2 + slot * (Math.PI * 2 / ARCN);
          hubArcs.add(new THREE.Mesh(new THREE.RingGeometry(1.08, 1.096, 18, 1, a0, Math.PI * 2 / ARCN * 0.72), new THREE.MeshBasicMaterial({ color: 0x5b7893, transparent: true, opacity: 0.45, side: THREE.DoubleSide, depthWrite: false })));
        }
      }
      const bage = self._arcBurst ? (t - self._arcBurst) / 1.15 : 9;
      if (bage < 1) { fuseRing2.scale.setScalar(1 + bage * 1.7); r2op = Math.max(r2op, 0.5 * (1 - bage)); }
      fuseRing2.material.opacity = r2op;
      // radiales de reconocimiento: se enciende la de la ruta que acaba de fundirse
      if (self._radT) for (let ri = 0; ri < 3; ri++) {
        const ra = (t - self._radT[ri]) / 0.7;
        hubRads[ri].material.opacity = (ra > 0 && ra < 1) ? 0.45 * Math.sin(Math.PI * ra) : 0;
      }
      hubRunner.material.opacity = Math.max(0, hubRunner.material.opacity - 0.05);
      // ruta bajo el puntero: se refuerza y las otras bajan de peso
      const pxn = self._frPointer.x, pyn = -self._frPointer.y;
      let hov = -1;
      if (pxn !== 0 || pyn !== 0) {
        let bd = 0.055;
        for (let ri = 0; ri < roadHi.length; ri++) {
          const ps = roadHi[ri].pts;
          for (let i = 0; i < ps.length; i += 3) {
            const v = ps[i].clone().project(cam);
            const dd = Math.hypot(v.x - pxn, v.y - pyn);
            if (dd < bd) { bd = dd; hov = ri; }
          }
        }
      }
      self._frHover = hov;
      if (cv.style.cursor !== (hov >= 0 ? 'pointer' : 'default')) cv.style.cursor = hov >= 0 ? 'pointer' : 'default';
      for (let ri = 0; ri < roadHi.length; ri++) {
        const rh = roadHi[ri];
        rh.cur += ((hov === ri ? 0.55 : 0) - rh.cur) * 0.16;
        rh.line.material.opacity = rh.cur;
      }
      // pórticos: capitel iluminado al paso + anillos que se expanden y se apagan
      for (let c = 0; c < pierCaps.length; c++) {
        const pc = pierCaps[c];
        pc.lit *= 0.94;
        pc.mesh.material.emissiveIntensity = pc.lit * 0.9;
      }

      // llegada: el anillo se cierra sobre el destino y deja un acuse breve
      const aage = self._arrHit ? (t - self._arrHit) / 1.3 : 9;
      if (aage < 1) {
        const cl = 1 - Math.pow(1 - Math.min(1, aage / 0.5), 3);
        arrRing.scale.setScalar(2.1 - 1.35 * cl);
        arrRing.material.opacity = aage < 0.5 ? 0.32 * cl : 0.32 * (1 - (aage - 0.5) / 0.5);
        arrDot.material.opacity = aage < 0.5 ? 0 : 0.4 * (1 - (aage - 0.5) / 0.5);
        arrDot.scale.setScalar(0.8);
      } else { arrRing.material.opacity = 0; arrDot.material.opacity = 0; }
      // etiquetas 1·2·3 sincronizadas con la fase del ciclo
      const ph = pulse < 0.42 ? 0 : pulse < 0.68 ? 1 : 2;
      if (ph !== self._frPhase) {
        self._frPhase = ph;
        [s0, s1, s2].forEach((el, i) => {
          if (!el) return;
          el.style.color = i === ph ? '#1f4a72' : '#6E7A88';
          el.style.opacity = i === ph ? '1' : '0.85';
          el.style.fontWeight = i === ph ? '600' : '400';
          const g = document.getElementById('bb-fr-g' + i);
          if (g) g.style.background = 'linear-gradient(to top,rgba(66,112,146,' + (i === ph ? 0.78 : 0.26) + '),rgba(66,112,146,0))';
        });
      }
      // el corredor se construye alrededor del flujo: capas/paredes se refuerzan con actividad y vuelven a neutro al vaciarse
      self._corAct = (self._corAct || 0) + (activity - (self._corAct || 0)) * 0.05;
      const act = self._corAct, cbreath = 0.5 + 0.5 * Math.sin(t * 0.24);
      for (let i = 0; i < layers.length; i++) layers[i].mesh.material.opacity = layers[i].base * (0.32 + 0.68 * act) * (0.9 + 0.1 * cbreath);
      for (let i = 0; i < edgeLines.length; i++) edgeLines[i].material.opacity = (0.13 + 0.3 * act) * (i === 0 || i === 5 ? 1.35 : 1);
      for (let c = 0; c < checks.length; c++) {
        const ck = checks[c];
        let near = 0;
        for (let d = 0; d < flowDots.length; d++) { const dx = Math.abs(flowDots[d].mesh.position.x - ck.cx); if (dx < 0.5) near = Math.max(near, 1 - dx / 0.5); }
        ck.lit += (near - ck.lit) * (near > ck.lit ? 0.22 : 0.035);
        ck.mesh.material.opacity = 0.035 + ck.lit * 0.17;
        ck.mesh.scale.y = 1 + cbreath * 0.012;
      }
      renderer.render(scene, cam);
    };

    if (self._reduced) { place(0, 0); frame(1.5, 0.5); setTimeout(() => frame(1.5, 0.5), 300); return; }

    self._frSyncBtn = () => {
      const g = document.getElementById('bb-fr-ppg'), tt = document.getElementById('bb-fr-ppt');
      const T = (self.state && self.state.lang === 'en') ? { p: 'Play', s: 'Pause' } : { p: 'Reproducir', s: 'Pausar' };
      if (tt) tt.textContent = self._frPaused ? T.p : T.s;
      if (g) {
        if (self._frPaused) { g.style.borderLeft = '7px solid currentColor'; g.style.borderRight = '0'; g.style.borderTop = '5px solid transparent'; g.style.borderBottom = '5px solid transparent'; g.style.width = '0'; g.style.height = '0'; }
        else { g.style.borderLeft = '2px solid currentColor'; g.style.borderRight = '2px solid currentColor'; g.style.borderTop = '0'; g.style.borderBottom = '0'; g.style.width = '8px'; g.style.height = '9px'; }
      }
    };
    self._frPointer = { x: 0, y: 0 }; self._frPt = { x: 0, y: 0 };
    self._frMove = (ev) => { const r = cv.getBoundingClientRect(); self._frPointer = { x: ((ev.clientX - r.left) / r.width - 0.5) * 2, y: ((ev.clientY - r.top) / r.height - 0.5) * 2 }; };
    self._frLeave = () => { self._frPointer = { x: 0, y: 0 }; };
    cv.addEventListener('mousemove', self._frMove); cv.addEventListener('mouseleave', self._frLeave);

    let last = performance.now(), tsec = 0, pulse = 0;
    self._frOn = true;
    // accesibilidad: con movimiento reducido se compone un solo fotograma legible y no hay bucle
    const rmq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (rmq.matches) {
      place(0, 0); frame(6.2, 0.78);
      const pp = document.getElementById('bb-fr-pp'); if (pp) pp.style.display = 'none';
      ['0', '1', '2'].forEach((i) => { const g = document.getElementById('bb-fr-g' + i); if (g) g.style.background = 'linear-gradient(to top,rgba(66,112,146,0.42),rgba(66,112,146,0))'; });
      return;
    }
    self._frSeek = null; self._frPaused = false;
    const loop = (now) => {
      if (!self._frOn) { self._frRaf = null; return; }
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      if (self._frSeek !== null && self._frSeek !== undefined) { pulse = self._frSeek; self._frSeek = null; }
      if (!self._frPaused) {
        // reposo al cierre del ciclo: la escena se detiene un instante con los tres pasos legibles
        const rest = pulse > 0.9 ? 0.12 : 1;
        tsec += dt * (0.25 + 0.75 * rest); pulse += dt * 0.1 * rest; if (pulse > 1) pulse -= 1;
      }
      self._frPt.x += (self._frPointer.x - self._frPt.x) * 0.04; self._frPt.y += (self._frPointer.y - self._frPt.y) * 0.04;
      // deriva lateral muy lenta ligada al scroll: la maqueta gira un par de grados al recorrerla
      const rc = cv.getBoundingClientRect();
      const sp = Math.max(0, Math.min(1, (window.innerHeight - rc.top) / (window.innerHeight + rc.height)));
      // cámara totalmente fija: ningún tramo de carretera se oculta tras las crestas
      place(0, 0);
      frame(tsec, pulse);
      self._frRaf = requestAnimationFrame(loop);
    };
    self._frVis = new IntersectionObserver((es) => {
      es.forEach((en) => {
        if (en.isIntersecting) { if (!self._frOn) { self._frOn = true; last = performance.now(); if (!self._frRaf) self._frRaf = requestAnimationFrame(loop); } }
        else { self._frOn = false; if (self._frRaf) { cancelAnimationFrame(self._frRaf); self._frRaf = null; } }
      });
    }, { threshold: 0.04 });
    self._frVis.observe(cv);
    last = performance.now();
    // los shaders se compilan antes del primer fotograma: sin tirón inicial en Safari
    if (renderer.compileAsync) {
      renderer.compileAsync(scene, cam).then(() => { last = performance.now(); self._frRaf = requestAnimationFrame(loop); }).catch(() => { self._frRaf = requestAnimationFrame(loop); });
    } else {
      self._frRaf = requestAnimationFrame(loop);
    }
    };
    if (window.requestIdleCallback) requestIdleCallback(buildScene, { timeout: 300 });
    else setTimeout(buildScene, 0);
  }

  _initGlobe() {
    const cv = document.getElementById('bb-globe');
    if (!cv) return;
    if (this._globeGaveUp) return;
    if (!window.d3 || !window.d3.geoOrthographic) {
      if (this._globeWant) this._libSeq(['https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js']).then(() => {
        if (!window.d3 || !window.d3.geoOrthographic) { this._globeGaveUp = true; return; } // CDN bloqueado/caído: no reintentar en bucle
        this._initGlobe();
      });
      return;
    }
    const self = this;
    this._globeGen = (this._globeGen || 0) + 1;
    const GEN = this._globeGen;
    if (this._globeRaf) { cancelAnimationFrame(this._globeRaf); this._globeRaf = null; }
    if (this._globeCv && this._globeMove) {
      this._globeCv.removeEventListener('mousemove', this._globeMove);
      this._globeCv.removeEventListener('mouseleave', this._globeLeave);
    }
    this._globeCv = cv;

    const d3 = window.d3;
    const W = cv.width, H = cv.height, ctx = cv.getContext('2d');
    const { C, R } = this.mapModel();
    const lang0 = () => self.state.lang ?? (self.props.defaultLang ?? 'es');

    if (self._globeLambda == null) self._globeLambda = 40;
    if (self._globePhi === undefined) self._globePhi = -22;
    const R0 = Math.min(W, H) / 2 - 12;
    const projection = d3.geoOrthographic().scale(R0).translate([W / 2, H / 2]).clipAngle(90).rotate([self._globeLambda, self._globePhi]);
    const path = d3.geoPath(projection, ctx);
    const graticule = d3.geoGraticule10();
    const sphere = { type: 'Sphere' };
    const SPEED = 7;
    const STEP = 2200;
    let last = performance.now();

    const ensureLand = () => { if (!self._globeLand) self._globeLand = landGeo(); };
    ensureLand();

    const cities = Object.keys(C).map((k) => C[k]);
    const vis = (center, lon, lat) => d3.geoDistance([lon, lat], center) < (Math.PI / 2 - 0.03);

    // Flow model: one particle per corridor, own phase + cadence, cached interpolator
    const RI = R.map((r) => ({ r: r, ip: d3.geoInterpolate([C[r.from].lon, C[r.from].lat], [C[r.to].lon, C[r.to].lat]), dest: C[r.to] }));
    if (!self._globeFlows || self._globeFlows.length !== R.length) {
      self._globeFlows = R.map((r, i) => ({ t: (i * 0.41) % 1, sp: 0.062 + ((i * 7) % 5) * 0.011 }));
    }
    self._globePulses = self._globePulses || [];

    const draw = (now) => {
      if (GEN !== self._globeGen) return;
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      if (self._globeDrag) {
        // held: no drift
      } else if (self._globeVel && (Math.abs(self._globeVel.x) > 0.6 || Math.abs(self._globeVel.y) > 0.6)) {
        // inertia after release, decaying back into auto-rotation
        self._globeLambda = (self._globeLambda + self._globeVel.x * dt) % 360;
        self._globePhi = Math.max(-72, Math.min(72, self._globePhi + self._globeVel.y * dt));
        const k = Math.pow(0.08, dt);
        self._globeVel.x *= k; self._globeVel.y *= k;
      } else if (!self._reduced && !self._globePaused) {
        self._globeLambda = (self._globeLambda + dt * SPEED) % 360;
        if (Math.abs(self._globePhi + 22) > 0.2) self._globePhi += (-22 - self._globePhi) * Math.min(1, dt * 0.9);
      }
      projection.rotate([self._globeLambda, self._globePhi]);
      const center = [-self._globeLambda, -self._globePhi];
      self._globeCenter = center;
      ensureLand();
      ctx.clearRect(0, 0, W, H);

      ctx.beginPath(); path(sphere);
      const g = ctx.createRadialGradient(W * 0.4, H * 0.36, R0 * 0.15, W / 2, H / 2, R0);
      g.addColorStop(0, 'rgba(22,48,76,0.96)'); g.addColorStop(1, 'rgba(9,20,34,0.99)');
      ctx.fillStyle = g; ctx.fill();

      if (self._globeLand) {
        ctx.beginPath(); path(self._globeLand.fill); ctx.fillStyle = 'rgba(230,229,231,0.13)'; ctx.fill();
        ctx.beginPath(); path(self._globeLand.borders); ctx.strokeStyle = 'rgba(230,229,231,0.26)'; ctx.lineWidth = 0.5; ctx.stroke();
        ctx.beginPath(); path(self._globeLand.line); ctx.strokeStyle = 'rgba(230,229,231,0.46)'; ctx.lineWidth = 0.75; ctx.stroke();
      }

      ctx.beginPath(); path(sphere); ctx.strokeStyle = 'rgba(126,166,200,0.42)'; ctx.lineWidth = 1.1; ctx.stroke();

      const activeTab = self.state.mapTab;
      R.forEach((r) => {
        const A = C[r.from], B = C[r.to];
        const on = r.svc.includes(activeTab);
        ctx.beginPath(); path({ type: 'LineString', coordinates: [[A.lon, A.lat], [B.lon, B.lat]] });
        ctx.strokeStyle = on ? 'rgba(159,191,219,0.72)' : 'rgba(126,166,200,0.16)';
        ctx.lineWidth = on ? 1.5 : 0.8; ctx.stroke();
      });

      if (!self._reduced) {
        const pulses = self._globePulses;
        RI.forEach((q, i) => {
          if (!q.r.svc.includes(activeTab)) return;
          const f = self._globeFlows[i];
          if (!self._globePaused) {
            f.t += dt * f.sp;
            if (f.t >= 1) { f.t -= 1; pulses.push({ lon: q.dest.lon, lat: q.dest.lat, t0: now }); }
          }
          for (let s = 4; s >= 0; s--) {
            const tt = f.t - s * 0.02;
            if (tt < 0) continue;
            const pt = q.ip(tt);
            if (!vis(center, pt[0], pt[1])) continue;
            const xy = projection(pt);
            const a = s === 0 ? 0.95 : 0.34 * (1 - s / 5);
            ctx.beginPath(); ctx.arc(xy[0], xy[1], Math.max(0.7, 3.1 - s * 0.5), 0, 7);
            ctx.fillStyle = 'rgba(214,228,240,' + a.toFixed(3) + ')'; ctx.fill();
          }
        });
        if (pulses.length > 20) pulses.splice(0, pulses.length - 20);
        for (let k = pulses.length - 1; k >= 0; k--) {
          const p = pulses[k], e = (now - p.t0) / 1000;
          if (e >= 1 || e < 0) { pulses.splice(k, 1); continue; }
          if (!vis(center, p.lon, p.lat)) continue;
          const xy = projection([p.lon, p.lat]);
          ctx.beginPath(); ctx.arc(xy[0], xy[1], 5 + e * 17, 0, 7);
          ctx.strokeStyle = 'rgba(159,191,219,' + (0.45 * (1 - e) * (1 - e)).toFixed(3) + ')';
          ctx.lineWidth = 1.3 * (1 - e * 0.55); ctx.stroke();
        }
        const r = R[Math.floor(now / STEP) % R.length];
        const cr = document.getElementById('bb-corridor');
        if (cr) cr.textContent = self._cname(C[r.from], lang0()) + '  →  ' + self._cname(C[r.to], lang0()) + '   ·   ' + r.cur;
      }

      cities.forEach((c) => {
        const k = 1 - d3.geoDistance([c.lon, c.lat], center) / (Math.PI / 2);
        if (k <= 0.05) return;
        const fade = Math.min(1, Math.max(0, (k - 0.05) / 0.33));
        const xy = projection([c.lon, c.lat]);
        if (c.hub) {
          const pl = 0.5 + 0.5 * Math.sin(now / 1100);
          ctx.beginPath(); ctx.arc(xy[0], xy[1], 8.6 + pl * 3, 0, 7);
          ctx.fillStyle = 'rgba(159,191,219,' + (0.17 * fade * (1 - pl * 0.4)).toFixed(3) + ')'; ctx.fill();
          ctx.beginPath(); ctx.arc(xy[0], xy[1], 4.6, 0, 7);
          ctx.fillStyle = 'rgba(234,241,248,' + fade.toFixed(3) + ')'; ctx.fill();
          ctx.lineWidth = 1.4; ctx.strokeStyle = 'rgba(159,191,219,' + fade.toFixed(3) + ')'; ctx.stroke();
          ctx.font = '600 ' + (13.2 + fade * 2.2).toFixed(1) + 'px ui-monospace, Menlo, monospace';
          ctx.fillStyle = 'rgba(234,241,248,' + (fade * fade).toFixed(3) + ')';
          ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
          ctx.fillText(self._cname(c, lang0()), xy[0], xy[1] - 11);
        } else {
          ctx.beginPath(); ctx.arc(xy[0], xy[1], 2.4 + fade * 0.5, 0, 7);
          ctx.fillStyle = 'rgba(159,191,219,' + (0.85 * fade).toFixed(3) + ')'; ctx.fill();
        }
      });

      if (!self._reduced) self._globeRaf = requestAnimationFrame(draw);
    };
    this._drawGlobe = draw;

    this._globeMove = (e) => {
      const rect = cv.getBoundingClientRect();
      const mx = (e.clientX - rect.left) * (W / rect.width), my = (e.clientY - rect.top) * (H / rect.height);
      const center = self._globeCenter || [-self._globeLambda, -phi];
      let hit = null, best = 24;
      cities.forEach((c) => {
        if (!vis(center, c.lon, c.lat)) return;
        const xy = projection([c.lon, c.lat]);
        const d = Math.hypot(xy[0] - mx, xy[1] - my);
        if (d < best) { best = d; hit = c; }
      });
      if (self._globeDrag) return;
      const tip = document.getElementById('bb-tooltip');
      self._globePaused = !!hit;
      cv.style.cursor = hit ? 'pointer' : 'grab';
      if (hit && tip) {
        const lang = lang0();
        tip.innerHTML = (hit.hub ? '<div style="font-size:8.5px;letter-spacing:2.5px;text-transform:uppercase;color:#112840;background:#7EA6C8;display:inline-block;padding:2px 7px;margin-bottom:8px">HUB</div>' : '') +
          '<div style="font-size:16px;font-weight:600;color:#E6E5E7;line-height:1.15;margin-bottom:3px">' + self._cname(hit, lang) + '</div>' +
          '<div style="font-size:10.5px;letter-spacing:0.5px;color:#7EA6C8;margin-bottom:8px">' + hit.role[lang] + '</div>' +
          '<div style="font-family:ui-monospace,monospace;font-size:11px;letter-spacing:1px;color:#9FBFDB">' + hit.cur + '</div>';
        tip.style.display = 'block';
        const w = cv.clientWidth, hh = cv.clientHeight;
        const xy = projection([hit.lon, hit.lat]);
        let left = xy[0] * (w / W); const top = xy[1] * (hh / H);
        left = Math.max(72, Math.min(w - 72, left));
        tip.style.left = left + 'px'; tip.style.top = (top + 16) + 'px'; tip.style.transform = 'translateX(-50%)';
      } else if (tip) { tip.style.display = 'none'; }
    };
    this._globeLeave = () => { if (self._globeDrag) return; self._globePaused = false; const tip = document.getElementById('bb-tooltip'); if (tip) tip.style.display = 'none'; cv.style.cursor = 'grab'; };
    cv.addEventListener('mousemove', this._globeMove);
    cv.addEventListener('mouseleave', this._globeLeave);

    // Drag to rotate, with inertia on release
    const SENS = 0.34;
    let dragId = null, px = 0, py = 0, pt = 0, moved = 0;
    self._globeVel = { x: 0, y: 0 };
    this._globeDown = (ev) => {
      if (ev.button !== undefined && ev.button !== 0) return;
      dragId = ev.pointerId; px = ev.clientX; py = ev.clientY; pt = performance.now(); moved = 0;
      self._globeDrag = true; self._globeVel = { x: 0, y: 0 };
      const tip = document.getElementById('bb-tooltip'); if (tip) tip.style.display = 'none';
      cv.style.cursor = 'grabbing';
      if (cv.setPointerCapture) { try { cv.setPointerCapture(ev.pointerId); } catch (e) {} }
      ev.preventDefault();
    };
    this._globeDrag2 = (ev) => {
      if (!self._globeDrag || ev.pointerId !== dragId) return;
      const now = performance.now(), dt = Math.max(8, now - pt) / 1000;
      const dx = ev.clientX - px, dy = ev.clientY - py;
      moved += Math.abs(dx) + Math.abs(dy);
      const k = W / (cv.clientWidth || W);
      self._globeLambda = (self._globeLambda + dx * k * SENS) % 360;
      self._globePhi = Math.max(-72, Math.min(72, self._globePhi - dy * k * SENS));
      self._globeVel = { x: (dx * k * SENS) / dt * 0.55, y: (-dy * k * SENS) / dt * 0.55 };
      px = ev.clientX; py = ev.clientY; pt = now;
      if (self._reduced) draw(now);
      ev.preventDefault();
    };
    this._globeUp = (ev) => {
      if (!self._globeDrag || (ev.pointerId !== undefined && ev.pointerId !== dragId)) return;
      self._globeDrag = false; dragId = null;
      if (performance.now() - pt > 130) self._globeVel = { x: 0, y: 0 };
      cv.style.cursor = 'grab';
      if (self._reduced && !this._globeRaf) { last = performance.now(); this._globeRaf = requestAnimationFrame(draw); }
    };
    cv.addEventListener('pointerdown', this._globeDown);
    cv.addEventListener('pointermove', this._globeDrag2);
    window.addEventListener('pointerup', this._globeUp);
    window.addEventListener('pointercancel', this._globeUp);
    cv.style.touchAction = 'pan-y';

    // fuera de pantalla no se dibuja
    if (this._globeVis) this._globeVis.disconnect();
    this._globeVis = new IntersectionObserver((es) => {
      es.forEach((en) => {
        if (en.isIntersecting) {
          if (!self._globeRaf && !self._reduced) { last = performance.now(); self._globeRaf = requestAnimationFrame(draw); }
        } else if (self._globeRaf) { cancelAnimationFrame(self._globeRaf); self._globeRaf = null; }
      });
    }, { threshold: 0.02 });
    this._globeVis.observe(cv);
    if (self._reduced) draw(performance.now());
    else { last = performance.now(); this._globeRaf = requestAnimationFrame(draw); }
  }

  componentWillUnmount() {
    if (this._onHash) removeEventListener('hashchange', this._onHash);
    if (this._animVis) { this._animVis.disconnect(); this._animVis = null; }
    if (this._caseTimer) clearInterval(this._caseTimer);
    if (this._caseVis) this._caseVis.disconnect();
    if (this._onPopLang) window.removeEventListener('popstate', this._onPopLang);
    if (this._io) this._io.disconnect();
    if (this._cio) this._cio.disconnect();
    clearTimeout(this._revealFallback);
    clearTimeout(this._countFallback);
    window.removeEventListener('scroll', this._onScroll);
    if (this._measureNav) window.removeEventListener('resize', this._measureNav);
    if (this._mapRaf) { cancelAnimationFrame(this._mapRaf); this._mapRaf = null; }
    if (this._mapVis) { this._mapVis.disconnect(); this._mapVis = null; }
    if (this._mapCv) {
      this._mapCv.removeEventListener('mousemove', this._mapMove);
      this._mapCv.removeEventListener('mouseleave', this._mapLeave);
      this._mapCv.removeEventListener('click', this._mapClick);
    }
    if (this._mapCard) {
      this._mapCard.removeEventListener('mouseenter', this._cardEnter);
      this._mapCard.removeEventListener('mouseleave', this._cardLeave);
    }
    if (this._orbitVis) { this._orbitVis.disconnect(); this._orbitVis = null; }
    if (this._globeVis) { this._globeVis.disconnect(); this._globeVis = null; }
    if (this._orbitRaf) cancelAnimationFrame(this._orbitRaf);
    if (this._orbitCv) {
      this._orbitCv.removeEventListener('mousemove', this._orbitMove);
      this._orbitCv.removeEventListener('mouseleave', this._orbitLeave);
    }
  }

  copy() {
    return {"es":{"navSolutions":"Soluciones","navDivisas":"Activos","navAbout":"Nosotros","navProcess":"Cómo trabajamos","navCases":"Casos","navContact":"Contacto","navCta":"Agendar conversación","heroT1":"Arquitectura financiera","heroT2":"SIN FRONTERAS","heroT3":"","heroLead":"Coordinamos la arquitectura de **FX, pagos internacionales y tesorería** para necesidades globales, con la estructura y la simplicidad operativa que la banca tradicional no ofrece.","heroServices":"FX · Pagos internacionales · Tesorería · Liquidez · Activos operativos","heroCta2":"Ver soluciones","heroSeal":"Respaldado por instituciones financieras reguladas en México y en el extranjero, con casi 40 años de trayectoria.","probTitle":"necesitas una estructura, no obstáculos.","probText":"La fricción bancaria tiene un **costo real**: burocracia que entorpece, documentación excesiva y procesos rígidos que complican **cada pago internacional** y cada necesidad de movimiento de tesorería. La banca tradicional frena tu operación justo cuando el capital necesita moverse.","solKicker":"NUESTRA ARQUITECTURA FINANCIERA","solText":"Coordinamos el acceso a soluciones internacionales de FX, pagos y tesorería mediante **aliados, contrapartes y rutas operativas**.","solMicro":"Menos fricción operativa.                  Más control financiero.","curveUp":"Control financiero","curveDown":"Fricción operativa","pillars":[{"title":"Conexión","desc":"Diseñamos la infraestructura que conecta instituciones."},{"title":"Diseño","desc":"Estructuramos la solución según moneda, destino, monto y documentación."},{"title":"Coordinación","desc":"Ordenamos tiempos, contrapartes, seguimiento y validación operativa."},{"title":"Simplicidad","desc":"Un solo equipo a cargo y procesos claros en cada operación global."}],"solCompare":"","fxKicker":"Capacidad operativa","fxTitle":"Activos operativos","fxSubtitle":"Acceso coordinado a **divisas fiat** y **criptoactivos** para operaciones corporativas internacionales.","daShort":"Criptoactivos","daPrimary":"USDT es el criptoactivo que concentra nuestro uso operativo: sostiene el valor referenciado al dólar mientras la operación se documenta y la contraparte confirma condiciones, y permite cerrar la liquidación internacional cuando la vía bancaria impone plazos que el calendario del cliente no admite.","daRole":"Cobertura de liquidaciones internacionales","daNote":"Otros criptoactivos se evalúan caso por caso, según jurisdicción, contraparte y documentación.","daLink":"Ver solución de criptoactivos","fxCountLabel":"Divisas fiat","fxRegionLabel":"Regiones operativas","fxNote":"Listado de cobertura, no cotización. La disponibilidad de cada divisa depende de contraparte, jurisdicción, documentación y validación operativa.","daChips":[{"code":"USDT","name":"Tether"}],"archCore":"CORE · Núcleo de coordinación","orbitNames":{"USD":"Dólar estadounidense","MXN":"Peso mexicano","EUR":"Euro","GBP":"Libra esterlina","CNY":"Yuan chino","JPY":"Yen japonés","CHF":"Franco suizo","CAD":"Dólar canadiense","BTC":"Bitcoin","ETH":"Ethereum","USDT":"Tether","USDC":"USD Coin"},"orbitTypeFiat":"Divisa fiat","orbitTypeDigital":"Criptoactivo","fxColLabel":"Divisas fiat","probKicker":"","probStep1":"Fricción internacional","probStep2":"Diseño de solución","probStep3":"Ejecución y simplicidad","probAlt":"Diagrama: tres rutas atraviesan un terreno montañoso con fricción, convergen en el núcleo de B&B Capital Core y continúan por un corredor único hacia claridad y control.","probPause":"Pausar","probPauseAria":"Pausar o reproducir la animación","probValue":"Transformamos la fricción en una ruta financiera clara y bajo control.","procStep":"","entitiesKicker":"Respaldo institucional","entitiesNote":"B&B Capital Core opera con el respaldo institucional de instituciones financieras reguladas en México y en el extranjero, con casi cuatro décadas de trayectoria operando divisas y pagos para empresas. Detalle disponible a solicitud.","history":[{"tag":"Orígenes","title":"Operación cambiaria en México","desc":"Nace la operación cambiaria en México, base de una trayectoria financiera institucional."},{"tag":"Trayectoria","title":"Casi cuatro décadas","desc":"Experiencia acumulada operando divisas y pagos para empresas."},{"tag":"Expansión","title":"Presencia México–España","desc":"La operación se extiende con presencia operativa en dos mercados."},{"tag":"Entidad de Pago","title":"Estructura regulada en España","desc":"Estructura regulada como Entidad de Pago para operar en Europa."},{"tag":"Hoy","title":"B&B Capital Core","desc":"Coordinación financiera internacional de FX, pagos y tesorería."}],"entities":[{"code":"01","name":"Institución financiera regulada en México","role":"Operación cambiaria · casi 40 años"},{"code":"02","name":"Institución financiera regulada en el extranjero","role":"Pagos internacionales · Europa"},{"name":"B&B Capital Core","role":"Coordinación financiera internacional","mark":true}],"coreMicro":"La disponibilidad de cada activo y ruta depende de la operación y la jurisdicción.","fxRegions":[{"region":"América","items":[["USD","Dólar EEUU","Estados Unidos","m"],["CAD","Dólar Canadiense","Canadá","m"],["MXN","Peso Mexicano","México","m"],["ARS","Peso Argentino","Argentina","x"],["BRL","Real Brasileño","Brasil","x"],["CLP","Peso Chileno","Chile","x"],["COP","Peso Colombiano","Colombia","x"],["PEN","Sol Peruano","Perú","x"],["CRC","Colón Costarricense","Costa Rica","x"],["GTQ","Quetzal Guatemalteco","Guatemala","x"],["VEF","Bolívar Venezolano","Venezuela","x"],["BSD","Dólar Bahameño","Bahamas","x"],["BMD","Dólar Bermudeño","Bermudas","x"],["XCD","Dólar del Caribe Oriental","Caribe Oriental","x"],["TTD","Dólar de Trinidad y Tobago","Trinidad y Tobago","x"]]},{"region":"Europa","items":[["EUR","Euro","Zona Euro","m"],["GBP","Libra Esterlina","Reino Unido","m"],["CHF","Franco Suizo","Suiza","m"],["DKK","Corona Danesa","Dinamarca","m"],["NOK","Corona Noruega","Noruega","m"],["SEK","Corona Sueca","Suecia","m"],["PLN","Zloty Polaco","Polonia","m"],["HUF","Forint Húngaro","Hungría","m"],["TRY","Lira Turca","Turquía","m"],["CZK","Corona Checa","Chequia","x"],["BGN","Lev Búlgaro","Bulgaria","x"],["RON","Leu Rumano","Rumanía","x"],["HRK","Kuna Croata","Croacia","x"],["ISK","Corona Islandesa","Islandia","x"],["RUB","Rublo Ruso","Rusia","x"]]},{"region":"Asia","items":[["JPY","Yen Japonés","Japón","m"],["HKD","Dólar de Hong Kong","Hong Kong","m"],["SGD","Dólar de Singapur","Singapur","m"],["CNY","Yuan Chino","China","m"],["KRW","Won Coreano","Corea del Sur","x"],["INR","Rupia India","India","x"],["TWD","Dólar Taiwanés","Taiwán","x"],["THB","Baht Tailandés","Tailandia","x"],["MYR","Ringgit Malayo","Malasia","x"],["PHP","Peso Filipino","Filipinas","x"],["VND","Dong Vietnamita","Vietnam","x"],["PKR","Rupia Pakistaní","Pakistán","x"],["BDT","Taka Bangladesí","Bangladés","x"],["LKR","Rupia de Sri Lanka","Sri Lanka","x"]]},{"region":"Oceanía","items":[["AUD","Dólar Australiano","Australia","m"],["NZD","Dólar de Nueva Zelanda","Nueva Zelanda","m"],["FJD","Dólar Fiyiano","Fiyi","x"],["XPF","Franco CFP","Polinesia Francesa","x"]]},{"region":"África","items":[["MAD","Dirham Marroquí","Marruecos","m"],["ZAR","Rand Sudafricano","Sudáfrica","m"],["EGP","Libra Egipcia","Egipto","x"],["DZD","Dinar Argelino","Argelia","x"],["TND","Dinar Tunecino","Túnez","x"],["KES","Chelín Keniano","Kenia","x"],["MUR","Rupia Mauriciana","Isla Mauricio","x"],["XOF","Franco CFA BCEAO","África Occidental","x"],["XAF","Franco CFA BEAC","África Central","x"],["ZMK","Kwacha Zambiano","Zambia","x"]]},{"region":"Oriente Medio","items":[["AED","Dirham de EAU","Emiratos Árabes Unidos","x"],["SAR","Riyal Saudí","Arabia Saudí","x"],["QAR","Riyal Catarí","Catar","x"],["KWD","Dinar Kuwaití","Kuwait","x"],["BHD","Dinar Bahreiní","Baréin","x"],["OMR","Rial Omaní","Omán","x"],["JOD","Dinar Jordano","Jordania","x"],["ILS","Shekel Israelí","Israel","x"],["LBP","Libra Libanesa","Líbano","x"],["IQD","Dinar Iraquí","Irak","x"]]}],"servTitle":"Soluciones","servSubtitle":"FX, pagos internacionales, tesorería y alternativas financieras, coordinados mediante aliados, contrapartes y **procesos documentales claros**.","servCtaMain":"Evaluar operación","servCta":"Ver aplicación","diffKicker":"Diferenciadores","diffTitle":"¿Por qué nosotros?","caseKicker":"Casos de uso","caseTitle":"Diseñado para decisiones financieras reales","caseSubtitle":"Casos representativos para entender cómo intermediamos operaciones según perfil, flujo y necesidad.","caseContext":"Fricción","caseNeed":"Necesidad","caseHow":"Cómo ayuda B&B","caseResult":"Resultado esperado","caseCta":"Ver soluciones aplicables","caseMicro":"Los casos son representativos.","caseCtaSimilar":"Evaluar una operación similar","procKicker":"Nuestro proceso","procClose":"El proceso empieza con una conversación sobre tu operación.","procTitle":"Claridad para cada operación","trustKicker":"Orígenes y trayectoria","trustTitle":"El respaldo detrás de","trustTitle2":"cada operación.","trustLead":"Nacimos como una institución cambiaria regulada en México. Casi cuatro décadas después, esa operación evolucionó hasta convertirse en una firma de coordinación financiera internacional.","trustYears":"Trayectoria financiera institucional.","trustPresence":"Presencia operativa México–España.","ctKicker":"Conversemos","ctTitle":"Conversemos sobre tu operación.","ctText":"Comparte brevemente tu necesidad y la evaluaremos con precisión.","expectTitle":"Qué esperar después","fName":"Nombre","fCompany":"Empresa","fEmail":"Email","fPhone":"Teléfono","fNeed":"Tipo de necesidad","fMsg":"Cuéntanos brevemente tu operación","fSend":"Solicitar evaluación","ctMailLabel":"Correo","ctOfficesLabel":"Oficinas","ctMailBtn":"Escríbenos","ctMailHref":"mailto:comunicacion@bbcapitalcore.com?subject=Solicitud%20desde%20bbcapitalcore.com","fNeedOpts":["Pagos internacionales / Coordinación FX corporativa","Tesorería internacional","Cobertura y estrategia cambiaria","Custodia de recursos","Criptoactivos","Otro"],"fMicro":"Tu información será tratada con confidencialidad y utilizada únicamente para evaluar tu solicitud.","fFormTitle":"Solicitud de evaluación","fThanksTitle":"Tu información ha sido enviada con éxito.","fThanksSub":"Nuestro equipo revisará tu solicitud y se pondrá en contacto contigo a la brevedad.","footClaim":"Firma de coordinación y arquitectura financiera especializada en FX, pagos internacionales, tesorería corporativa y activos operativos.","footNavTitle":"Navegación","footLegalTitle":"Legal","footPresenceTitle":"Presencia","footSocialTitle":"Redes","footPrivacy":"Aviso de privacidad","footTerms":"Términos y condiciones","footCookies":"Política de cookies","footDisclosures":"Divulgaciones","footPresence1":"México · España","footPresence2":"Atención ejecutiva bajo solicitud","trustAddress":"Atención operativa: CDMX, México · Oviedo, España.","footAddress":"CDMX, México\nOviedo, España","ctDispatch":"Despacho operativo en CDMX, México y Oviedo, España.","footRights":"Todos los derechos reservados.","footLegal":"B&B Capital Core actúa como intermediario y coordinador de soluciones financieras, sujeto a disponibilidad de contraparte, validación documental, jurisdicción y condiciones operativas aplicables.","services":[{"badge":"Pagos · FX","glyph":"M 11 17 c 2 -4 10 -4 12 0","title":"Pagos internacionales / Coordinación FX corporativa","desc":"Diseño de arquitectura para pagos a cualquier parte del mundo en cualquier divisa sin necesidad de aperturar cuentas de banco corrientes, simplificando la forma de repago.","benefit":"Menos burocracia administrativa en cada pago internacional."},{"badge":"Tesorería","glyph":"M 12 22 v -8 M 17 22 v -12 M 22 22 v -5","title":"Tesorería internacional","desc":"Estructuramos soluciones para ayudar a empresas y empresarios con necesidades de hacer llegar o hacerse de liquidez en distintas partes del mundo.","benefit":"Más visibilidad, control y planeación financiera."},{"badge":"Cobertura","glyph":"M 17 11 l 6 3 v 4 c 0 3 -3 5 -6 6 c -3 -1 -6 -3 -6 -6 v -4 z","title":"Cobertura y estrategia cambiaria","desc":"Arquitectura de soluciones enfocada en PYMES y personas físicas para acceder a créditos en divisa de manera ágil, evitando la burocracia de los análisis de crédito bancarios.","benefit":"Acceso ágil a crédito en divisa, sin análisis bancario tradicional."},{"badge":"Resguardo","glyph":"M 11 14 h 12 M 11 20 h 12 M 14 11 v 12 M 20 11 v 12","title":"Custodia de recursos","desc":"Coordinamos el resguardo de los capitales para su posterior procesamiento de acuerdo con tus necesidades de tesorería.","benefit":"Concentración segura de tu capital."},{"badge":"Cripto","glyph":"M12 3.2 L19.6 7.6 V16.4 L12 20.8 L4.4 16.4 V7.6 Z M8.6 12 a3.4 3.4 0 1 0 6.8 0 a3.4 3.4 0 1 0 -6.8 0 M12 3.2 V8.6 M12 15.4 V20.8","title":"Criptoactivos","desc":"Diseñamos soluciones para resolver las necesidades de dispersiones, coberturas y liquidaciones a través del uso de USDT y a través de agentes especializados.","benefit":"Dispersiones, coberturas y liquidaciones con agentes especializados."}],"diffs":[{"num":"I","glyph":"M4 19 H9 C14 19 14 6 19 6 M16 3 L20 6 L16 9","title":"Diseñamos rutas cuando el proceso tradicional no es suficiente.","desc":"Cuando la vía convencional se cierra, estructuramos una alternativa con aliados y contrapartes verificadas."},{"num":"II","glyph":"M4 20 H20 M6 20 V11 M10 20 V11 M14 20 V11 M18 20 V11 M4 11 L12 5 L20 11 Z","title":"Agilidad boutique con mentalidad de tesorería.","desc":"Atención personalizada sobre estructura regulada en México y España. Cada decisión se juzga por flujo, timing, riesgo y documentación."},{"num":"III","glyph":"M5 12 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0 M15 12 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0 M9 12 H15","title":"Conectamos estrategia con operación.","desc":"No entregamos un plan y nos retiramos: acompañamos la ejecución hasta que la operación avanza."},{"num":"IV","glyph":"M12 4 a8 8 0 1 0 0.01 0 M12 8 V12 L15 14","title":"Relaciones de largo plazo.","desc":"Trabajamos con clientes que necesitan precisión, confidencialidad y continuidad, operación tras operación."}],"cases":[{"label":"Empresa importadora","frecuente":"Pago a proveedor internacional · compra de divisa · documentación de soporte","situacion":"Paga proveedores en Asia o Europa y el proceso bancario estándar no acompaña.","necesidad":"Controlar tipo de cambio, tiempos y documentación.","ayuda":"Coordina la ruta de FX y liquidación internacional con respaldo documental e institucional.","resultado":"Mayor visibilidad, menor fricción operativa y seguimiento ejecutivo.","services":["FX","Pagos internacionales","Comercio exterior"]},{"label":"Grupo corporativo","frecuente":"Flujos entre filiales · tesorería regional · liquidez en divisa","situacion":"Opera entre filiales, divisas y jurisdicciones, y cada flujo sigue un criterio distinto.","necesidad":"Concentrar tesorería y coordinar flujos entre entidades.","ayuda":"Diseña la arquitectura de tesorería y coordina la operación entre mercados.","resultado":"Flujos ordenados entre entidades y control financiero centralizado.","services":["Tesorería","Liquidez","Pagos internacionales"]},{"label":"CFO / Director financiero","frecuente":"Exposición cambiaria · timing de pagos · control de márgenes","situacion":"Gestiona exposición cambiaria y márgenes bajo presión, sin ver el costo real.","necesidad":"Visibilidad de costos, timing y comprobación institucional.","ayuda":"Aporta análisis de exposición y coordina la operación con precios de contraparte y documentación verificable.","resultado":"Más control sobre costos, márgenes y timing financiero.","services":["Cobertura","Tesorería","FX"]},{"label":"Family office","frecuente":"Patrimonio internacional · diversificación · activos operativos","situacion":"Administra patrimonio internacional donde el producto estándar no llega.","necesidad":"Estructuras seguras, discretas y eficientes para movilizar capital.","ayuda":"Coordina soluciones confidenciales con respaldo institucional y relación de largo plazo.","resultado":"Estructuras discretas y eficientes con relación de largo plazo.","services":["Criptoactivos","Tesorería","FX"]},{"label":"Asesor fiscal o legal","frecuente":"Documentación · trazabilidad · coordinación con cliente final","situacion":"Tu cliente necesita ejecutar una operación que la vía convencional no resuelve.","necesidad":"Un aliado financiero que complemente la estrategia del despacho.","ayuda":"Coordina la ruta financiera alineada a la estrategia legal y fiscal del cliente.","resultado":"Una ruta financiera alineada a la estrategia legal y fiscal.","services":["Documentación","Coordinación","Pagos internacionales"]}],"process":[{"num":"1","title":"Diagnóstico","desc":"Entendemos operación, moneda, destino, monto, tiempos y documentación."},{"num":"2","title":"Estructura","desc":"Definimos la ruta operativa y las contrapartes aplicables según el caso."},{"num":"3","title":"Coordinación","desc":"Acompañamos la operación con comunicación directa y seguimiento institucional."},{"num":"4","title":"Verificación","desc":"Entregamos comprobación documental y cierre operativo."}],"trust":[{"num":"01","text":"Origen en casa de cambio regulada en México."},{"num":"02","text":"Entidad de Pago regulada en España."},{"num":"03","text":"Coordinación para empresas con operaciones internacionales."},{"num":"04","text":"Comunicación ejecutiva y documentación verificable."}],"expect":[{"num":"01","text":"Revisamos tu consulta."},{"num":"02","text":"Identificamos una ruta viable."},{"num":"03","text":"Coordinamos una conversación."}]},"en":{"navSolutions":"Solutions","navDivisas":"Assets","navAbout":"About","navProcess":"How we work","navCases":"Use cases","navContact":"Contact","navCta":"Schedule a conversation","heroT1":"Financial architecture","heroT2":"WITHOUT BORDERS","heroT3":"","heroLead":"We coordinate the architecture of **FX, international payments and treasury** for global needs, with the structure and operational simplicity traditional banking doesn't offer.","heroServices":"FX · International payments · Treasury · Liquidity · Operational assets","heroCta2":"View solutions","heroSeal":"Backed by regulated financial institutions in Mexico and abroad, with nearly 40 years of track record.","probTitle":"you need structure, not obstacles.","probText":"Banking friction has a **real cost**: bureaucracy that gets in the way, excessive documentation and rigid processes that complicate **every international payment** and every treasury movement. Traditional banking stalls your operation exactly when capital needs to move.","solKicker":"OUR FINANCIAL ARCHITECTURE","solText":"We coordinate access to international FX, payments and treasury solutions through **partners, counterparties and operating routes**.","solMicro":"Less operational friction.                  More financial control.","curveUp":"Financial control","curveDown":"Operational friction","pillars":[{"title":"Connection","desc":"We design the infrastructure that connects institutions."},{"title":"Design","desc":"We structure the solution around currency, destination, amount and documentation."},{"title":"Coordination","desc":"We organize timelines, counterparties, follow-up and operational validation."},{"title":"Simplicity","desc":"A single point of contact and clear processes in every global operation."}],"solCompare":"","fxKicker":"Operational capability","fxTitle":"Operational assets","fxSubtitle":"Coordinated access to **fiat currencies** and **crypto assets** for international corporate operations.","daShort":"Crypto assets","daPrimary":"USDT is the crypto asset that concentrates our operational use: it holds dollar-referenced value while the operation is documented and the counterparty confirms conditions, and it closes international settlement when the banking route imposes timelines the client calendar cannot take.","daRole":"International settlement coverage","daNote":"Other crypto assets are assessed case by case, according to jurisdiction, counterparty and documentation.","daLink":"View crypto assets solution","fxCountLabel":"Fiat currencies","fxRegionLabel":"Operating regions","fxNote":"Coverage list, not a quotation. Availability of each currency depends on counterparty, jurisdiction, documentation and operational validation.","daChips":[{"code":"USDT","name":"Tether"}],"archCore":"CORE · Coordination core","orbitNames":{"USD":"US Dollar","MXN":"Mexican Peso","EUR":"Euro","GBP":"Pound Sterling","CNY":"Chinese Yuan","JPY":"Japanese Yen","CHF":"Swiss Franc","CAD":"Canadian Dollar","BTC":"Bitcoin","ETH":"Ethereum","USDT":"Tether","USDC":"USD Coin"},"orbitTypeFiat":"Fiat currency","orbitTypeDigital":"Crypto asset","fxColLabel":"Fiat currencies","probKicker":"","probStep1":"International friction","probStep2":"Solution design","probStep3":"Execution and simplicity","probAlt":"Diagram: three routes cross mountainous terrain with friction, converge at the B&B Capital Core hub and continue along a single corridor toward clarity and control.","probPause":"Pause","probPauseAria":"Pause or play the animation","probValue":"We transform friction into a clear financial route under your control.","procStep":"Step","entitiesKicker":"Institutional backing","entitiesNote":"B&B Capital Core operates with the institutional backing of regulated financial institutions in Mexico and abroad, with nearly four decades operating currencies and payments for companies. Detail available on request.","history":[{"tag":"Origins","title":"Currency operation in Mexico","desc":"The currency operation is born in Mexico, the base of an institutional financial track record."},{"tag":"Track record","title":"Nearly four decades","desc":"Accumulated experience operating currencies and payments for companies."},{"tag":"Expansion","title":"Mexico–Spain presence","desc":"The operation expands with operating presence across two markets."},{"tag":"Payment Institution","title":"Regulated structure in Spain","desc":"Regulated structure as a Payment Institution to operate in Europe."},{"tag":"Today","title":"B&B Capital Core","desc":"International financial coordination of FX, payments and treasury."}],"entities":[{"code":"01","name":"Regulated financial institution in Mexico","role":"Currency operation · nearly 40 years"},{"code":"02","name":"Regulated financial institution abroad","role":"International payments · Europe"},{"name":"B&B Capital Core","role":"International financial coordination","mark":true}],"coreMicro":"Availability of each asset and route depends on the operation and the jurisdiction.","fxRegions":[{"region":"Americas","items":[["USD","US Dollar","United States","m"],["CAD","Canadian Dollar","Canada","m"],["MXN","Mexican Peso","Mexico","m"],["ARS","Argentine Peso","Argentina","x"],["BRL","Brazilian Real","Brazil","x"],["CLP","Chilean Peso","Chile","x"],["COP","Colombian Peso","Colombia","x"],["PEN","Peruvian Sol","Peru","x"],["CRC","Costa Rican Colón","Costa Rica","x"],["GTQ","Guatemalan Quetzal","Guatemala","x"],["VEF","Venezuelan Bolívar","Venezuela","x"],["BSD","Bahamian Dollar","Bahamas","x"],["BMD","Bermudian Dollar","Bermuda","x"],["XCD","East Caribbean Dollar","Eastern Caribbean","x"],["TTD","Trinidad & Tobago Dollar","Trinidad & Tobago","x"]]},{"region":"Europe","items":[["EUR","Euro","Eurozone","m"],["GBP","British Pound","United Kingdom","m"],["CHF","Swiss Franc","Switzerland","m"],["DKK","Danish Krone","Denmark","m"],["NOK","Norwegian Krone","Norway","m"],["SEK","Swedish Krona","Sweden","m"],["PLN","Polish Zloty","Poland","m"],["HUF","Hungarian Forint","Hungary","m"],["TRY","Turkish Lira","Türkiye","m"],["CZK","Czech Koruna","Czechia","x"],["BGN","Bulgarian Lev","Bulgaria","x"],["RON","Romanian Leu","Romania","x"],["HRK","Croatian Kuna","Croatia","x"],["ISK","Icelandic Króna","Iceland","x"],["RUB","Russian Ruble","Russia","x"]]},{"region":"Asia","items":[["JPY","Japanese Yen","Japan","m"],["HKD","Hong Kong Dollar","Hong Kong","m"],["SGD","Singapore Dollar","Singapore","m"],["CNY","Chinese Yuan","China","m"],["KRW","Korean Won","South Korea","x"],["INR","Indian Rupee","India","x"],["TWD","Taiwan Dollar","Taiwan","x"],["THB","Thai Baht","Thailand","x"],["MYR","Malaysian Ringgit","Malaysia","x"],["PHP","Philippine Peso","Philippines","x"],["VND","Vietnamese Dong","Vietnam","x"],["PKR","Pakistani Rupee","Pakistan","x"],["BDT","Bangladeshi Taka","Bangladesh","x"],["LKR","Sri Lankan Rupee","Sri Lanka","x"]]},{"region":"Oceania","items":[["AUD","Australian Dollar","Australia","m"],["NZD","New Zealand Dollar","New Zealand","m"],["FJD","Fijian Dollar","Fiji","x"],["XPF","CFP Franc","French Polynesia","x"]]},{"region":"Africa","items":[["MAD","Moroccan Dirham","Morocco","m"],["ZAR","South African Rand","South Africa","m"],["EGP","Egyptian Pound","Egypt","x"],["DZD","Algerian Dinar","Algeria","x"],["TND","Tunisian Dinar","Tunisia","x"],["KES","Kenyan Shilling","Kenya","x"],["MUR","Mauritian Rupee","Mauritius","x"],["XOF","West African CFA Franc","West Africa","x"],["XAF","Central African CFA Franc","Central Africa","x"],["ZMK","Zambian Kwacha","Zambia","x"]]},{"region":"Middle East","items":[["AED","UAE Dirham","United Arab Emirates","x"],["SAR","Saudi Riyal","Saudi Arabia","x"],["QAR","Qatari Riyal","Qatar","x"],["KWD","Kuwaiti Dinar","Kuwait","x"],["BHD","Bahraini Dinar","Bahrain","x"],["OMR","Omani Rial","Oman","x"],["JOD","Jordanian Dinar","Jordan","x"],["ILS","Israeli Shekel","Israel","x"],["LBP","Lebanese Pound","Lebanon","x"],["IQD","Iraqi Dinar","Iraq","x"]]}],"servTitle":"Solutions","servSubtitle":"FX, international payments, treasury and financial alternatives, coordinated through partners, counterparties and **clear documentary processes**.","servCtaMain":"Assess an operation","servCta":"See application","diffKicker":"Differentiators","diffTitle":"Why us?","caseKicker":"Use cases","caseTitle":"Designed for real financial decisions.","caseSubtitle":"Representative cases to understand how we coordinate operations by profile, flow and need.","caseContext":"Friction","caseNeed":"Need","caseHow":"How B&B helps","caseResult":"Expected outcome","caseCta":"View applicable solutions","caseMicro":"Cases are representative.","caseCtaSimilar":"Assess a similar operation","procKicker":"Our process","procClose":"The process starts with a conversation about your operation.","procTitle":"Clarity for every operation","trustKicker":"Origins & track record","trustTitle":"The backing behind","trustTitle2":"every operation.","trustLead":"We were born as a regulated currency institution in Mexico. Nearly four decades later, that operation evolved into an international financial coordination firm.","trustYears":"Institutional financial track record.","trustPresence":"Operating presence Mexico–Spain.","ctKicker":"Let's talk","ctTitle":"Let’s talk about your operation.","ctText":"Share your need briefly and we will assess it precisely.","expectTitle":"What to expect next","fName":"Name","fCompany":"Company","fEmail":"Email","fPhone":"Phone","fNeed":"Type of need","fMsg":"Tell us briefly about your operation","fSend":"Request assessment","ctMailLabel":"Email","ctOfficesLabel":"Offices","ctMailBtn":"Email us","ctMailHref":"mailto:comunicacion@bbcapitalcore.com?subject=Inquiry%20from%20bbcapitalcore.com","fNeedOpts":["International payments / Corporate FX coordination","International treasury","FX hedging and strategy","Custody of funds","Crypto assets","Other"],"fMicro":"Your information will be treated confidentially and used solely to assess your request.","fFormTitle":"Assessment request","fThanksTitle":"Your information has been sent successfully.","fThanksSub":"Our team will review your request and contact you shortly.","footClaim":"Financial coordination and architecture firm specialized in FX, international payments, corporate treasury and operational assets.","footNavTitle":"Navigation","footLegalTitle":"Legal","footPresenceTitle":"Presence","footSocialTitle":"Social","footPrivacy":"Privacy notice","footTerms":"Terms & conditions","footCookies":"Cookie policy","footDisclosures":"Disclosures","footPresence1":"Mexico · Spain","footPresence2":"Executive attention upon request","trustAddress":"Operational service: CDMX, Mexico · Oviedo, Spain.","footAddress":"CDMX, Mexico\nOviedo, Spain","ctDispatch":"Operational dispatch in CDMX, Mexico and Oviedo, Spain.","footRights":"All rights reserved.","footLegal":"B&B Capital Core acts as an intermediary and coordinator of financial solutions, subject to counterparty availability, documentary validation, jurisdiction and applicable operating conditions.","services":[{"badge":"Payments · FX","glyph":"M 11 17 c 2 -4 10 -4 12 0","title":"International payments / Corporate FX coordination","desc":"Architecture design for payments anywhere in the world, in any currency, without opening current bank accounts and with a simpler repayment structure.","benefit":"Less administrative bureaucracy in every international payment."},{"badge":"Treasury","glyph":"M 12 22 v -8 M 17 22 v -12 M 22 22 v -5","title":"International treasury","desc":"We structure solutions for companies and business owners that need to move or obtain liquidity in different parts of the world.","benefit":"More visibility, control and financial planning."},{"badge":"Hedging","glyph":"M 17 11 l 6 3 v 4 c 0 3 -3 5 -6 6 c -3 -1 -6 -3 -6 -6 v -4 z","title":"FX hedging and strategy","desc":"Solution architecture focused on SMEs and individuals for agile access to currency credit, avoiding the bureaucracy of bank credit analysis.","benefit":"Agile access to currency credit, without traditional bank analysis."},{"badge":"Custody","glyph":"M 11 14 h 12 M 11 20 h 12 M 14 11 v 12 M 20 11 v 12","title":"Custody of funds","desc":"We coordinate the safekeeping of capital for later processing according to your treasury needs.","benefit":"Secure concentration of your capital."},{"badge":"Crypto","glyph":"M12 3.2 L19.6 7.6 V16.4 L12 20.8 L4.4 16.4 V7.6 Z M8.6 12 a3.4 3.4 0 1 0 6.8 0 a3.4 3.4 0 1 0 -6.8 0 M12 3.2 V8.6 M12 15.4 V20.8","title":"Crypto assets","desc":"We design solutions for dispersion, hedging and settlement needs through the use of USDT and specialized agents.","benefit":"Dispersion, hedging and settlement with specialized agents."}],"diffs":[{"num":"I","glyph":"M4 19 H9 C14 19 14 6 19 6 M16 3 L20 6 L16 9","title":"We design routes when the traditional process is not enough.","desc":"When the conventional route closes, we structure an alternative with verified partners and counterparties."},{"num":"II","glyph":"M4 20 H20 M6 20 V11 M10 20 V11 M14 20 V11 M18 20 V11 M4 11 L12 5 L20 11 Z","title":"Boutique agility with a treasury mindset.","desc":"Personalized attention on regulated structure in Mexico and Spain. Every decision is judged by flow, timing, risk and documentation."},{"num":"III","glyph":"M5 12 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0 M15 12 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0 M9 12 H15","title":"We connect strategy with operation.","desc":"We do not hand over a plan and step back: we stay with execution until the operation moves forward."},{"num":"IV","glyph":"M12 4 a8 8 0 1 0 0.01 0 M12 8 V12 L15 14","title":"Long-term relationships.","desc":"We work with clients who need precision, confidentiality and continuity, operation after operation."}],"cases":[{"label":"Importing company","frecuente":"International supplier payment · currency purchase · supporting documentation","situacion":"Pays suppliers in Asia or Europe, and the standard banking process does not keep up.","necesidad":"Control exchange rate, timing and documentation.","ayuda":"Coordinates the FX route and international settlement with documentary and institutional backing.","resultado":"Greater visibility, less operational friction and executive follow-up.","services":["FX","International payments","Foreign trade"]},{"label":"Corporate group","frecuente":"Flows between subsidiaries · regional treasury · currency liquidity","situacion":"Operates across subsidiaries, currencies and jurisdictions, each flow on its own criteria.","necesidad":"Concentrate treasury and coordinate flows between entities.","ayuda":"Designs the treasury architecture and coordinates the operation across markets.","resultado":"Orderly flows between entities and centralized financial control.","services":["Treasury","Liquidity","International payments"]},{"label":"CFO / Finance director","frecuente":"FX exposure · payment timing · margin control","situacion":"Manages FX exposure and margins under pressure, without seeing the real cost.","necesidad":"Visibility of costs, timing and institutional verification.","ayuda":"Provides exposure analysis and coordinates the operation with counterparty pricing and verifiable documentation.","resultado":"More control over costs, margins and financial timing.","services":["Hedging","Treasury","FX"]},{"label":"Family office","frecuente":"International wealth · diversification · operational assets","situacion":"Manages international wealth where the standard product does not reach.","necesidad":"Secure, discreet and efficient structures to mobilize capital.","ayuda":"Coordinates confidential solutions with institutional backing and a long-term relationship.","resultado":"Discreet, efficient structures with a long-term relationship.","services":["Crypto assets","Treasury","FX"]},{"label":"Tax or legal advisor","frecuente":"Documentation · traceability · coordination with end client","situacion":"Their client needs to execute an operation the conventional route does not resolve.","necesidad":"A financial ally to complement the firm's strategy.","ayuda":"Coordinates the financial route aligned with the client's legal and tax strategy.","resultado":"A financial route aligned with the legal and tax strategy.","services":["Documentation","Coordination","International payments"]}],"process":[{"num":"1","title":"Diagnosis","desc":"We understand operation, currency, destination, amount, timing and documentation."},{"num":"2","title":"Structure","desc":"We define the operating route and the applicable counterparties for each case."},{"num":"3","title":"Coordination","desc":"We accompany the operation with direct communication and institutional follow-up."},{"num":"4","title":"Verification","desc":"We deliver documentary verification and operational close."}],"trust":[{"num":"01","text":"Origin in a regulated exchange house in Mexico."},{"num":"02","text":"Payment Institution regulated in Spain."},{"num":"03","text":"Coordination for companies with international operations."},{"num":"04","text":"Executive communication and verifiable documentation."}],"expect":[{"num":"01","text":"We review your inquiry."},{"num":"02","text":"We identify a viable route."},{"num":"03","text":"We coordinate a conversation."}]}};
  }

  svcIcon(i) {
    const e = React.createElement;
    const S = { width: 34, height: 34, viewBox: '0 0 34 34', fill: 'none', 'aria-hidden': 'true' };
    const ink = '#112840', acc = '#427092';
    const ring = e('circle', { cx: 17, cy: 17, r: 16, stroke: 'rgba(66,112,146,0.28)', strokeWidth: 1 });
    if (i === 0) return e('svg', S, ring,
      e('g', { className: 'bb-ico ic-fx-top' },
        e('path', { d: 'M9 13 H22', stroke: ink, strokeWidth: 1.5, strokeLinecap: 'round' }),
        e('path', { d: 'M19 10 L22 13 L19 16', stroke: ink, strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' })),
      e('g', { className: 'bb-ico ic-fx-bot' },
        e('path', { d: 'M25 21 H12', stroke: ink, strokeWidth: 1.5, strokeLinecap: 'round' }),
        e('path', { d: 'M15 18 L12 21 L15 24', stroke: ink, strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' })),
      e('circle', { className: 'bb-ico ic-pulse', cx: 17, cy: 17, r: 1.5, fill: acc }));
    if (i === 1) return e('svg', S,
      e('circle', { cx: 17, cy: 18.4, r: 8.4, stroke: ink, strokeWidth: 1.25 }),
      e('ellipse', { cx: 17, cy: 18.4, rx: 3.5, ry: 8.4, stroke: 'rgba(17,40,64,0.38)', strokeWidth: 1 }),
      e('path', { d: 'M9 15.6 H25 M9 21.2 H25', stroke: 'rgba(17,40,64,0.38)', strokeWidth: 1 }),
      e('path', { className: 'ic-pay-line', d: 'M10.2 13.3 C13 6.6 21 6.6 23.8 13.3', stroke: acc, strokeWidth: 1.45, strokeLinecap: 'round', strokeDasharray: 26, fill: 'none' }),
      e('path', { d: 'M21.2 11.4 L23.8 13.4 L25 10.6', stroke: acc, strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' }),
      e('circle', { cx: 10.2, cy: 13.3, r: 1.6, fill: ink }));
    if (i === 2) return e('svg', S, ring,
      e('ellipse', { cx: 17, cy: 21.6, rx: 6.5, ry: 2.3, stroke: ink, strokeWidth: 1.2 }),
      e('ellipse', { cx: 17, cy: 17.6, rx: 6.5, ry: 2.3, stroke: ink, strokeWidth: 1.2 }),
      e('path', { d: 'M10.5 13.6 V21.6 M23.5 13.6 V21.6', stroke: 'rgba(17,40,64,0.32)', strokeWidth: 1 }),
      e('ellipse', { className: 'ic-coin-top', cx: 17, cy: 13.6, rx: 6.5, ry: 2.3, stroke: acc, strokeWidth: 1.35 }));
    if (i === 3) {
      const opt = this.props.coberturaIcon || 'banda';
      if (opt === 'paraguas') return e('svg', S,
        e('path', { className: 'bb-ico ic-shield', d: 'M6 17 C6 11 11 7 17 7 C23 7 28 11 28 17 Z', stroke: ink, strokeWidth: 1.3, strokeLinejoin: 'round' }),
        e('path', { d: 'M17 17 V24 C17 26 15.4 27 14 26.2', stroke: ink, strokeWidth: 1.3, strokeLinecap: 'round' }),
        e('circle', { className: 'bb-ico ic-core', cx: 17, cy: 7, r: 1.8, fill: acc }));
      if (opt === 'candado') return e('svg', S,
        e('rect', { className: 'bb-ico ic-shield', x: 9, y: 16, width: 16, height: 12, rx: 1.5, stroke: ink, strokeWidth: 1.3 }),
        e('path', { d: 'M12.5 16 V13 C12.5 10.5 14.5 8.5 17 8.5 C19.5 8.5 21.5 10.5 21.5 13 V16', stroke: ink, strokeWidth: 1.3, strokeLinecap: 'round' }),
        e('circle', { className: 'bb-ico ic-core', cx: 17, cy: 22, r: 2.2, fill: acc }));
      if (opt === 'banda') return e('svg', S, ring,
        e('path', { d: 'M9 13 C13 13 15 10 19 11 C22 11.8 23 13 25 12.6', stroke: 'rgba(17,40,64,0.35)', strokeWidth: 1 }),
        e('path', { d: 'M9 22 C13 22 15 19 19 20 C22 20.8 23 22 25 21.6', stroke: 'rgba(17,40,64,0.35)', strokeWidth: 1 }),
        e('path', { className: 'ic-check', d: 'M9 17.5 C13 17.5 15 14.5 19 15.5 C22 16.3 23 17.5 25 17.1', stroke: acc, strokeWidth: 1.6, strokeLinecap: 'round', strokeDasharray: 26 }));
      if (opt === 'balanza') return e('svg', S,
        e('path', { d: 'M17 8 V26 M10 26 H24', stroke: ink, strokeWidth: 1.3, strokeLinecap: 'round' }),
        e('path', { d: 'M8 12 H26', stroke: ink, strokeWidth: 1.3, strokeLinecap: 'round' }),
        e('path', { className: 'bb-ico ic-shield', d: 'M5 12 L8 18 H11 Z M23 12 L26 18 H29 Z', stroke: acc, strokeWidth: 1.2, strokeLinejoin: 'round' }),
        e('circle', { cx: 17, cy: 12, r: 1.8, fill: acc }));
      return e('svg', S,
        e('path', { className: 'bb-ico ic-shield', d: 'M17 6 L26 9.5 V16 C26 21.5 22 25.5 17 28 C12 25.5 8 21.5 8 16 V9.5 Z', stroke: ink, strokeWidth: 1.3, strokeLinejoin: 'round' }),
        e('path', { className: 'ic-check', d: 'M13 17 L16 20 L21 14', stroke: acc, strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', strokeDasharray: 16 }));
    }
    if (i === 4) return e('svg', S,
      e('rect', { x: 8.5, y: 9.5, width: 17, height: 15, rx: 1.4, stroke: ink, strokeWidth: 1.3, fill: 'none' }),
      e('path', { d: 'M12.2 9.5 V24.5', stroke: 'rgba(17,40,64,0.35)', strokeWidth: 1 }),
      e('path', { d: 'M11 26.5 V24.5 M23 26.5 V24.5', stroke: ink, strokeWidth: 1.2, strokeLinecap: 'round' }),
      e('circle', { cx: 18.8, cy: 17, r: 4.3, stroke: ink, strokeWidth: 1.2 }),
      e('g', { className: 'ic-vault-dial' },
        e('path', { d: 'M18.8 12.9 V17 M18.8 17 L21.7 18.9', stroke: acc, strokeWidth: 1.35, strokeLinecap: 'round' })),
      e('circle', { cx: 18.8, cy: 17, r: 1.1, fill: acc }));
    if (i === 5) return e('svg', S,
      e('path', { d: 'M17 6.6 L26.4 12 V22.8 L17 28.2 L7.6 22.8 V12 Z', stroke: ink, strokeWidth: 1.3, strokeLinejoin: 'round' }),
      e('circle', { className: 'bb-ico ic-core', cx: 17, cy: 17.4, r: 4.2, stroke: acc, strokeWidth: 1.35 }),
      e('path', { d: 'M17 6.6 V13.2 M17 21.6 V28.2', stroke: 'rgba(17,40,64,0.4)', strokeWidth: 1 }));
    return e('svg', S,
      e('path', { d: 'M8.4 17 H14.6', stroke: ink, strokeWidth: 1.4, strokeLinecap: 'round' }),
      e('path', { className: 'ic-pay-line', d: 'M14.6 17 C19 17 19 10.4 23.6 10.4', stroke: 'rgba(17,40,64,0.55)', strokeWidth: 1.25, strokeLinecap: 'round', strokeDasharray: 26, fill: 'none' }),
      e('path', { className: 'ic-pay-line', d: 'M14.6 17 H23.6', stroke: 'rgba(17,40,64,0.55)', strokeWidth: 1.25, strokeLinecap: 'round', strokeDasharray: 26, fill: 'none' }),
      e('path', { className: 'ic-pay-line', d: 'M14.6 17 C19 17 19 23.6 23.6 23.6', stroke: acc, strokeWidth: 1.35, strokeLinecap: 'round', strokeDasharray: 26, fill: 'none' }),
      e('circle', { cx: 8.2, cy: 17, r: 1.7, fill: ink }),
      e('circle', { cx: 24.6, cy: 10.4, r: 1.6, fill: ink }),
      e('circle', { cx: 24.6, cy: 17, r: 1.6, fill: ink }),
      e('circle', { className: 'bb-ico ic-core', cx: 24.6, cy: 23.6, r: 1.9, fill: acc }));
  }

  archDiagram(i) {
    const e = React.createElement;
    const S = { width: 76, height: 40, viewBox: '0 0 76 40', fill: 'none', 'aria-hidden': 'true' };
    const line = 'rgba(159,191,219,0.72)', dim = 'rgba(126,166,200,0.5)', node = '#0e2236';
    if (i === 0) {
      // Conexión — cliente ↔ contraparte
      return e('svg', S,
        e('line', { className: 'arch-link', x1: 20, y1: 20, x2: 56, y2: 20, stroke: line, strokeWidth: 1.4 }),
        e('circle', { cx: 38, cy: 20, r: 2.6, className: 'arch-travel', fill: '#EAF1F8' }),
        e('circle', { cx: 14, cy: 20, r: 6, fill: node, stroke: line, strokeWidth: 1.3 }),
        e('circle', { cx: 62, cy: 20, r: 6, fill: node, stroke: line, strokeWidth: 1.3 }));
    }
    if (i === 1) {
      // Coordinación — capas que se alinean
      return e('svg', S,
        e('line', { className: 'arch-lay1', x1: 16, y1: 11, x2: 60, y2: 11, stroke: line, strokeWidth: 1.4 }),
        e('line', { className: 'arch-lay2', x1: 16, y1: 20, x2: 60, y2: 20, stroke: dim, strokeWidth: 1.4 }),
        e('line', { className: 'arch-lay3', x1: 16, y1: 29, x2: 60, y2: 29, stroke: line, strokeWidth: 1.4 }),
        e('circle', { cx: 12, cy: 11, r: 1.6, fill: dim }),
        e('circle', { cx: 12, cy: 20, r: 1.6, fill: dim }),
        e('circle', { cx: 12, cy: 29, r: 1.6, fill: dim }));
    }
    if (i === 2) {
      // Control — escudo + validación
      return e('svg', S,
        e('path', { className: 'arch-shield', d: 'M38 7 L50 11 V21 C50 28 44 32 38 34 C32 32 26 28 26 21 V11 Z', stroke: dim, strokeWidth: 1.2, strokeLinejoin: 'round' }),
        e('path', { className: 'arch-check', d: 'M33 20 L37 24 L44 15', stroke: line, strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }));
    }
    // Simplicidad — varias rutas convergen en una sola
    return e('svg', S,
      e('path', { className: 'arch-lay1', d: 'M12 9 C30 9 26 20 40 20', stroke: dim, strokeWidth: 1.2 }),
      e('path', { className: 'arch-lay3', d: 'M12 31 C30 31 26 20 40 20', stroke: dim, strokeWidth: 1.2 }),
      e('line', { className: 'arch-link', x1: 40, y1: 20, x2: 64, y2: 20, stroke: line, strokeWidth: 1.5 }),
      e('circle', { cx: 40, cy: 20, r: 2.8, fill: node, stroke: line, strokeWidth: 1.3 }),
      e('circle', { cx: 64, cy: 20, r: 2.2, className: 'arch-travel', fill: '#EAF1F8' }));
  }

  _pauseOffscreen() {
    if (this._animVis) return;
    const secs = Array.from(document.querySelectorAll('section'));
    if (!secs.length) return;
    this._animVis = new IntersectionObserver((es) => {
      es.forEach((e) => { e.target.classList.toggle('bb-anim-off', !e.isIntersecting); });
    }, { threshold: 0, rootMargin: '80px 0px' });
    secs.forEach((s) => this._animVis.observe(s));
  }

  _caseAuto() {
    if (this._caseAutoInit) return;
    const list = document.getElementById('bb-caselist');
    if (!list) return;
    this._caseAutoInit = true;
    const stop = () => { if (this._caseTimer) { clearInterval(this._caseTimer); this._caseTimer = null; } };
    const start = () => {
      if (this._caseTimer || this._caseTouched || this._reduced) return;
      this._caseTimer = setInterval(() => {
        if (this._caseTouched) { stop(); return; }
        const n = ((this.state.caseOpen ?? 0) + 1) % (this._caseCount || 5);
        this.setState({ caseOpen: n }, () => this._syncCaseInd());
      }, 6000);
    };
    this._caseStop = stop;
    this._caseVis = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) start(); else stop(); });
    }, { threshold: 0.25 });
    this._caseVis.observe(list);
  }

  _syncCaseInd() {
    const list = document.getElementById('bb-caselist');
    const ind = document.getElementById('bb-caseind2');
    if (!list || !ind) return;
    const row = list.querySelector('.bb-caserow-w [aria-expanded="true"]');
    if (!row) { ind.style.height = '0px'; return; }
    const w = row.closest('.bb-caserow-w') || row;
    ind.style.top = (w.offsetTop) + 'px';
    ind.style.height = w.offsetHeight + 'px';
  }

  _prepArch() {
    if (!this._archIO) {
      this._archIO = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('bb-arch-in'); if (this._archLit) this._archLit(en.target); this._archIO.unobserve(en.target); } });
      }, { threshold: 0.2 });
    }
    document.querySelectorAll('[data-arch]').forEach((el) => {
      if (el.dataset.archObs) return;
      el.dataset.archObs = '1';
      if (this._reduced) { el.classList.add('bb-arch-in'); return; }
      const litSeq = (root) => {
        root.querySelectorAll('.bb-arch-node').forEach((n, i) => {
          setTimeout(() => { n.classList.add('lit'); setTimeout(() => n.classList.remove('lit'), 780); }, 300 + i * 200);
        });
      };
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.85) { el.classList.add('bb-arch-in'); litSeq(el); return; }
      this._archIO.observe(el);
      this._archLit = litSeq;
      clearTimeout(this._archFallback);
      this._archFallback = setTimeout(() => el.classList.add('bb-arch-in'), 1600);
    });
  }

  renderVals() {
    const norm = (s) => String(s == null ? '' : s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const FXQ = norm((this.state.fxQuery || '').trim());
    const fxKeep = (c) => !FXQ || norm(c.code).indexOf(FXQ) >= 0 || norm(c.name).indexOf(FXQ) >= 0 || norm(c.country).indexOf(FXQ) >= 0;
    const lang = this.state.lang ?? (this.props.defaultLang ?? 'es');
    const raw = this.copy()[lang];
    const bold = (s) => React.createElement(React.Fragment, null,
      ...String(s).split('**').map((part, i) => i % 2
        ? React.createElement('strong', { key: i, style: { fontWeight: 600, color: 'inherit' } }, part)
        : part));
    const t = { ...raw };
    if (typeof raw.solMicro === 'string') t.solMicro = raw.solMicro.replace(/[\s\u00a0]{2,}/g, '\u2003\u2003').trim();
    ['heroLead', 'probText', 'solText', 'servSubtitle', 'fxSubtitle'].forEach((k) => {
      if (typeof raw[k] === 'string' && raw[k].indexOf('**') >= 0) t[k] = bold(raw[k]);
    });
    const FXREG = t.fxRegions.map((r) => ({
      region: r.region,
      items: r.items.map((a) => Array.isArray(a) ? { code: a[0], name: a[1], country: a[2], tier: a[3] } : a),
    }));
    const FXALL = FXREG.reduce((a, r) => a.concat(r.items), []);
    const FXMATCH = (() => {
      const regions = FXREG.map((r) => ({ region: r.region, items: r.items.filter(fxKeep) })).filter((r) => r.items.length);
      const da = t.daChips.filter(fxKeep);
      return { regions, da, total: regions.reduce((a, r) => a + r.items.length, 0) + da.length };
    })();
    const fxTier = (k) => FXMATCH.regions.reduce((a, r) => a + r.items.filter((c) => c.tier === k).length, 0);
    const ALIAS = { fx: 'pagos', fxloan: 'cobertura', patrimonio: '', especializadas: '' };
    const route = ALIAS[this.state.route] !== undefined ? ALIAS[this.state.route] : this.state.route;
    const svcRaw = route ? SVC[route] : null;
    const svTags = svcRaw ? svcRaw.tags[lang] : [];
    const svCases = svcRaw ? CASES[lang].filter((c) => c.services.some((x) => svTags.indexOf(x) >= 0)) : [];

    return {
      isHome: !svcRaw,
      isService: !!svcRaw,
      sv: UI[lang],
      svc: svcRaw
        ? { badge: svcRaw[lang].badge, title: svcRaw[lang].title, desc: svcRaw[lang].desc, benefit: svcRaw[lang].benefit, glyph: svcRaw.glyph, box: svcRaw.box }
        : { badge: '', title: '', desc: '', benefit: '', glyph: '', box: '0 0 24 24' },
      svNeeds: svcRaw && svcRaw[lang].needs ? svcRaw[lang].needs.map((x, i) => ({ text: x, num: '0' + (i + 1) })) : [],
      svHasNeeds: !!(svcRaw && svcRaw[lang].needs && svcRaw[lang].needs.length),
      svCases,
      svHasCases: svCases.length > 0,
      svProcess: svcRaw && svcRaw[lang].process ? svcRaw[lang].process : [],
      svHasProcess: !!(svcRaw && svcRaw[lang].process && svcRaw[lang].process.length),
      svFaq: svcRaw && svcRaw[lang].faq ? svcRaw[lang].faq : [],
      svHasFaq: !!(svcRaw && svcRaw[lang].faq && svcRaw[lang].faq.length),
      svUses: svcRaw && svcRaw[lang].uses ? svcRaw[lang].uses.map((u) => ({ text: u })) : [],
      svHasUses: !!(svcRaw && svcRaw[lang].uses && svcRaw[lang].uses.length),
      svOthers: svcRaw ? ORDER.filter((k) => k !== route).map((k) => ({ href: '#servicio-' + k, badge: SVC[k][lang].badge, title: SVC[k][lang].title })) : [],
      t,
      claimA: String(t.solMicro || '').split(/\s{2,}/)[0] || '',
      claimB: String(t.solMicro || '').split(/\s{2,}/)[1] || '',
      pillars: t.pillars.map((p, i) => ({ ...p, diagram: this.archDiagram(i) })),
      pil: { a: t.pillars[0], b: t.pillars[1], c: t.pillars[2], d: t.pillars[3] }, services: t.services.map((s, i) => ({ ...s, anchor: 'svc-' + i, href: '#servicio-' + ['pagos', 'tesoreria', 'cobertura', 'custodia', 'cripto'][i], icon: this.svcIcon([1, 2, 3, 4, 5][i]), iconBig: React.createElement('div', { 'aria-hidden': 'true', style: { position: 'absolute', right: '-16px', bottom: '-16px', width: '120px', height: '120px', opacity: 0.05, transform: 'scale(3.4)', transformOrigin: 'bottom right', pointerEvents: 'none' } }, this.svcIcon([1, 2, 3, 4, 5][i])) })), diffs: t.diffs,
      process: t.process, trust: t.trust, expect: t.expect, needOptions: t.fNeedOpts, history: t.history, entities: t.entities,
      seek0: () => { this._frSeek = 0.02; this._frPaused = false; this._frSyncBtn(); },
      seek1: () => { this._frSeek = 0.44; this._frPaused = false; this._frSyncBtn(); },
      seek2: () => { this._frSeek = 0.70; this._frPaused = false; this._frSyncBtn(); },
      togglePlay: () => { this._frPaused = !this._frPaused; this._frSyncBtn(); },
      daVisible: FXMATCH.da.length > 0,
      fxFeatured: ['USD', 'EUR', 'CHF', 'GBP'].map((code) => {
        let hit = null, reg = '';
        FXREG.forEach((r) => r.items.forEach((it) => { if (it.code === code) { hit = it; reg = r.region; } }));
        return { code, name: hit ? hit.name : code, region: reg };
      }),
      fxTicker: FXALL.map((it) => ({ code: it.code, name: it.name })),
      fxAllLabel: lang === 'es' ? 'Todas las divisas' : 'All currencies',
      fxAllOpen: !!this.state.fxAllOpen,
      fxAllClosed: !this.state.fxAllOpen,
      fxAllToggle: () => this.setState({ fxAllOpen: !this.state.fxAllOpen }),
      fxAllCta: this.state.fxAllOpen ? (lang === 'es' ? 'Ocultar listado' : 'Hide list') : (lang === 'es' ? 'Ver todas' : 'View all'),
      fxAllChev: this.state.fxAllOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      fxMainLabel: lang === 'es' ? 'Principales' : 'Major',
      fxExoticLabel: lang === 'es' ? 'Exóticas' : 'Exotic',
      fxMain: FXMATCH.regions.reduce((a, r) => a.concat(r.items.filter((c) => c.tier === 'm')), []),
      fxMainCount: String(fxTier('m')),
      fxMainVisible: fxTier('m') > 0,
      fxExoticVisible: fxTier('x') > 0,
      fxExoticCount: String(fxTier('x')),
      fxExoticGroups: FXMATCH.regions.map((r) => ({
        region: r.region,
        n: '/' + String(r.items.filter((c) => c.tier === 'x').length).padStart(2, '0'),
        items: r.items.filter((c) => c.tier === 'x'),
      })).filter((r) => r.items.length),
      fxTotal: String(FXALL.length),
      fxRegionCount: String(FXREG.length),
      caseRows: (this._caseCount = t.cases.length) && t.cases.map((c, i) => ({ ...c, tags: String(c.frecuente || '').split('·').map((s) => s.trim()).filter(Boolean).map((s) => s.charAt(0).toUpperCase() + s.slice(1)), glyph: ['M4 9 L12 5 L20 9 V17 L12 21 L4 17 Z M4 9 L12 13 L20 9 M12 13 V21', 'M9 3 h6 v4 h-6 z M3 17 h6 v4 h-6 z M15 17 h6 v4 h-6 z M12 7 v5 M6 17 v-5 M18 17 v-5 M6 12 h12', 'M4 4 V20 H20 M7 16 L11 11 L14 14 L19 7 M19 7 H15 M19 7 V11', 'M6.4 7.6 a2.2 2.2 0 1 0 4.4 0 a2.2 2.2 0 1 0 -4.4 0 M13.2 7.6 a2.2 2.2 0 1 0 4.4 0 a2.2 2.2 0 1 0 -4.4 0 M4.2 20.2 v-3 a4.2 4.2 0 0 1 5.6 -3.9 M19.8 20.2 v-3 a4.2 4.2 0 0 0 -5.6 -3.9 M10.2 14.9 a1.8 1.8 0 1 0 3.6 0 a1.8 1.8 0 1 0 -3.6 0 M9 20.2 v-1.6 a3 3 0 0 1 6 0 v1.6', 'M6 3 h8 l4 4 v14 h-12 z M14 3 v4 h4 M9 16.5 l2 2 l4 -4'][i] || 'M4 12 H20', open: (this.state.caseOpen ?? 0) === i, frBg: (this.state.caseOpen ?? 0) === i ? 'rgba(184,112,92,0.09)' : 'transparent', frPad: (this.state.caseOpen ?? 0) === i ? '14px 16px' : '2px 0 2px 16px', rot: (this.state.caseOpen ?? 0) === i ? 'translateX(4px)' : 'translateX(0)', toggle: () => { this._caseTouched = true; if (this._caseStop) this._caseStop(); if ((this.state.caseOpen ?? 0) !== i) this.setState({ caseOpen: i }, () => this._syncCaseInd()); }, services: c.services.map((s) => { const a = this._svcAnchor(s); return { label: s, href: a ? '#' + a : '#soluciones', go: this._goService(a) }; }) })),
      langLabel: lang === 'es' ? 'ES' : 'EN',
      toggleLang: () => {
        const nx = lang === 'es' ? 'en' : 'es';
        try {
          localStorage.setItem('bb-lang', nx);
          const url = new URL(location.href);
          url.searchParams.set('lang', nx);
          history.replaceState(null, '', url);
        } catch (e) {}
        this.setState({ lang: nx });
      },
    };
  }
}
["_initGlobe","_initFriction","_initOrbit","_prepArch","_caseAuto","_pauseOffscreen","_initChrome","_initRoute","_syncCaseInd","componentDidUpdate"].forEach(function(k){
  var f=Component.prototype[k];
  if(typeof f==="function") Component.prototype[k]=function(){ try{ return f.apply(this,arguments); }catch(e){ if(window.console) console.warn("bb:"+k,e); } };
});
var lang=document.documentElement.lang==="en"?"en":"es";
var c=new Component(); c.props={}; c.state=c.state||{}; c.state.lang=lang; c.state.route="";
window.__bbCore=c;
function painted(cv){try{var x=cv.getContext("2d");if(!x)return false;var d=x.getImageData(0,0,cv.width,cv.height).data;for(var i=3;i<d.length;i+=3988){if(d[i]>8)return true;}return false;}catch(e){return true;}}
function killPosters(){var left=0;
  document.querySelectorAll(".bb-poster").forEach(function(p){
    var cv=p.parentElement&&p.parentElement.querySelector("canvas");
    if(!cv){p.remove();return;}
    var ready=p.getAttribute("data-needs-three")==="1"?!!window.THREE:painted(cv);
    if(!ready){left++;return;}
    p.style.transition="opacity .45s ease"; p.style.opacity="0";
    setTimeout(function(){p.remove();},500);
  });
  return left;}
function cases(){
  var ws=[].slice.call(document.querySelectorAll(".bb-caserow-w"));
  if(!ws.length) return;
  var idx=0, timer=null, touched=false;
  function show(i){ ws.forEach(function(w,k){
    var on=k===i, det=w.querySelector(".bb-casedet"), row=w.querySelector(".bb-caserow");
    var sit=w.querySelector("[data-case-sit]"), chev=w.querySelector("[data-case-chev]");
    w.setAttribute("data-open", on?"1":"0");
    if(det) det.style.display=on?"":"none";
    if(row) row.setAttribute("aria-expanded",String(on));
    if(sit){ sit.style.background=on?"rgba(184,112,92,0.09)":"transparent"; sit.style.padding=on?"14px 16px":"2px 0 2px 16px"; }
    if(chev) chev.style.transform=on?"translateX(4px)":"translateX(0)";
  }); }
  ws.forEach(function(w,i){ var row=w.querySelector(".bb-caserow"); if(!row) return;
    row.addEventListener("click",function(){idx=i;show(i);});
    row.addEventListener("mouseenter",function(){idx=i;show(i);});
    row.addEventListener("focus",function(){idx=i;show(i);});
    row.addEventListener("keydown",function(e){ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); show(i); } });
  });
  show(0);
  function stop(){ if(timer){clearInterval(timer);timer=null;} }
  function start(){ if(timer||touched) return;
    if(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer=setInterval(function(){ idx=(idx+1)%ws.length; show(idx); },6000); }
  ws.forEach(function(w,i){ var row=w.querySelector(".bb-caserow"); if(row) row.addEventListener("pointerdown",function(){ touched=true; stop(); }); });
  var list=document.getElementById("bb-caselist");
  if(list&&window.IntersectionObserver){ new IntersectionObserver(function(es){ es.forEach(function(e){ e.isIntersecting?start():stop(); }); },{threshold:0.25}).observe(list); }
  else start();
  window.__bbShowCase=function(i){ touched=true; stop(); show(i); };
}
function fxPanel(){
  var btn=document.querySelector("[data-fx-toggle]"), panel=document.querySelector("[data-fx-panel]");
  if(!btn||!panel) return;
  var spans=btn.querySelectorAll("span"), cta=spans[spans.length-1], chev=btn.querySelector("svg");
  var labels={hide:cta?cta.textContent:"",show:btn.getAttribute("data-label-show")||(lang==="en"?"View all":"Ver todas")};
  var open=true;
  btn.addEventListener("click",function(){ open=!open;
    panel.style.display=open?"":"none";
    btn.setAttribute("aria-expanded",String(open));
    if(cta) cta.textContent=open?labels.hide:labels.show;
    if(chev) chev.style.transform=open?"rotate(180deg)":"rotate(0deg)";
  });
  btn.click();
}
function boot(){
  document.querySelectorAll("[data-lang-swap]").forEach(function(b){b.addEventListener("click",function(){location.href=b.getAttribute("data-lang-swap");});});
  cases(); fxPanel();
  try{ var rv=c.renderVals();
    [["bb-fr-b0","seek0"],["bb-fr-b1","seek1"],["bb-fr-b2","seek2"],["bb-fr-pp","togglePlay"]].forEach(function(pair){
      var el=document.getElementById(pair[0]), fn=rv[pair[1]];
      if(el&&typeof fn==="function") el.addEventListener("click",fn);
    });
  }catch(e){ if(window.console) console.warn("bb:controls",e); }
  try{ c.componentDidMount(); }catch(e){ if(window.console) console.warn("bb:mount",e); }
  var n=0, iv=setInterval(function(){ n++; if(killPosters()===0||n>60) clearInterval(iv); },500);
}
if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",boot); else boot();
})();
