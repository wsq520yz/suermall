<template>
  <div class="ItemParams">
    <table class="params" v-for="table in itemParams.tables ">
      <thead>{{itemParams.ruleKey}}</thead>
      <tr v-for="line  in  table">
        <td v-for="cell in line">{{cell}}</td>
      </tr>
    </table>
    <table class="infoSet">
      <thead>{{itemParams.infoKey}}</thead>
      <tr v-for="item in itemParams.infoSet">
        <td class="first">{{item.key}}</td>
        <td class="last">{{item.value}}</td>
      </tr>
    </table>

  </div>
</template>

<script>
  export default {
    name: "ItemParams",
    props: {
      itemParams: {
        type: Object,
        default() {
          return {}
        }
      },
    },
    data() {
      return {
        rule: this.itemParams.rule
      }
    },
    mounted() {
    }
  }
</script>

<style scoped lang="less">
  .ItemParams {
    .params {
      border-collapse: collapse;
      width: 100%;
      background-color: #fff;
      border-radius: 5px;
      padding-bottom: 15px;

      thead {
        display: inline-block;
        padding-left: 15px;
      }

      tr {
        td {
          padding: 8px;
        }

        :nth-child(1) {
          width: 40%;
          text-align: center;
          font-weight: bolder;
          font-size: 1em;
        }
      }
    }

    .infoSet {
      margin-top: 5px;
      background-color: #fff;

      thead {
        display: inline-block;
        padding-left: 15px;
      }

      tr {
        display: inline-block;
        width: 100%;
        padding-bottom: 8px;
        border-bottom: 3px solid #f2f2f2;

        .first {
          padding-left: 8px;
          width: 60px;
        }

        .last {
          color: var(--color-tint);
        }
      }
    }
  }
</style>
