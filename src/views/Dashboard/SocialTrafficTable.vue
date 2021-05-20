<template>
    <div class="card">
        <div class="card-header border-0">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="mb-0">Categories</h3>
                </div>
                <!--        <div class="col text-right">-->
                <!--          <base-button size="sm" type="primary">See all</base-button>-->
                <!--        </div>-->
            </div>
        </div>

        <div class="table-responsive">
            <base-table thead-classes="thead-light"
                        :data="tableData">
                <template slot="columns">
                    <th>title</th>
                    <th>count</th>
                    <th>complete</th>
                    <th></th>
                </template>

                <template slot-scope="{row}">
                    <th scope="row">
                        {{row.name}}
                    </th>
                    <td>
                        {{row.visitors}}
                    </td>
                    <td>
                        <div class="d-flex align-items-center">
                            <span class="mr-2">{{row.progress}}%</span>
                            <base-progress :type="row.progressType"
                                           class="pt-0"
                                           :show-percentage="false"
                                           :value="row.progress"
                            />
                        </div>
                    </td>
                </template>

            </base-table>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'social-traffic-table',
        data() {
            return {
                tableData: [
                    {
                        name: 'Sport',
                        visitors: '28',
                        progress: 50,
                        progressType: 'gradient-warning',
                    },
                    {
                        name: 'Education',
                        visitors: '33',
                        progress: 66,
                        progressType: 'gradient-primary',
                    },
                    {
                        name: 'Сommunication',
                        visitors: '30',
                        progress: 80,
                        progressType: 'gradient-success',
                    },
                    {
                        name: 'Travel',
                        visitors: '12',
                        progress: 75,
                        progressType: 'gradient-info',
                    },
                    {
                        name: 'Fun',
                        visitors: '20',
                        progress: 30,
                        progressType: 'gradient-danger',
                    }
                ]
            }
        }

    }
</script>
<style>
</style>
