<template>
    <div class="card">
        <div class="card-header border-0">
            <div class="row align-items-center">
                <div class="col">
                    <h3 class="mb-0">Last targets</h3>
                </div>
                <div class="col text-right">
                    <a href="#!" class="btn btn-sm btn-primary">See all</a>
                </div>
            </div>
        </div>

        <div class="table-responsive">
            <base-table thead-classes="thead-light"
                        :data="tableData">
                <template slot="columns">
                    <th>Title</th>
                    <th>category</th>
                    <th>achieved</th>
                    <th>Last month progress</th>
                </template>

                <template slot-scope="{row}">
                    <th scope="row">
                        {{row.title}}
                    </th>
                    <td>
                        {{row.category}}
                    </td>
                    <td>
                        {{row.achieved}}
                    </td>
                    <td>
                        <i class="fas fa-arrow-up text-success mr-3"
                           :class="row.bounceRateDirection === 'up' ? 'text-success': 'text-danger'">
                        </i>
                        {{row.progress}}
                    </td>
                </template>

            </base-table>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'page-visits-table',
        data() {
            return {
                tableData: [
                    {
                        title: 'Run 250 km',
                        category: 'Sport',
                        achieved: '156',
                        progress: '46,53%',
                        bounceRateDirection: 'up'
                    },
                    {
                        title: 'New English words',
                        category: 'Education',
                        achieved: '310',
                        progress: '70,58%',
                        bounceRateDirection: 'up'
                    },
                    {
                        title: 'Meet 20 old friends',
                        category: 'Communication',
                        achieved: '18',
                        progress: '20%',
                        bounceRateDirection: 'down'
                    },
                    {
                        title: 'Visit 10 different countries',
                        category: 'Travel',
                        achieved: '7',
                        progress: '25%',
                        bounceRateDirection: 'down'
                    },
                    {
                        title: 'Participate in 5 flash mobs',
                        category: 'Fun',
                        achieved: '3',
                        progress: '50%',
                        bounceRateDirection: 'up'
                    },
                ]
            }
        }
    }
</script>
<style>
    .text-danger {
        transform: rotate(180deg);
    }
</style>
