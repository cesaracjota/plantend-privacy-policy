import {
  Box,
  Container,
  StackDivider,
  Text,
  VStack,
  Icon,
} from "@chakra-ui/react";

import {
  FcInfo,
  FcCheckmark,
  FcHighPriority,
  FcIdea,
  FcUnlock,
  FcSynchronize,
  FcFinePrint,
  FcBarChart,
} from "react-icons/fc";

const PrivacyPolicy = () => {
  return (
    <Container maxW={"8xl"} px={5} mt={10} textAlign={"justify"}>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
        fontSize={"md"}
      >
        <Text>
          Esta declaración de privacidad{" "}
          <strong>(" Política de privacidad ")</strong> explica nuestra
          recopilación de cualquier información personal que podamos obtener
          sobre usted de usted o de un tercero y los fines para los que podemos
          procesar dicha información. Esta Política de privacidad también
          establece sus derechos con respecto a nuestro procesamiento de su
          información personal. El propósito de esta Política de privacidad
          también es cumplir con las leyes de privacidad de datos aplicables y,
          si corresponde, las " Leyes DP " (como se define cerca del final de
          esta Política de privacidad). Esta Política de privacidad le informa
          sobre la naturaleza de la información que recopilamos y procesamos y
          cómo puede solicitar que la eliminemos, actualicemos, transfiramos y/o
          le proporcionemos acceso a ella. Esta Política de privacidad está
          destinada a ayudarlo a tomar una decisión informada al usar la
          Plataforma y nuestros Servicios y / o comprender cómo podemos procesar
          su información como resultado de su uso y la función de la Plataforma
          y los Servicios. Lea atentamente esta Política de privacidad para
          comprenderla. Tenga en cuenta que al usar la Plataforma, debe leerse
          junto con nuestros Términos de servicio, que pueden actualizarse
          periódicamente. Tenga en cuenta también que esta Política de
          privacidad solo se aplica al uso de su información personal obtenida
          por nosotros, NO se aplica a su información personal que se recopila
          durante sus comunicaciones con terceros.
        </Text>
        <Box>
          <Text style={{ fontWeight: "bold" }}>
            <Icon color={"red"} w={3} h={3} as={FcInfo} /> QUÉ INFORMACION
            RECOPILAMOS Y CÓMO SE UTILIZA
          </Text>
          <br />
          <Text>
            Podemos recopilar y conservar información personal relacionada con
            usted que sea necesaria para llevar a cabo nuestro negocio, lo que
            incluye (entre otros) entregar productos, servicios o información,
            mejorar nuestros servicios para ofrecer una mejor experiencia y
            cumplir con nuestras obligaciones reglamentarias. Le informaremos
            cuando solicitemos su información personal si es un requisito legal
            o contractual para proporcionarnos la información y las
            consecuencias de no proporcionar la información.
          </Text>
          <br />
          <Text>
            Para llevar a cabo los objetivos anteriores, podemos recopilar la
            siguiente información personal relacionada con nuestros usuarios:
          </Text>
          <br />
          <Text>
            <Icon color={"green"} as={FcCheckmark} />{" "}
            <strong>Perfil de usuario: </strong>Si es usuario de la Aplicación,
            la creación de un perfil de usuario es opcional. Si se registra para
            obtener una cuenta de usuario con la Aplicación, podemos recopilar
            cierta información, como su dirección de correo electrónico, nombre
            de usuario y contraseña. Tenga en cuenta, sin embargo, que no
            recopilamos información de su cuenta de redes sociales.
          </Text>
          <br />
          <Text>
            <Icon color={"green"} as={FcCheckmark} />{" "}
            <strong>Contenido de usuario: </strong> recopilaremos cualquier
            contenido de usuario que cree, comparta o publique en la Aplicación,
            que puede incluir información contenida en su cuenta de usuario, así
            como fotos u otros archivos de imagen y metadatos asociados. Tenga
            en cuenta que otros usuarios de la Aplicación pueden descargar y
            extraer cualquier imagen compartida públicamente en la Aplicación.
          </Text>
          <br />
          <Text>
            <Icon color={"green"} as={FcCheckmark} />{" "}
            <strong>Dispositivo y uso de Internet: </strong> si descarga la
            Aplicación, podemos recopilar información de su dispositivo,
            incluidos identificadores para ayudarnos a identificar el hardware y
            el sistema operativo de su dispositivo. Se puede acceder a la
            información del dispositivo utilizando identificadores estándar de
            la industria, como los aprobados por el fabricante del sistema
            operativo de su dispositivo.
          </Text>
        </Box>
        <Box>
          <Text style={{ fontWeight: "bold" }}>
            <Icon color={"green"} w={3} h={3} as={FcHighPriority} /> INFORMACION
            QUE NO ESTÁ CUBIERTA POR ESTA POLITICA DE PRIVACIDAD
          </Text>
          <br />
          <Text>
            Podemos permitirle comunicarse con otros usuarios de la Aplicación y
            publicar información utilizando tableros de mensajes y otras
            funciones similares disponibles a través de la Aplicación. NINGUNA
            de la información que proporciona utilizando estas funciones está
            protegida por esta Política de privacidad. Debe consultar las
            prácticas de privacidad de estos terceros antes de compartir su
            información con terceros.
          </Text>
        </Box>
        <Box>
          <Text style={{ fontWeight: "bold" }}>
            <Icon color={"green"} w={3} h={3} as={FcIdea} /> RETENCIÓN DE DATOS
          </Text>
          <br />
          <Text>
            Conservamos su información personal durante el tiempo que sea
            necesario y relevante para nuestro negocio. Los criterios utilizados
            para determinar los períodos de retención incluyen: (i) cuánto
            tiempo se necesita la información personal para proporcionar los
            servicios y operar el negocio; (ii) el tipo de información personal
            recopilada; y (iii) si estamos sujetos a una obligación legal,
            contractual o similar de retener la información personal (p. ej.,
            leyes de retención de datos obligatorias, órdenes gubernamentales
            para preservar datos relevantes para una investigación o datos que
            deben conservarse con fines de litigio). o disputas).
          </Text>
        </Box>
        <Box>
          <Text style={{ fontWeight: "bold" }}>
            <Icon color={"green"} w={3} h={3} as={FcBarChart} /> DERECHO DE
            DATOS
          </Text>
          <br />
          <Text>
            Tiene derecho (sujeto a ciertas limitaciones) a: (i) solicitar
            acceso a la información personal que tenemos sobre usted; (ii) la
            corrección de su información personal cuando sea incorrecta,
            desactualizada o incompleta; (iii) solicitar que eliminemos su
            información personal; (iv) darse de baja de cualquier comunicación
            de marketing que podamos enviarle y oponerse a que usemos/retengamos
            su información personal si no tenemos una razón legítima para
            hacerlo; y (iii) la portabilidad de la información personal, es
            decir, solicitar que se le proporcione una copia de su información
            personal a usted oa un tercero en formato digital. Cuando dependamos
            de su consentimiento para manejar su información personal, tiene
            derecho a retirar su consentimiento para este uso en cualquier
            momento.
          </Text>
          <br />
          <Text>
            Todas estas solicitudes deben realizarse utilizando los datos de
            contacto que se indican a continuación. Tenga en cuenta que si
            solicita que se elimine su información personal, es posible que ya
            no pueda acceder o utilizar ciertas partes de la Aplicación.
            Responderemos a su solicitud por escrito, u oralmente si así lo
            solicita, tan pronto como sea posible y, en cualquier caso, no más
            de un mes después de recibir su solicitud. En casos excepcionales,
            podemos extender este período por dos meses y le diremos por qué.
            Podemos solicitar una prueba de identificación para verificar su
            solicitud. Para obtener más detalles en relación con sus derechos,
            incluido cómo ejercerlos, contáctenos utilizando los datos de
            contacto a continuación.
          </Text>
          <br />
          <Text>
            También tiene derecho a presentar una queja sobre el manejo de su
            información personal ante una autoridad de protección de datos de la
            UE u otro regulador relevante. Los residentes de California pueden
            solicitar cierta información sobre nuestra divulgación de datos
            personales durante el año calendario anterior a terceros para sus
            fines de marketing directo. No compartimos sus datos personales con
            terceros o afiliados corporativos para sus fines de marketing
            directo.
          </Text>
        </Box>
        <Box>
          <Text style={{ fontWeight: "bold" }}>
            <Icon color={"green"} w={3} h={3} as={FcUnlock} /> SEGURIDAD
          </Text>
          <br />
          <Text>
            Mantenemos estándares y procedimientos de seguridad diseñados para
            evitar el acceso no autorizado a sus datos por parte de cualquier
            persona, incluido nuestro personal. Utilizamos medios comercialmente
            razonables como (pero no limitados a) encriptación de datos,
            cortafuegos y autenticación de servidor para proteger la seguridad
            de su información personal. La Compañía y nuestro personal y
            cualquier tercero contratado para brindar servicios de soporte
            deberán observar nuestros estándares de privacidad y permitirnos
            auditarlos para verificar su cumplimiento. Sin embargo, ninguna
            defensa de seguridad de la información es impenetrable, y no podemos
            garantizar la seguridad de nuestras aplicaciones, servidores o bases
            de datos, ni podemos garantizar que la información que usted
            proporcione no será interceptada mientras nos la transmite a través
            de Internet.
          </Text>
        </Box>
        <Box>
          <Text style={{ fontWeight: "bold" }}>
            <Icon color={"green"} w={3} h={3} as={FcSynchronize} /> CAMBIOS
          </Text>
          <br />
          <Text>
            Esta Política de privacidad establece nuestras políticas actuales y
            demuestra nuestro compromiso con su privacidad. Podemos cambiar el
            contenido o los servicios que se encuentran en la Aplicación en
            cualquier momento y, en consecuencia, nuestra Política de privacidad
            puede cambiar en cualquier momento en el futuro y se actualizará
            periódicamente. Cada vez que realicemos cambios en esta Política de
            privacidad que sean importantes para usted, publicaremos la Política
            de privacidad actualizada en este enlace.
          </Text>
        </Box>
        <Box>
          <Text style={{ fontWeight: "bold" }}>
            <Icon color={"green"} w={3} h={3} as={FcFinePrint} /> CONSULTAS
          </Text>
          <br />
          <Text>
            Si tiene alguna consulta sobre cuestiones de privacidad o si desea
            ejercer sus derechos de datos como se describe anteriormente,
            envíenos un correo electrónico o visite cualquiera de nuestras
            sucursales para obtener más información. Para asegurarnos de llevar
            a cabo sus instrucciones con precisión, para ayudarnos a mejorar
            continuamente nuestro servicio y en aras de la seguridad, podemos
            monitorear y/o grabar sus llamadas telefónicas con nosotros.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default PrivacyPolicy;
