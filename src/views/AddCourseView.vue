<script setup>
import NavbarTop from "@/components/navbar/NavbarTop.vue";

function onPickFile () {
  this.$refs.fileInput.click()
}

function onFilePicked (event) {
  const files = event.target.files
  let filename = files[0].name
  const fileReader = new FileReader()
  fileReader.addEventListener('load', () => {
    this.imageUrl = fileReader.result
  })
  fileReader.readAsDataURL(files[0])
  this.image = files[0]
}

</script>

<template>
  <NavbarTop />

  <div class="text-md-left ml5">
    
    <div class="row">
        <h1><input type="name" placeholder="Nazwa kursu"></h1>
        
        <div class="col">
            <h3>
                Kategoria kursu:<br>
                <select v-model="selected">
                    <option disabled value="">Wybierz Kategorię</option>
                    <option>Python</option>
                    <option>E-commerce</option>
                    <option>Kurs języka hiszpańskiego</option>
                    <option>JavaScript</option>
                    <option>Algorytmy</option>
                </select>
                <br>
                <button @click="onPickFile">Upload profile picture</button>
                <input
                    type="file"
                    style="display: none"
                    ref="fileInput"
                    accept="image/*"
                    @change="onFilePicked"/>
            </h3>
        </div>

        <div class="col">
            <h3>
                Cena kursu:<br>
                <input type="price" placeholder="zł"><br>

                Opis kursu:<br>
                <textarea v-model="message" placeholder="Opisz swoją wersję kursu najlepiej jak potrafisz..."></textarea>

            </h3>
        </div>
    </div>

    <h2><button>Dodaj kurs</button></h2>
  </div>
</template>

<style scoped>

</style>