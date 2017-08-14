<template lang="html">
    <div class="<%= name %>-list-container">
        <Form ref="form" :label-width="135">
            <Row>
                <!-- 搜索条件 -->
                
                <!-- 搜索条件 -->

                <Col span="6" offset="1">
                    <Button type="primary" @click="search" icon="search">
                        筛选
                    </Button>
                    <Button @click="clearQuery" icon="ios-reload">
                        重置
                    </Button>
                </Col>
            </Row>
        </Form>
        <Row class="table-container">
            <Spin fix class="spin-loading" v-if="loading">
                <Icon type="load-c" size="18" class="spin-icon-load"></Icon>
                <div>Loading</div>
            </Spin>
            <Table :columns="tableColumns" :data="tableList">
            </Table>
            <Page
                class="page-container"
                :total="total"
                :page-size="query.pageSize"
                :current="query.pageNum"
                @on-change="handleCurrentChange"
                @on-page-size-change="handlePageSizeChange"
                show-sizer>
            </Page>
        </Row>
    </div>
</template>

<script>
import List from '@/components/list'
import * as Config from './list.config.js'

export default {
  extends: List,
  data () {
    return {
      uniqueName: '<%= uniqueName %>',
      urlCacheQuery: <%= urlCacheQuery %>,
      query: {
        pageNum: 1,
        pageSize: 10
      },
      tableColumns: Config.getTableColumns(this)
    }
  },
  methods: {
    fetchApi () {
      return Promise.resolve(null)
    }
  }
}
</script>

<style lang="less" scoped>
.<%= name %>-list-container {
  .spin-icon-load{
    animation: ani-spin 1s linear infinite;
  }
  @keyframes ani-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
  .table-container {
    padding: 10px 0;
  }
  .spin-loading {
    border: 1px solid #ddd;
    top: 40%;
    margin: 0 auto;
    width: 150px;
    height: 60px;
  }
  .page-container {
    padding: 10px 0;
  }
}
</style>
