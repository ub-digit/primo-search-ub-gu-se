<script >
export default {
  data() {
      return {
        lang: "en",
        searchStr: "",
        lang_map: {
          en: "en-US",
          sv: "sv-SE"
        },
        i18n: {
          en: {
            placeholder: "Books, articles, theses…",
            aria_label: "Search in Supersök",
            btn_text: "Search",
          }, 
          sv: {
            placeholder: "Böcker, artiklar, avhandlingar…",
            aria_label: "Sök i Supersök",
            btn_text: "Sök"
          }
        }
      }
    },
    methods: {
      submitSearch(n) {
        window.location.href = `https://gu-se-primo.hosted.exlibrisgroup.com/primo-explore/search?query=any,contains,${this.searchStr}&search_scope=default_scope&sortby=rank&vid=46GUB_VU1&lang=${this.lang_map[this.lang]}`
      }
    },
    computed: {
      appStrings() {
        // `this` points to the component instance
        if (this.lang === "en") {
          return this.i18n.en;
        }
        return this.i18n.sv;

      }
    }
}
</script>

<template>
  <div class="container">
    <div class="row pt-4">
      <div class="col-12">
        <form class="custom-form" @submit.prevent="submitSearch()">
          <input type="text" v-model="searchStr" name="query" class="form-control input-lg" :aria-label="appStrings.aria_label" :placeholder="appStrings.placeholder">
          <div class="input-icon">
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
          <div class="input-btn">
            <button class="btn btn-primary" type="submit" :aria-label="appStrings.aria_label">{{appStrings.btn_text}}</button>
          </div>
        </form> 
      </div>
    </div>
  </div>
</template>

<style scoped>
  .custom-form {
    position: relative;
  }
  .custom-form input {
    height: 70px;
    border-radius: 6px;
    box-shadow: 1px 5px 20px rgba(51, 51, 51, 0.5);
    border: none;
    padding-left: 60px;
    padding-right: 20%;
    font-size: 1.5em;
  }
  .custom-form input:focus {
    outline: 5px solid #333333;
  }
  .custom-form .input-icon {
    position: absolute;
    left: 20px;
    top: 20px;
  }
  .custom-form .input-icon .fa {
    transform: rotate(90deg);
    color: #333333;
    font-size: 30px;
  }
  .custom-form .input-btn {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .custom-form .input-btn button {
    padding-right: 20px;
    padding-left: 20px;
    height: 50px;
    border-radius: 5px;
    background: #333333;
    font-size: 1.375em;
  }
  .custom-form .input-btn button.btn-primary {
    border-color: #333333;
  }
</style>
