<script lang="ts">
    const currentTime = new Date()
    const currentHour = currentTime.getHours()

    let greeting = ""

    if(currentHour < 12){
        greeting = "Good Morning"
    } else if(currentHour < 20){
        greeting = "Good Afternoon"
    } else {
        greeting = "Good Evening"
    }
</script>

<h1 class="text-3xl font-bold text-white">{greeting}</h1>