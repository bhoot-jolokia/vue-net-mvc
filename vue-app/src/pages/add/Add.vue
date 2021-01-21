<template>
  <div>
    {{firstValue}} + {{secondValue}} = {{sum}}
  </div>
</template>

<script>
async function addOnServer(url, body) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  return response.json();
}

export default {
  name: 'Add',
  props: {
    baseApiUrl: {
      required: true, 
      type: String
    },
    firstValue: {
      required: true,
      type: Number
    },
    secondValue: {
      required: true,
      type: Number
    }
  },
  data: function () {
    return {
      sum: 'Calculating...'
    }
  },
  created: async function () {
    const body = {firstValue: this.firstValue, secondValue: this.secondValue};
    const responseBody = await addOnServer(`${this.baseApiUrl}/Home/Add`, body);
    this.sum = responseBody.sum;  
  }
}
</script>

<style scoped>

</style>