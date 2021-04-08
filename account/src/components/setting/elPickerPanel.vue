<!--  作者:欧阳苏蓉 我的信息-日历  -->
<template>
  <div class="el-picker-panel el-date-picker"
       style="width: 193px; position: absolute; top: 10px; left: 135px; transform-origin: center bottom; z-index: 2000;">
    <div class="el-picker-panel__body-wrapper"><!---->
      <div class="el-picker-panel__body"><!---->
        <div class="el-date-picker__header">
          <button type="button"
                  class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-d-arrow-left"></button>
          <button type="button" class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-arrow-left"></button>
          <span class="el-date-picker__header-label">1970 年</span><span class="el-date-picker__header-label">1 月</span>
          <button type="button"
                  class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-d-arrow-right"></button>
          <button type="button" class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-arrow-right"></button>
        </div>
        <div class="el-picker-panel__content">
          <table cellspacing="0" cellpadding="0" class="el-date-table">
            <tbody>
            <tr><!---->
              <th>日</th>
              <th>一</th>
              <th>二</th>
              <th>三</th>
              <th>四</th>
              <th>五</th>
              <th>六</th>
            </tr>
            <tr class="el-date-table__row">
              <td class="prev-month">28</td>
              <td class="prev-month">29</td>
              <td class="prev-month">30</td>
              <td class="prev-month">31</td>
              <td class="available current">1</td>
              <td class="available">2</td>
              <td class="available">3</td>
            </tr>
            <tr class="el-date-table__row">
              <td class="available">4</td>
              <td class="available">5</td>
              <td class="available">6</td>
              <td class="available">7</td>
              <td class="available">8</td>
              <td class="available">9</td>
              <td class="available">10</td>
            </tr>
            <tr class="el-date-table__row">
              <td class="available">11</td>
              <td class="available">12</td>
              <td class="available">13</td>
              <td class="available">14</td>
              <td class="available">15</td>
              <td class="available">16</td>
              <td class="available">17</td>
            </tr>
            <tr class="el-date-table__row">
              <td class="available">18</td>
              <td class="available">19</td>
              <td class="available">20</td>
              <td class="available">21</td>
              <td class="available">22</td>
              <td class="available">23</td>
              <td class="available">24</td>
            </tr>
            <tr class="el-date-table__row">
              <td class="available">25</td>
              <td class="available">26</td>
              <td class="available">27</td>
              <td class="available">28</td>
              <td class="available">29</td>
              <td class="available">30</td>
              <td class="available">31</td>
            </tr>
            <tr class="el-date-table__row">
              <td class="next-month">1</td>
              <td class="next-month">2</td>
              <td class="next-month">3</td>
              <td class="next-month">4</td>
              <td class="next-month">5</td>
              <td class="next-month">6</td>
              <td class="next-month">7</td>
            </tr>
            </tbody>
          </table>
          <table class="el-year-table" style="display: none;">
            <tbody>
            <tr>
              <td class="available current"><a class="cell">1970</a></td>
              <td class="available"><a class="cell">1971</a></td>
              <td class="available"><a class="cell">1972</a></td>
              <td class="available"><a class="cell">1973</a></td>
            </tr>
            <tr>
              <td class="available"><a class="cell">1974</a></td>
              <td class="available"><a class="cell">1975</a></td>
              <td class="available"><a class="cell">1976</a></td>
              <td class="available"><a class="cell">1977</a></td>
            </tr>
            <tr>
              <td class="available"><a class="cell">1978</a></td>
              <td class="available"><a class="cell">1979</a></td>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </table>
          <table class="el-month-table" style="display: none;">
            <tbody>
            <tr>
              <td class="current"><a class="cell">一月</a></td>
              <td class=""><a class="cell">二月</a></td>
              <td class=""><a class="cell">三月</a></td>
              <td class=""><a class="cell">四月</a></td>
            </tr>
            <tr>
              <td class=""><a class="cell">五月</a></td>
              <td class=""><a class="cell">六月</a></td>
              <td class=""><a class="cell">七月</a></td>
              <td class=""><a class="cell">八月</a></td>
            </tr>
            <tr>
              <td class=""><a class="cell">九月</a></td>
              <td class=""><a class="cell">十月</a></td>
              <td class=""><a class="cell">十一月</a></td>
              <td class=""><a class="cell">十二月</a></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="el-picker-panel__footer" style="display: none;">
      <a href="JavaScript:" class="el-picker-panel__link-btn">此刻</a>
      <button type="button" class="el-picker-panel__btn">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "el-picker-panel"
}
</script>

<style>

</style>