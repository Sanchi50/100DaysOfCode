/**Suppose you're given an array of objects representing the weather conditions of different cities. Create a function with name calculateAverage that takes threshold pressure as a parameter and returns the average temperature of the cities with a pressure value above a certain threshold. Please note that the function should only take one parameter.




Requirements

The function should have access to the weather object. Specifically, your code should be able to:
The function should have access to the weather array of objects.
Filter the weather array to include only the objects where the pressure value is equal to or above the given threshold pressure.
Extract the temperature values from the filtered objects and store them in a new array with the help of the map method.
Reduce the temperature values to find the total temperature of the remaining cities.
Determine the number of cities that meet the pressure condition.
Calculate the average temperature by dividing the total sum of temperatures by the number of cities.
Return the average temperature rounded to one decimal place. e.g., "45.3".


The array is of the format:
[
     { city: 'New York', temperature: 50, pressure: 1015 },

     { city: 'Los Angeles', temperature: 70, pressure: 1010 },

     { city: 'Chicago', temperature: 40, pressure: 1012 },

     { city: 'Houston', temperature: 75, pressure: 1020 },

     { city: 'Miami', temperature: 80, pressure: 1017 },
]


Starter Code Link:
Use this starter code file to write your code.



Note:
Use the provided starter code file to complete the question.

 */

const weather = [
  { city: 'New York', temperature: 50, pressure: 1015 },
  { city: 'Los Angeles', temperature: 70, pressure: 1010 },
  { city: 'Chicago', temperature: 40, pressure: 1012 },
  { city: 'Houston', temperature: 75, pressure: 1020 },
  { city: 'Miami', temperature: 80, pressure: 1017 },
];

function calculateAverage(thresholdPressure) {
  const filtered = weather.filter(item => item.pressure >= thresholdPressure);

  const temps = filtered.map(item => item.temperature);

  const total = temps.reduce((sum, t) => sum + t, 0);

  const count = filtered.length;

  if (count === 0) return "0.0";

  const avg = total / count;

  return avg.toFixed(1);
}
