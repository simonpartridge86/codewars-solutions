--kata link: https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

--add new column "century"
--assign values to century column based on value in "yr" column
  --year/100 rounding up as follows: (SELECT city, CEILING(area/bikes_for_rent) AS ratio FROM rent;)
--Return whole table
--ALTER TABLE years ADD century INT;

SELECT id, CEILING(yr/100.0) AS century FROM years;