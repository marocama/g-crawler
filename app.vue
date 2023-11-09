<template>
  <div class="hero min-h-screen bg-base-100">
    <div class="hero-content text-center">
      <div class="max-w-2xl">
        <h1 class="flex justify-center items-center space-x-5 text-5xl font-bold">
          <span>Google</span>
          <img class="h-10" src="@/assets/img/spider.png" />
          <span>Crawler</span>
        </h1>
        <p class="pt-6">Realize pesquisas no Google e automatize a coleta de resultados.</p>
        <p class="pb-6">Para obter resultados com a incidência exata dos termos, utilize as aspas na sua pesquisa.</p>
        <input v-model="search" type="text" placeholder="Pesquise aqui..." class="input input-bordered w-full" />
        <div class="divider" />
        <div class="mt-4 mockup-browser border bg-base-300">
          <div class="mockup-browser-toolbar">
            <div class="input">https://google.com.br</div>
          </div>
          <div class="flex justify-center p-4 bg-base-200">
            <!-- Carregando -->
            <span v-if="loading" class="py-12">Nenhum resultado encontrado</span>
            <!-- Sem resultados -->
            <span v-else-if="!results.length" class="py-12">Nenhum resultado encontrado</span>
            <!-- Resultados -->
            <div v-else class="w-full overflow-x-auto">
              <table class="table table-xs">
                <thead>
                  <tr>
                    <th></th> 
                    <th>Título</th> 
                    <th>Url</th>
                  </tr>
                </thead> 
                <tbody>
                  <tr v-for="(item, index) in results" :key="index">
                    <th>{{ index + 1 }}</th> 
                    <td>{{ item.title }}</td> 
                    <td>{{ item.url }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const search = ref(''), loading = ref(false), results = ref([])
</script>
