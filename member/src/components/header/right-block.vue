<template>
  <div class="right-block">
    <!--    头像    -->
    <avatar />
    <!--    注册时间    -->
    <tips-calendar-wrap />
    <div class="line-divid"></div>
    <!--    信息    -->
    <message />
  </div>
</template>

<script>
import Avatar from "@/components/header/right-block/avatar";
import TipsCalendarWrap from "@/components/header/right-block/tips-calendar-wrap";
import Message from "@/components/header/right-block/message";
export default {
  name:"right-block",
  components: { Message, TipsCalendarWrap, Avatar}
}
</script>