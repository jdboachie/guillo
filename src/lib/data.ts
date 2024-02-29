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

export const getLineData = () => {
  return [
    {
      "id": "japan",
      "color": "hsl(236, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 82
        },
        {
          "x": "helicopter",
          "y": 20
        },
        {
          "x": "boat",
          "y": 175
        },
        {
          "x": "train",
          "y": 241
        },
        {
          "x": "subway",
          "y": 2
        },
        {
          "x": "bus",
          "y": 167
        },
        {
          "x": "car",
          "y": 180
        },
        {
          "x": "motor",
          "y": 274
        },
        {
          "x": "bicycle",
          "y": 210
        },
        {
          "x": "horse",
          "y": 229
        },
        {
          "x": "skateboard",
          "y": 237
        },
        {
          "x": "others",
          "y": 46
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(145, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 83
        },
        {
          "x": "helicopter",
          "y": 297
        },
        {
          "x": "boat",
          "y": 189
        },
        {
          "x": "train",
          "y": 299
        },
        {
          "x": "subway",
          "y": 14
        },
        {
          "x": "bus",
          "y": 242
        },
        {
          "x": "car",
          "y": 93
        },
        {
          "x": "motor",
          "y": 83
        },
        {
          "x": "bicycle",
          "y": 149
        },
        {
          "x": "horse",
          "y": 12
        },
        {
          "x": "skateboard",
          "y": 12
        },
        {
          "x": "others",
          "y": 125
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(86, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 36
        },
        {
          "x": "helicopter",
          "y": 8
        },
        {
          "x": "boat",
          "y": 80
        },
        {
          "x": "train",
          "y": 141
        },
        {
          "x": "subway",
          "y": 241
        },
        {
          "x": "bus",
          "y": 163
        },
        {
          "x": "car",
          "y": 271
        },
        {
          "x": "motor",
          "y": 104
        },
        {
          "x": "bicycle",
          "y": 32
        },
        {
          "x": "horse",
          "y": 194
        },
        {
          "x": "skateboard",
          "y": 26
        },
        {
          "x": "others",
          "y": 70
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(194, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 213
        },
        {
          "x": "helicopter",
          "y": 80
        },
        {
          "x": "boat",
          "y": 88
        },
        {
          "x": "train",
          "y": 144
        },
        {
          "x": "subway",
          "y": 194
        },
        {
          "x": "bus",
          "y": 241
        },
        {
          "x": "car",
          "y": 33
        },
        {
          "x": "motor",
          "y": 59
        },
        {
          "x": "bicycle",
          "y": 192
        },
        {
          "x": "horse",
          "y": 259
        },
        {
          "x": "skateboard",
          "y": 160
        },
        {
          "x": "others",
          "y": 124
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(125, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 228
        },
        {
          "x": "helicopter",
          "y": 170
        },
        {
          "x": "boat",
          "y": 252
        },
        {
          "x": "train",
          "y": 96
        },
        {
          "x": "subway",
          "y": 247
        },
        {
          "x": "bus",
          "y": 211
        },
        {
          "x": "car",
          "y": 116
        },
        {
          "x": "motor",
          "y": 139
        },
        {
          "x": "bicycle",
          "y": 67
        },
        {
          "x": "horse",
          "y": 88
        },
        {
          "x": "skateboard",
          "y": 77
        },
        {
          "x": "others",
          "y": 113
        }
      ]
    }
  ]
}