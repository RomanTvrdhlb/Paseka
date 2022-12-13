import { left } from '@popperjs/core';
import { Chart } from 'chart.js/auto';
import vars from '../_vars'

Chart.defaults.font.family = "Rubik";
Chart.defaults.font.size = 14;
Chart.defaults.font.weight = 300;
Chart.defaults.color = '#3E4954';

// const mainGrafic = document.getElementById('myGrafic');
const { mainData, subData, mainLabels, mainGrafics} = vars;

const startColor = 'rgba(92, 75, 167, 0.8)';
const endColor = 'rgba(92, 75, 167, 0)';
const startSubColor = 'rgb(241, 123, 123)';
const endSubColor = '#ffffff';




mainGrafics.map(function(mainGrafic){

  const ctx = mainGrafic.getContext("2d");
  let gradient = ctx.createLinearGradient(0, 0, 0, 275);
  gradient.addColorStop(0, `${startColor}`);
  gradient.addColorStop(1, `${endColor}`);
  ctx.fillStyle = gradient;

  let subColor = ctx.createLinearGradient(0, 0, 0, 279);
  subColor.addColorStop(0.9, `${endSubColor}`);
  subColor.addColorStop(0.9, `${startSubColor}`);
  
  const chart = new Chart(mainGrafic, {

    type: 'bar',
    data: {
      labels: mainLabels,
      datasets: [{
        
        backgroundColor: '#FEAA50',
        data: mainData,
        barThickness: 16,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        order: 2,
      }, {
        backgroundColor: subColor,
        data: subData,
        barThickness: 15,
        order: 1,
      },
      {
        data: mainData,
        borderColor: '#5C4BA7',
        type: 'line',
        fill: true,
        backgroundColor: gradient,
        order: 3,
      },]
    },
    options: {
      elements: {
        point: {
          radius: 0,
        }
      },
      scales: {
        x: {
          stacked: true,
        },
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        },
      }
    }
  });
})



