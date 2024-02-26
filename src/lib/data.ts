export const getBumpChartData = () => {
  return [
    {
      "id": "Serie 1",
      "data": [
        {
          "x": 2000,
          "y": 10
        },
        {
          "x": 2001,
          "y": 4
        },
        {
          "x": 2002,
          "y": 11
        },
        {
          "x": 2003,
          "y": 6
        },
        {
          "x": 2004,
          "y": 5
        }
      ]
    },
    {
      "id": "Serie 2",
      "data": [
        {
          "x": 2000,
          "y": 5
        },
        {
          "x": 2001,
          "y": 11
        },
        {
          "x": 2002,
          "y": 6
        },
        {
          "x": 2003,
          "y": 7
        },
        {
          "x": 2004,
          "y": 10
        }
      ]
    },
    {
      "id": "Serie 3",
      "data": [
        {
          "x": 2000,
          "y": 3
        },
        {
          "x": 2001,
          "y": 8
        },
        {
          "x": 2002,
          "y": 8
        },
        {
          "x": 2003,
          "y": 9
        },
        {
          "x": 2004,
          "y": 8
        }
      ]
    },
    {
      "id": "Serie 4",
      "data": [
        {
          "x": 2000,
          "y": 8
        },
        {
          "x": 2001,
          "y": 6
        },
        {
          "x": 2002,
          "y": 7
        },
        {
          "x": 2003,
          "y": 10
        },
        {
          "x": 2004,
          "y": 3
        }
      ]
    },
    {
      "id": "Serie 5",
      "data": [
        {
          "x": 2000,
          "y": 1
        },
        {
          "x": 2001,
          "y": 1
        },
        {
          "x": 2002,
          "y": 3
        },
        {
          "x": 2003,
          "y": 11
        },
        {
          "x": 2004,
          "y": 2
        }
      ]
    },
    {
      "id": "Serie 6",
      "data": [
        {
          "x": 2000,
          "y": 9
        },
        {
          "x": 2001,
          "y": 9
        },
        {
          "x": 2002,
          "y": 1
        },
        {
          "x": 2003,
          "y": 1
        },
        {
          "x": 2004,
          "y": 12
        }
      ]
    },
    {
      "id": "Serie 7",
      "data": [
        {
          "x": 2000,
          "y": 7
        },
        {
          "x": 2001,
          "y": 12
        },
        {
          "x": 2002,
          "y": 10
        },
        {
          "x": 2003,
          "y": 3
        },
        {
          "x": 2004,
          "y": 6
        }
      ]
    },
    {
      "id": "Serie 8",
      "data": [
        {
          "x": 2000,
          "y": 6
        },
        {
          "x": 2001,
          "y": 5
        },
        {
          "x": 2002,
          "y": 5
        },
        {
          "x": 2003,
          "y": 12
        },
        {
          "x": 2004,
          "y": 9
        }
      ]
    },
    {
      "id": "Serie 9",
      "data": [
        {
          "x": 2000,
          "y": 11
        },
        {
          "x": 2001,
          "y": 2
        },
        {
          "x": 2002,
          "y": 12
        },
        {
          "x": 2003,
          "y": 5
        },
        {
          "x": 2004,
          "y": 7
        }
      ]
    },
    {
      "id": "Serie 10",
      "data": [
        {
          "x": 2000,
          "y": 2
        },
        {
          "x": 2001,
          "y": 10
        },
        {
          "x": 2002,
          "y": 9
        },
        {
          "x": 2003,
          "y": 2
        },
        {
          "x": 2004,
          "y": 11
        }
      ]
    },
    {
      "id": "Serie 11",
      "data": [
        {
          "x": 2000,
          "y": 12
        },
        {
          "x": 2001,
          "y": 3
        },
        {
          "x": 2002,
          "y": 4
        },
        {
          "x": 2003,
          "y": 4
        },
        {
          "x": 2004,
          "y": 1
        }
      ]
    },
    {
      "id": "Serie 12",
      "data": [
        {
          "x": 2000,
          "y": 4
        },
        {
          "x": 2001,
          "y": 7
        },
        {
          "x": 2002,
          "y": 2
        },
        {
          "x": 2003,
          "y": 8
        },
        {
          "x": 2004,
          "y": 4
        }
      ]
    }
  ]
}

export const getCalendarData = () => {
  const data = []
  const startDate = new Date('2022-01-01')
  const endDate = new Date('2023-03-12')

  while (startDate <= endDate) {
    const value = Math.floor(Math.random() * 201)
    const formattedDate = startDate.toISOString().split('T')[0]

    data.push({
      "value": value,
      "day": formattedDate
    })

    startDate.setDate(startDate.getDate() + 1)
  }
  return data
}