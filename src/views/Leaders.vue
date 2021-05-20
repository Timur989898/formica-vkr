<template>
    <div>
        <HeaderCards />

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <leaders-table title="Leaders"></leaders-table>
                </div>
                <div class="alert-custom">
                    <base-alert type="success">
                        <strong>Success!</strong> For completing the task of the day, you get 10 points!
                    </base-alert>
                    <base-alert type="success">
                        <strong>Wow!</strong> You go to level 5. Great job!
                    </base-alert>
                    <base-alert type="info">
                        <strong>Time for new achievements!</strong> Alexandra Shvecova challenged you!
                    </base-alert>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
  import LeadersTable from './Tables/LeadersTable'
  import HeaderCards from "@/components/Custom/HeaderCards";
  export default {
    name: 'tables',
    components: {
      HeaderCards,
      LeadersTable
    }
  };
</script>
<style>
    .alert-custom {
        position: absolute;
        bottom: 100px;
        right: 100px;
    }
</style>
