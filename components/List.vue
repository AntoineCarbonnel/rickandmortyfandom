<template>
  <section id="list">
    <div class="infoList container">
      <div class="cell">
        {{ infoList.columnLeft }}
      </div>
      <div class="cell">
        {{ infoList.columnCenter }}
      </div>
      <div class="cell">
        {{ infoList.columnRight }}
      </div>
    </div>
    <div @click="showMoreDetail($event)" v-for="element in list" :key="element.id" class="list row container">
      <div class="cell">
        {{ element[accessor.columnLeft] }}
      </div>
      <div class="cell">
        {{ element[accessor.columnCenter] }}
      </div>
      <div class="cell">
        {{ element[accessor.columnRight] }}
      </div>
      <div v-if="$route.name === 'characters' " class="focus">
        <img :src="element.image" alt="avatar">
        <div class="info">
          <div>
            <span>Location:</span> {{ element.name }}
          </div>
          <div>
            <span>Status:</span> {{ element.status }}
          </div>
          <div v-show="element.type !== ''">
            <span>Type:</span> {{ element.type }}
          </div>
          <div>
            <span>Origin:</span> {{ element.origin.name }}
          </div>
          <div>
            <span>episodes:</span> span
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "List",
  props: [
    'search',
    'infoList',
    'accessor',
    'data'
  ],
  methods: {
    showMoreDetail: function (node) {
      if (this.$route.name === "characters") {
        node.currentTarget.querySelector('.focus').style.display = node.currentTarget.querySelector('.focus').style.display === "flex" ? "none" : "flex"
      }
    }
  },
  computed: {
    list: function () {
      return this.data.results !== undefined ? this.data.results.filter(element => element.name.toLowerCase().includes(this.search.toLowerCase())) : []
    }
  }
}
</script>

<style scoped lang="scss">
#list {
  width: 100%;
  min-height: 90vh;
  padding: 0 10px;

  .infoList {
    .cell {
      font-weight: bold;
    }
  }

  .list {
    cursor: pointer;
    margin: 10px auto;
    background-color: white;
    flex-wrap: wrap;

    .focus {
      display: none;
      width: 100%;
      margin-top: 10px;

      > img {
        height: 90%;
        margin-left: 20px;
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        flex-wrap: wrap;
        height: 100%;
        margin-left: 20px;

        span {
          font-weight: bold;
        }
      }
    }
  }

  .infoList,
  .list {
    display: flex;
    justify-content: space-around;

    .cell {
      width: 32%;
      padding: 10px 0;
      text-align: center;
    }
  }
}
</style>
