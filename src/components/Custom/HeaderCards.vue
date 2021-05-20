<template>
  <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
    <!-- Card stats -->
    <div class="row">
      <div class="col-xl-3 col-lg-6">
        <stats-card title="Total targets"
                    type="gradient-red"
                    :sub-title="myTargets.length"
                    icon="ni ni-active-40"
                    class="mb-4 mb-xl-0"
        />
      </div>
      <div class="col-xl-3 col-lg-6">
        <stats-card title="Active targets"
                    type="gradient-orange"
                    :sub-title="myTargets.length"
                    icon="ni ni-chart-pie-35"
                    class="mb-4 mb-xl-0"
        />
      </div>
      <div class="col-xl-3 col-lg-6">
        <stats-card title="Achievements"
                    type="gradient-green"
                    sub-title="8"
                    icon="ni ni-money-coins"
                    class="mb-4 mb-xl-0"
        />
      </div>
      <div class="col-xl-3 col-lg-6">
        <stats-card title="Achievements"
                    type="gradient-info"
                    sub-title="49,65%"
                    icon="ni ni-chart-bar-32"
                    class="mb-4 mb-xl-0"
        />
      </div>
    </div>
  </base-header>
</template>

<script>
import {mapState} from "vuex";

export default {
name: "HeaderCards",
  computed: {
    ...mapState('targets', ['myTargets']),
  }
}
</script>

<style scoped>

</style>