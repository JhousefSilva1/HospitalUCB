<template>
  <section class="contact-area pb-90">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="contact-box">
            <form action="#">
              <h3 class="title">
                Contactenos <br />
                Puede llenar el siguiente formulario con sus dudas o sugerencias
              </h3>
              <div class="row">
                <div class="col-md-6">
                  <div class="input-box">
                    <input type="text" placeholder="Nombre Completo" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-box">
                    <input type="text" placeholder="Asunto" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-box">
                    <input type="email" placeholder="Email " />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-box">
                    <input type="email" placeholder="Telefono o Celular" />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="input-box">
                    <textarea
                      name="#"
                      id="#"
                      cols="30"
                      rows="10"
                      placeholder="Escriba su comentario o mensaje"
                    ></textarea>
                    <button class="main-btn">Enviar</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="contact-sidebar">
            <FromCount />
            <signup-style-one />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FromCount from "../Utility/FollowCount/index";
export default {
  components: { FromCount},
};
</script>

<style></style>
