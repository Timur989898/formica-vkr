<template>
    <div>
        <HeaderCards />

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <div class="card mb-3">
                        <div class="challenge-img card-img-top">
                            <img src="https://fs.tonkosti.ru/sized/f700x700/37/1b/371b6xnsqqw4sco40kowkoksg.jpg" alt="img">
                        </div>
                        <div class="card-body">
                            <h2 class="card-title">Conquer everest!</h2>
                            <p class="card-text">28 people accepted this challenge</p>
                            <base-button type="success">Take the challenge</base-button>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="challenge-img card-img-top">
                            <img src="https://prousa.info/images/population/population_languages/languages.webp" alt="img">
                        </div>
                        <div class="card-body">
                            <h2 class="card-title">Learn a new language in a month!</h2>
                            <p class="card-text">21 people accepted this challenge</p>
                            <base-button type="success">Take the challenge</base-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import HeaderCards from "@/components/Custom/HeaderCards";
  export default {
      components: {HeaderCards},
  };
</script>
<style lang="scss" scoped>
    .challenge-img {
        max-height: 150px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 100%;
        }
    }
</style>
