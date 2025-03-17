define({ "api": [
  {
    "type": "post",
    "url": "/api/v2/aht",
    "title": "Create AHT Entry",
    "version": "0.2.0",
    "name": "Add-AHT-Data",
    "group": "AHT",
    "description": "<p>Menambahkan data suhu.</p>",
    "body": [
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "suhu",
        "description": "<p>Suhu ruang.</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "kelembapan",
        "description": "<p>Kelembapan ruang.</p>"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Example-Body:",
          "content": "{\n     \"suhu\" : 29.12,\n     \"kelembapan\" : 60.12,\n     \"chip_id\" : \"fffffffff-aaaa-4c7e-9b35-7eab6c1d23f2\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n     \"message\": \"success\",\n     \"data\": {\n         \"id\": 6,\n         \"suhu\": \"28.12\",\n         \"kelembapan\": \"60.12\",\n         \"createdAt\": \"2024-09-20T09:36:54.432Z\",\n         \"updatedAt\": \"2024-09-20T09:36:54.432Z\",\n         \"chip_id\": \"fffffffff-aaaa-4c7e-9b35-7eab6c1d23f2\",\n         \"sensor_id\": 4\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/aht.js",
    "groupTitle": "AHT"
  },
  {
    "type": "post",
    "url": "/api/v2/aht/delete/:id",
    "title": "Delete AHT Entry",
    "version": "0.2.0",
    "name": "Delete-AHT",
    "group": "AHT",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID data suhu.</p>"
          }
        ]
      }
    },
    "description": "<p>Menghapus data suhu.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"AHT entry deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/aht.js",
    "groupTitle": "AHT"
  },
  {
    "type": "post",
    "url": "/api/v2/aht/edit/:id",
    "title": "Edit AHT Entry",
    "version": "0.2.0",
    "name": "Edit-AHT",
    "group": "AHT",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID data suhu.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example-Body:",
          "content": "{\n     \"suhu\" : 29.12,\n     \"kelembapan\" : 60.12\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Mengubah data suhu.</p>",
    "body": [
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "suhu",
        "description": "<p>Data suhu baru.</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "kelembapan",
        "description": "<p>Data kelembapan baru.</p>"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"success\",\n \"data\": {\n     \"id\": 1,\n     \"suhu\": \"29.12\",\n     \"kelembapan\": \"60.12\",\n     \"createdAt\": \"2024-08-28T14:30:00.000Z\",\n     \"updatedAt\": \"2024-09-10T10:09:06.660Z\",\n     \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\",\n     \"sensor_id\": 4\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/aht.js",
    "groupTitle": "AHT"
  },
  {
    "type": "get",
    "url": "/api/v2/aht",
    "title": "Get All AHT Entry",
    "version": "0.2.0",
    "name": "Get-All-AHT",
    "group": "AHT",
    "description": "<p>Mengambil data dari tabel AHT.</p>",
    "query": [
      {
        "group": "Query",
        "type": "Number",
        "optional": false,
        "field": "page",
        "description": "<p>Halaman paginasi.</p>"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n        \"message\": \"success\",\n        \"pagination\": {\n            \"totalPages\": 1,\n            \"currentPage\": 1\n        },\n        \"data\": {\n            \"count\": 5,\n            \"rows\": [\n                {\n                    \"id\": 5,\n                    \"suhu\": 30.12,\n                    \"kelembaban\": 70.12,\n                    \"createdAt\": \"2024-07-17T14:30:00.000Z\",\n                    \"updatedAt\": \"2024-07-17T14:30:00.000Z\",\n                    \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\",\n                    \"nama_domba\": \"John\",\n                    \"jenis_kelamin\": \"Jantan\"\n                },\n                {\n                    \"id\": 4,\n                    \"suhu\": 29.12,\n                    \"kelembaban\": 69.12,\n                    \"createdAt\": \"2024-07-24T14:30:00.000Z\",\n                    \"updatedAt\": \"2024-07-24T14:30:00.000Z\",\n                    \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\",\n                    \"nama_domba\": \"John\",\n                    \"jenis_kelamin\": \"Jantan\"\n                },\n                ...\n            ]\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/aht.js",
    "groupTitle": "AHT"
  },
  {
    "type": "get",
    "url": "/api/v2/aht",
    "title": "Get Data Graph Entry",
    "version": "0.2.0",
    "name": "Get-Graph-AHT",
    "group": "AHT",
    "description": "<p>Mengambil data dari tabel AHT sesuai dengan chip_id.</p>",
    "query": [
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "chip_id",
        "description": "<p>ID chip domba</p>"
      },
      {
        "group": "Query",
        "type": "Number",
        "optional": false,
        "field": "page",
        "description": "<p>Halaman paginasi</p>"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"success\",\n \"pagination\": {\n     \"totalPages\": 3,\n     \"currentPage\": 1\n },\n \"data\": {\n     \"count\": 14,\n     \"rows\": [\n         {\n             \"id\": 14,\n             \"suhu\": 28.12,\n             \"kelembaban\": 60.12,\n             \"createdAt\": \"2024-09-10T09:35:07.320Z\",\n             \"updatedAt\": \"2024-09-10T09:35:07.320Z\"\n         },\n         {\n             \"id\": 13,\n             \"suhu\": 28.12,\n             \"kelembaban\": 60.12,\n             \"createdAt\": \"2024-09-10T08:47:38.935Z\",\n             \"updatedAt\": \"2024-09-10T08:47:38.935Z\"\n         },\n         ...\n     ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/aht.js",
    "groupTitle": "AHT"
  },
  {
    "type": "get",
    "url": "/api/v2/aht/:id",
    "title": "Get AHT Entry by ID",
    "version": "0.2.0",
    "name": "Get-One-AHT-Data",
    "group": "AHT",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID data suhu.</p>"
          }
        ]
      }
    },
    "description": "<p>Mengambil satu data suhu.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"message\": \"success\",\n     \"data\": {\n         \"id\": 1,\n         \"suhu\": 29.12,\n         \"kelembaban\": 60.12,\n         \"createdAt\": \"2024-08-28T14:30:00.000Z\",\n         \"updatedAt\": \"2024-08-28T14:30:00.000Z\",\n         \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\",\n         \"nama_domba\": \"John\",\n         \"jenis_kelamin\": \"Jantan\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/aht.js",
    "groupTitle": "AHT"
  },
  {
    "type": "post",
    "url": "/api/v2/chip",
    "title": "Create Domba Entry",
    "version": "0.2.0",
    "name": "Add-Domba",
    "group": "Domba",
    "description": "<p>Menambahkan domba baru.</p>",
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "id",
        "description": "<p>UUID dari RFID tag.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "nama_domba",
        "description": "<p>Nama dari domba.</p>"
      },
      {
        "group": "Body",
        "type": "Date",
        "optional": false,
        "field": "usia",
        "description": "<p>Tanggal lahir domba.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"Jantan\"",
          "\"Betinas\""
        ],
        "optional": false,
        "field": "jenis_kelamin",
        "description": "<p>Gender of the domba.</p>"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n \"id\": \"fffffffff-aaaa-4c7e-9b35-7eab6c1d23f2\",\n \"nama_domba\": \"Jane\",\n \"usia\": \"2022-09-03T14:45:30\",\n \"jenis_kelamin\": \"Betina\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n \"message\": \"success\",\n \"data\": {\n     \"id\": \"fffffffff-aaaa-4c7e-9b35-7eab6c1d23f2\",\n     \"nama_domba\": \"Jane\",\n     \"usia\": \"2022-09-03T07:45:30.000Z\",\n     \"jenis_kelamin\": \"Betina\",\n     \"createdAt\": \"2024-09-10T11:47:00.635Z\",\n     \"updatedAt\": \"2024-09-10T11:47:00.635Z\",\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/domba.js",
    "groupTitle": "Domba"
  },
  {
    "type": "post",
    "url": "/api/v2/chip/delete/:chip_id",
    "title": "Delete Domba Entry",
    "version": "0.2.0",
    "name": "Delete-Domba",
    "group": "Domba",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chip_id",
            "description": "<p>RFID chip ID.</p>"
          }
        ]
      }
    },
    "description": "<p>Menghapus data domba.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Domba deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/domba.js",
    "groupTitle": "Domba"
  },
  {
    "type": "post",
    "url": "/api/v2/chip/edit/:chip_id",
    "title": "Edit Domba Entry",
    "version": "0.2.0",
    "name": "Edit-Domba",
    "group": "Domba",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chip_id",
            "description": "<p>Chip ID tag domba.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n \"nama_domba\": \"Jane\",\n \"usia\": \"2022-09-03T14:25:30\",\n \"jenis_kelamin\": \"Betina\"\n }",
          "type": "json"
        }
      ]
    },
    "body": [
      {
        "group": "Body",
        "type": "String",
        "optional": false,
        "field": "nama_domba",
        "description": "<p>Nama dari domba.</p>"
      },
      {
        "group": "Body",
        "type": "Date",
        "optional": false,
        "field": "usia",
        "description": "<p>Tanggal lahir domba.</p>"
      },
      {
        "group": "Body",
        "type": "String",
        "allowedValues": [
          "\"Jantan\"",
          "\"Betina\""
        ],
        "optional": false,
        "field": "jenis_kelamin",
        "description": "<p>Gender of the domba.</p>"
      }
    ],
    "description": "<p>Edit a specific domba entry.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"success\",\n \"updatedData\": {\n     \"id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\",\n     \"nama_domba\": \"John\",\n     \"usia\": \"2019-05-03T07:45:30.000Z\",\n     \"jenis_kelamin\": \"Jantan\",\n     \"createdAt\": \"2024-09-10T12:48:03.431Z\",\n     \"updatedAt\": \"2024-09-10T15:29:41.644Z\"\n },\n \"oldData\": {\n     \"id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\",\n     \"nama_domba\": \"John\",\n     \"usia\": \"2019-05-03T07:45:30.000Z\",\n     \"jenis_kelamin\": \"Jantan\",\n     \"createdAt\": \"2024-09-10T12:48:03.431Z\",\n     \"updatedAt\": \"2024-09-10T12:54:20.560Z\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/domba.js",
    "groupTitle": "Domba"
  },
  {
    "type": "get",
    "url": "/api/v2/chip",
    "title": "Get All Domba Entry",
    "version": "0.2.0",
    "name": "Get-All-Domba",
    "group": "Domba",
    "description": "<p>Ambil semua data dari tabel domba.</p>",
    "query": [
      {
        "group": "Query",
        "type": "Number",
        "optional": false,
        "field": "page",
        "description": "<p>Halaman paginasi.</p>"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"success\",\n \"pagination\": {\n     \"totalPages\": 1,\n     \"currentPage\": 1\n },\n \"data\": {\n     \"count\": 3,\n     \"rows\": [\n         {\n             \"id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\",\n             \"nama_domba\": \"John\",\n             \"usia\": 0,\n             \"jenis_kelamin\": \"Jantan\",\n             \"createdAt\": \"2022-09-03T07:45:30.000Z\",\n             \"updatedAt\": \"2022-09-03T07:45:30.000Z\",\n         },\n         {\n             \"id\": \"e6\",\n             \"nama_domba\": \"Jane\",\n             \"usia\": 0,\n             \"jenis_kelamin\": \"Betina\",\n             \"createdAt\": \"2024-09-10T11:47:00.635Z\",\n             \"updatedAt\": \"2024-09-10T11:47:00.635Z\",\n         },\n         ...\n         ]\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/domba.js",
    "groupTitle": "Domba"
  },
  {
    "type": "get",
    "url": "/api/v2/chip/:chip_id",
    "title": "Get Domba Entry by Chip ID",
    "version": "0.2.0",
    "name": "Get-One-Domba",
    "group": "Domba",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chip_id",
            "description": "<p>RFID chip ID.</p>"
          }
        ]
      }
    },
    "description": "<p>Mengambil satu data domba.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"success\",\n  \"data\": {\n    \"id\": \"1\",\n    \"nama_domba\": \"Domba A\",\n    \"usia\": 2,\n    \"jenis_kelamin\": \"Jantan\",\n    \"createdAt\": \"2024-01-10T20:14:00.000Z\",\n    \"updatedAt\": \"2024-01-10T20:14:00.000Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/domba.js",
    "groupTitle": "Domba"
  },
  {
    "type": "post",
    "url": "/api/v2/kamera",
    "title": "Create Camera Measurement",
    "version": "0.2.0",
    "name": "Add-Dimension-Data",
    "group": "Kamera",
    "description": "<p>Menambahkan data dimensi baru.</p>",
    "body": [
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "panjang",
        "description": "<p>Dimensi panjang domba.</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "tinggi",
        "description": "<p>Dimensi tinggi domba.</p>"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n \"panjang\": 102,\n \"tinggi\": 90\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n \"message\": \"success\",\n \"data\": {\n     \"newKamera\": {\n         \"id\": 12,\n         \"panjang\": \"90\",\n         \"tinggi\": \"80\",\n         \"createdAt\": \"2024-09-10T16:31:07.257Z\",\n         \"updatedAt\": \"2024-09-10T16:31:07.257Z\",\n         \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\",\n         \"sensor_id\": 1,\n         \"STRING\": null,\n         \"DECIMAL\": null,\n         \"paired\": false\n     },\n     \"newDatadomba\": {\n         \"id\": 12,\n         \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\",\n         \"kamera_id\": 12,\n         \"loadcell_badan_id\": null,\n         \"createdAt\": \"2024-09-10T16:31:07.257Z\",\n         \"updatedAt\": \"2024-09-10T16:31:07.257Z\",\n         \"STRING\": null,\n         \"DECIMAL\": null\n         }\n      }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/kamera.js",
    "groupTitle": "Kamera"
  },
  {
    "type": "post",
    "url": "/api/v2/kamera/delete/:id",
    "title": "Delete Camera Measurement",
    "version": "0.2.0",
    "name": "Delete-Dimension",
    "group": "Kamera",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID data dimensi domba.</p>"
          }
        ]
      }
    },
    "description": "<p>Hapus data domba.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Camera measurement deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/kamera.js",
    "groupTitle": "Kamera"
  },
  {
    "type": "post",
    "url": "/api/v2/kamera/edit/:id",
    "title": "Edit Camera Entry",
    "version": "0.2.0",
    "name": "Edit-Dimension",
    "group": "Kamera",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID Data Kamera.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n \"panjang\": 100,\n \"tinggi\": 95\n }",
          "type": "json"
        }
      ]
    },
    "description": "<p>Mengubah data dimensi domba.</p>",
    "body": [
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "panjang",
        "description": "<p>Dimensi panjang domba.</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "tinggi",
        "description": "<p>Dimendi tinggi domba.</p>"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Camera measurement updated successfully\",\n  \"data\": {\n    \"id\": 1,\n    \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\",\n    \"sensor_id\": 1,\n    \"createdAt\": \"2024-09-03T01:23:39.070Z\",\n    \"updatedAt\": \"2024-09-03T01:23:39.070Z\",\n    \"panjang\": 90,\n    \"tinggi\": 80\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/kamera.js",
    "groupTitle": "Kamera"
  },
  {
    "type": "get",
    "url": "/api/v2/kamera",
    "title": "Get All Camera Measurements",
    "version": "0.2.0",
    "name": "Get-All-Didmension",
    "group": "Kamera",
    "description": "<p>Mengambil data dari tabel kamera.</p>",
    "query": [
      {
        "group": "Query",
        "type": "Number",
        "optional": false,
        "field": "page",
        "description": "<p>Halaman paginasi.</p>"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"success\",\n \"pagination\": {\n     \"totalPages\": 3,\n     \"currentPage\": 2\n },\n \"data\": {\n     \"count\": 11,\n     \"rows\": [\n         {\n             \"id\": 6,\n             \"panjang\": \"104.5\",\n             \"tinggi\": \"71.63\",\n             \"createdAt\": \"2024-08-28T14:30:00.000Z\",\n             \"updatedAt\": \"2024-08-28T14:30:00.000Z\",\n             \"chip_id\": \"fffffffff-aaaa-4c7e-9b35-7eab6c1d23f2\",\n             \"nama_domba\": \"Jane\",\n             \"jenis_kelamin\": \"Betina\"\n         },\n         {\n             \"id\": 5,\n             \"panjang\": \"59.85\",\n             \"tinggi\": \"66.93\",\n             \"createdAt\": \"2024-07-17T14:30:00.000Z\",\n             \"updatedAt\": \"2024-07-17T14:30:00.000Z\",\n             \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\",\n             \"nama_domba\": \"John\",\n             \"jenis_kelamin\": \"Jantan\"\n         },\n         ...\n         ]\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/kamera.js",
    "groupTitle": "Kamera"
  },
  {
    "type": "get",
    "url": "/api/v2/kamera",
    "title": "Get Data Graph Entry",
    "version": "0.2.0",
    "name": "Get-Graph-Dimension",
    "group": "Kamera",
    "description": "<p>Mengambil data dari tabel AHT sesuai dengan chip_id.</p>",
    "query": [
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "chip_id",
        "description": "<p>ID chip domba</p>"
      },
      {
        "group": "Query",
        "type": "Number",
        "optional": false,
        "field": "page",
        "description": "<p>Halaman paginasi</p>"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"success\",\n \"pagination\": {\n     \"totalPages\": 2,\n     \"currentPage\": 1\n },\n \"data\": {\n     \"count\": 6,\n     \"rows\": [\n         {\n             \"id\": 11,\n             \"panjang\": 90,\n             \"tinggi\": 80,\n             \"createdAt\": \"2024-09-10T15:38:30.922Z\",\n             \"updatedAt\": \"2024-09-10T15:38:30.922Z\",\n             \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\"\n         },\n         {\n             \"id\": 5,\n             \"panjang\": 59.85,\n             \"tinggi\": 66.93,\n             \"createdAt\": \"2024-07-17T14:30:00.000Z\",\n             \"updatedAt\": \"2024-07-17T14:30:00.000Z\",\n             \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\"\n         },\n         ...\n         ]\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/kamera.js",
    "groupTitle": "Kamera"
  },
  {
    "type": "get",
    "url": "/api/v2/kamera/:id",
    "title": "Get Camera Entry by ID",
    "version": "0.2.0",
    "name": "Get-One-Dimension-Data",
    "group": "Kamera",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID data dimensi domba.</p>"
          }
        ]
      }
    },
    "description": "<p>Mengambil satu data domba.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"success\",\n \"data\": {\n     \"id\": 1,\n     \"panjang\": 22,\n     \"tinggi\": 22,\n     \"createdAt\": \"2024-08-28T14:30:00.000Z\",\n     \"updatedAt\": \"2024-09-10T16:21:11.488Z\",\n     \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\",\n     \"nama_domba\": \"Doe\",\n     \"jenis_kelamin\": \"Jantan\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/kamera.js",
    "groupTitle": "Kamera"
  },
  {
    "type": "post",
    "url": "/api/v2/loadcellbadan",
    "title": "Create Loadcell Measurement",
    "version": "0.2.0",
    "name": "Add-BeratBadan-Data",
    "group": "LoadCell_Badan",
    "description": "<p>Menambahkan data berat badan baru.</p>",
    "query": [
      {
        "group": "Query",
        "type": "Number",
        "optional": false,
        "field": "page",
        "description": "<p>Halaman paginasi.</p>"
      }
    ],
    "body": [
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "berat",
        "description": "<p>Berat badan domba.</p>"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"berat\" : 90.12\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n     \"message\": \"success\",\n     \"data\": {\n         \"newLoadcellBadan\": {\n             \"id\": 7,\n             \"berat\": \"90.12\",\n             \"createdAt\": \"2024-09-12T01:38:25.331Z\",\n             \"updatedAt\": \"2024-09-12T01:38:25.331Z\",\n             \"chip_id\": \"fffffffff-aaaa-4c7e-9b35-7eab6c1d23f2\",\n             \"sensor_id\": 2,\n             \"paired\": false\n         },\n         \"updateDatadomba\": {\n             \"id\": 6,\n             \"chip_id\": \"fffffffff-aaaa-4c7e-9b35-7eab6c1d23f2\",\n             \"kamera_id\": null,\n             \"loadcell_badan_id\": 7,\n             \"createdAt\": \"2024-09-12T01:37:50.795Z\",\n             \"updatedAt\": \"2024-09-12T01:38:25.331Z\"\n         }\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/loadcellBadan.js",
    "groupTitle": "LoadCell_Badan"
  },
  {
    "type": "post",
    "url": "/api/v2/loadcellbadan/delete/:id",
    "title": "Delete Loadcell Measurement",
    "version": "0.2.0",
    "name": "Delete-BeratBadan",
    "group": "LoadCell_Badan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID data berat badan domba.</p>"
          }
        ]
      }
    },
    "description": "<p>Menghapus data berat badan.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Load cell measurement deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/loadcellBadan.js",
    "groupTitle": "LoadCell_Badan"
  },
  {
    "type": "post",
    "url": "/api/v2/loadcellbadan/edit/:id",
    "title": "Edit Loadcell Measurement",
    "version": "0.2.0",
    "name": "Edit-BeratBadan",
    "group": "LoadCell_Badan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID data berat badan domba.</p>"
          }
        ]
      }
    },
    "description": "<p>Mengubah data berat badan domba</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"message\": \"success\",\n     \"updatedData\": {\n         \"id\": 5,\n         \"berat\": \"900.24\",\n         \"createdAt\": \"2024-07-17T14:30:00.000Z\",\n         \"updatedAt\": \"2024-09-12T01:39:45.455Z\",\n         \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\",\n         \"sensor_id\": 2\n     },\n     \"oldData\": {\n         \"id\": 5,\n         \"berat\": \"80.78\",\n         \"createdAt\": \"2024-07-17T14:30:00.000Z\",\n         \"updatedAt\": \"2024-07-17T14:30:00.000Z\",\n         \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\",\n         \"sensor_id\": 2\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/loadcellBadan.js",
    "groupTitle": "LoadCell_Badan"
  },
  {
    "type": "get",
    "url": "/api/v2/loadcellbadan",
    "title": "Get All Loadcell Measurements",
    "version": "0.2.0",
    "name": "Get-All-BeratBadan",
    "group": "LoadCell_Badan",
    "description": "<p>Mengambil semua daftar berat badan domba.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"success\",\n    \"pagination\": {\n        \"totalPages\": 2,\n        \"currentPage\": 1\n    },\n    \"data\": {\n        \"count\": 7,\n        \"rows\": [\n            {\n                \"id\": 7,\n                \"berat\": 120.12,\n                \"createdAt\": \"2024-09-12T01:38:25.331Z\",\n                \"updatedAt\": \"2024-09-12T01:38:25.331Z\",\n                \"chip_id\": \"fffffffff-aaaa-4c7e-9b35-7eab6c1d23f2\",\n                \"nama_domba\": \"Jane\",\n                \"jenis_kelamin\": \"Betina\"\n            },\n            {\n                \"id\": 6,\n                \"berat\": 12.12,\n                \"createdAt\": \"2024-09-12T01:37:50.795Z\",\n                \"updatedAt\": \"2024-09-12T01:37:50.795Z\",\n                \"chip_id\": \"fffffffff-aaaa-4c7e-9b35-7eab6c1d23f2\",\n                \"nama_domba\": \"Jane\",\n                \"jenis_kelamin\": \"Betina\"\n            },\n            ...\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/loadcellBadan.js",
    "groupTitle": "LoadCell_Badan"
  },
  {
    "type": "get",
    "url": "/api/v2/loadcellbadan/graph/:chip_id",
    "title": "Get Loadcell Measurement by ID",
    "version": "0.2.0",
    "name": "Get-One-BeratBadan",
    "group": "LoadCell_Badan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chip_id",
            "description": "<p>Cihp_id domba.</p>"
          }
        ]
      }
    },
    "description": "<p>Mengambil histori data berat badan satu domba.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"success\",\n \"pagination\": {\n     \"totalPages\": 2,\n     \"currentPage\": 1\n },\n \"data\": {\n     \"count\": 6,\n     \"rows\": [\n         {\n             \"id\": 11,\n             \"berat\": 50.12,\n             \"createdAt\": \"2024-09-10T16:30:50.046Z\",\n             \"updatedAt\": \"2024-09-10T16:30:50.046Z\",\n             \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\"\n         },\n         {\n             \"id\": 5,\n             \"berat\": 80.78,\n             \"createdAt\": \"2024-07-17T14:30:00.000Z\",\n             \"updatedAt\": \"2024-07-17T14:30:00.000Z\",\n             \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\"\n         },\n        ...\n         ]\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/loadcellBadan.js",
    "groupTitle": "LoadCell_Badan"
  },
  {
    "type": "get",
    "url": "/api/v2/loadcellbadan/:id",
    "title": "Get Loadcell Measurement by ID",
    "version": "0.2.0",
    "name": "Get-One-BeratBadan",
    "group": "LoadCell_Badan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID data berat badan.</p>"
          }
        ]
      }
    },
    "description": "<p>Mengambil satu data berat badan.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"success\",\n \"data\": {\n     \"id\": 1,\n     \"berat\": 80.45,\n     \"createdAt\": \"2024-08-28T14:30:00.000Z\",\n     \"updatedAt\": \"2024-08-28T14:30:00.000Z\",\n     \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\",\n     \"nama_domba\": \"Doe\",\n     \"jenis_kelamin\": \"Jantan\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/loadcellBadan.js",
    "groupTitle": "LoadCell_Badan"
  },
  {
    "type": "post",
    "url": "/api/v2/loadcellpakan",
    "title": "Create Loadcell Pakan Entry",
    "version": "0.2.0",
    "name": "Add-BeratPakan-Data",
    "group": "LoadCell_Pakan",
    "description": "<p>Menambahkan data berat pakan\\</p>",
    "body": [
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "berat",
        "description": "<p>Berat pakan [gram].</p>"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n \"berat\": 2500.12,\n \"chip_id\" : \"fffffffff-aaaa-4c7e-9b35-7eab6c1d23f2\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n \"message\": \"success\",\n \"data\": {\n     \"id\": 12,\n     \"berat_pakan\": \"2500.12\",\n     \"chip_id\" : \"fffffffff-aaaa-4c7e-9b35-7eab6c1d23f2\",\n     \"createdAt\": \"2024-09-10T10:13:15.619Z\",\n     \"updatedAt\": \"2024-09-10T10:13:15.619Z\",\n     \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\",\n     \"sensor_id\": 3\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/loadcellPakan.js",
    "groupTitle": "LoadCell_Pakan"
  },
  {
    "type": "post",
    "url": "/api/v2/loadcellpakan/delete/:id",
    "title": "Delete Loadcell Pakan Measurement",
    "version": "0.2.0",
    "name": "Delete-BeratPakan",
    "group": "LoadCell_Pakan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID data berat pakan.</p>"
          }
        ]
      }
    },
    "description": "<p>Menghapus data berat pakan.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/loadcellPakan.js",
    "groupTitle": "LoadCell_Pakan"
  },
  {
    "type": "post",
    "url": "/api/v2/loadcellpakan/edit/:id",
    "title": "Edit Loadcell Pakan Measurement",
    "version": "0.2.0",
    "name": "Edit-BeratPakan",
    "group": "LoadCell_Pakan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID data berat pakan.</p>"
          }
        ]
      }
    },
    "body": [
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "weight",
        "description": "<p>Berat pakan [gram].</p>"
      }
    ],
    "description": "<p>Mengubah data berat pakan. { &quot;berat&quot;: 1500 }</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"success\",\n \"data\": {\n     \"id\": 1,\n     \"berat_pakan\": \"1500.24\",\n     \"createdAt\": \"2024-09-10T10:50:51.149Z\",\n     \"updatedAt\": \"2024-09-10T10:50:51.149Z\",\n     \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\",\n     \"sensor_id\": 3\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/loadcellPakan.js",
    "groupTitle": "LoadCell_Pakan"
  },
  {
    "type": "get",
    "url": "/api/v2/loadcellpakan",
    "title": "Get All Loadcell Pakan Entry",
    "version": "0.2.0",
    "name": "Get-All-BeratPakan",
    "group": "LoadCell_Pakan",
    "description": "<p>Mengambil semua data berat badan.</p>",
    "query": [
      {
        "group": "Query",
        "type": "Number",
        "optional": false,
        "field": "page",
        "description": "<p>Halaman paginasi</p>"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"success\",\n \"pagination\": {\n     \"totalPages\": 3,\n     \"currentPage\": 1\n },\n \"data\": {\n     \"count\": 12,\n     \"rows\": [\n         {\n             \"id\": 12,\n             \"berat_pakan\": 156.24,\n             \"createdAt\": \"2024-09-10T10:13:15.619Z\",\n             \"updatedAt\": \"2024-09-10T10:13:15.619Z\",\n             \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\",\n             \"nama_domba\": \"John\",\n             \"jenis_kelamin\": \"Jantan\"\n         },\n         {\n             \"id\": 11,\n             \"berat_pakan\": 156.24,\n             \"createdAt\": \"2024-09-10T08:48:38.791Z\",\n             \"updatedAt\": \"2024-09-10T08:48:38.791Z\",\n             \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\",\n             \"nama_domba\": \"John\",\n             \"jenis_kelamin\": \"Jantan\"\n         },\n         ...\n         ]\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/loadcellPakan.js",
    "groupTitle": "LoadCell_Pakan"
  },
  {
    "type": "get",
    "url": "/api/v2/loadcellpakan",
    "title": "Get Data Graph Entry",
    "version": "0.2.0",
    "name": "Get-Graph-BeratPakan",
    "group": "LoadCell_Pakan",
    "description": "<p>Mengambil data dari tabel loadcellpakan sesuai dengan chip_id.</p>",
    "query": [
      {
        "group": "Query",
        "type": "Number",
        "optional": false,
        "field": "page",
        "description": "<p>Halaman paginasi</p>"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"success\",\n  \"pagination\": {\n    \"totalPages\": 1,\n    \"currentPage\": 1\n  },\n  \"data\": {\n    \"count\": 2,\n    \"rows\": [\n      {\n        \"id\": 1,\n        \"weight\": 100.12,\n        \"createdAt\": \"2024-01-10T20:14:00.000Z\",\n        \"updatedAt\": \"2024-01-10T20:14:00.000Z\"\n      },\n      {\n        \"id\": 2,\n        \"weight\": 150.12,\n        \"createdAt\": \"2024-01-10T20:14:00.000Z\",\n        \"updatedAt\": \"2024-01-10T20:14:00.000Z\"\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/loadcellPakan.js",
    "groupTitle": "LoadCell_Pakan"
  },
  {
    "type": "get",
    "url": "/api/v2/loadcellpakan/:id",
    "title": "Get Loadcell Pakan Measurement by ID",
    "version": "0.2.0",
    "name": "Get-One-BeratPakan-Data",
    "group": "LoadCell_Pakan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID data berat pakan</p>"
          }
        ]
      }
    },
    "description": "<p>Mengambil satu data berat pakan</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"message\": \"success\",\n     \"data\": {\n         \"id\": 1,\n         \"berat_pakan\": 1500.12,\n         \"createdAt\": \"2024-08-28T14:30:00.000Z\",\n         \"updatedAt\": \"2024-08-28T14:30:00.000Z\",\n         \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\",\n         \"nama_domba\": \"John\",\n         \"jenis_kelamin\": \"Jantan\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/loadcellPakan.js",
    "groupTitle": "LoadCell_Pakan"
  },
  {
    "type": "post",
    "url": "/api/v2/mpu",
    "title": "Create MPU Entry",
    "version": "0.2.0",
    "name": "Add-MPU-Data",
    "group": "MPU",
    "description": "<p>Menambahkan data mpu.</p>",
    "body": [
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "acc_x",
        "description": "<p>Data MPU.</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "acc_y",
        "description": "<p>Data MPU.</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "acc_z",
        "description": "<p>Data MPU.</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "tinggi",
        "description": "<p>Data MPU.</p>"
      },
      {
        "group": "Body",
        "type": "Boolean",
        "optional": false,
        "field": "kondisi",
        "description": "<p>Data MPU.</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "chip_id",
        "description": "<p>ID chip domba.</p>"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"acc_x\": 123.12,\n \"acc_y\": 456.12,\n \"acc_z\": 789.12,\n \"tinggi\": 21.12,\n \"kondisi\": true,\n \"chip_id\": \"fffffffff-aaaa-4c7e-9b35-7eab6c1d23f2\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   \"acc_x\": 123.12,\n  \"acc_y\": 456.12,\n  \"acc_z\": 789.12,\n  \"tinggi\": 21.12,\n  \"kondisi\": true,\n  \"chip_id\": \"fffffffff-aaaa-4c7e-9b35-7eab6c1d23f2\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/mpu.js",
    "groupTitle": "MPU"
  },
  {
    "type": "post",
    "url": "/mpu/delete/:id",
    "title": "Delete MPU data",
    "version": "0.2.0",
    "name": "Delete-MPU",
    "group": "MPU",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID data MPU.</p>"
          }
        ]
      }
    },
    "description": "<p>Menghapus data MPU.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"MPU data deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/mpu.js",
    "groupTitle": "MPU"
  },
  {
    "type": "post",
    "url": "/mpu/edit/:id",
    "title": "Edit MPU data",
    "version": "0.2.0",
    "name": "Edit-MPU",
    "group": "MPU",
    "description": "<p>Mengubah data MPU.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>MPU data ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"acc_x\": 123.12,\n \"acc_y\": 456.12,\n \"acc_z\": 789.12,\n \"tinggi\": 21.12,\n \"kondisi\": true,\n \"chip_id\": \"fffffffff-aaaa-4c7e-9b35-7eab6c1d23f2\"\n}",
          "type": "json"
        }
      ]
    },
    "body": [
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "acc_x",
        "description": "<p>Data MPU.</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "acc_y",
        "description": "<p>Data MPU.</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "acc_z",
        "description": "<p>Data MPU.</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "tinggi",
        "description": "<p>Data MPU.</p>"
      },
      {
        "group": "Body",
        "type": "Boolean",
        "optional": false,
        "field": "kondisi",
        "description": "<p>Data MPU.</p>"
      },
      {
        "group": "Body",
        "type": "Number",
        "optional": false,
        "field": "chip_id",
        "description": "<p>ID chip domba.</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Updated MPU data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"message\": \"success\",\n     \"data\": {\n         \"id\": 1,\n         \"acc_x\": \"123.12\",\n         \"acc_y\": \"456.12\",\n         \"acc_z\": \"789.12\",\n         \"tinggi\": \"21.12\",\n         \"kondisi\": false,\n         \"createdAt\": \"2024-09-12T01:16:58.080Z\",\n         \"updatedAt\": \"2024-09-12T01:16:58.080Z\",\n         \"chip_id\": \"fffffffff-aaaa-4c7e-9b35-7eab6c1d23f2\",\n         \"sensor_id\": 5\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/mpu.js",
    "groupTitle": "MPU"
  },
  {
    "type": "get",
    "url": "/api/v2/mpu",
    "title": "Get All MPU Data",
    "version": "0.2.0",
    "name": "Get-All-MPU",
    "group": "MPU",
    "description": "<p>Mengambil semua data MPU.</p>",
    "query": [
      {
        "group": "Query",
        "type": "Number",
        "optional": false,
        "field": "page",
        "description": "<p>Halaman paginasi</p>"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"message\": \"success\",\n     \"pagination\": {\n         \"totalPages\": 5,\n         \"currentPage\": 1\n     },\n     \"data\": {\n         \"count\": 25,\n         \"rows\": [\n             {\n                 \"id\": 25,\n                 \"acc_x\": 123.12,\n                 \"acc_y\": 456.12,\n                 \"acc_z\": 789.12,\n                 \"tinggi\": 21.22,\n                 \"kondisi\": true,\n                 \"createdAt\": \"2024-09-11T18:11:10.280Z\",\n                 \"updatedAt\": \"2024-09-11T18:11:10.280Z\",\n                 \"chip_id\": \"fffffffff-aaaa-4c7e-9b35-7eab6c1d23f2\",\n                 \"nama_domba\": \"Jane\",\n                 \"jenis_kelamin\": \"Betina\"\n             },\n             {\n                 \"id\": 24,\n                 \"acc_x\": 123.12,\n                 \"acc_y\": 456.12,\n                 \"acc_z\": 789.12,\n                 \"tinggi\": 21.22,\n                 \"kondisi\": true,\n                 \"createdAt\": \"2024-09-11T18:11:08.629Z\",\n                 \"updatedAt\": \"2024-09-11T18:11:08.629Z\",\n                 \"chip_id\": \"fffffffff-aaaa-4c7e-9b35-7eab6c1d23f2\",\n                 \"nama_domba\": \"Jane\",\n                 \"jenis_kelamin\": \"Betina\"\n             },\n             ...\n         ]\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/mpu.js",
    "groupTitle": "MPU"
  },
  {
    "type": "get",
    "url": "/api/v2/mpu/graph",
    "title": "Get Data Graph Entry",
    "version": "0.2.0",
    "name": "Get-Graph-MPU",
    "group": "MPU",
    "description": "<p>Mengambil data dari tabel MPU sesuai dengan chip_id.</p>",
    "query": [
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "chip_id",
        "description": "<p>ID chip domba.</p>"
      },
      {
        "group": "Query",
        "type": "Number",
        "optional": false,
        "field": "page",
        "description": "<p>Halaman paginasi.</p>"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"message\": \"success\",\n     \"pagination\": {\n         \"totalPages\": 1,\n         \"currentPage\": 1\n     },\n     \"data\": {\n         \"count\": 5,\n         \"rows\": [\n             {\n                 \"id\": 5,\n                 \"acc_x\": 102.12,\n                 \"acc_y\": 20.12,\n                 \"acc_z\": 50.12,\n                 \"tinggi\": 10.12,\n                 \"kondisi\": false,\n                 \"createdAt\": \"2024-07-17T14:30:00.000Z\",\n                 \"updatedAt\": \"2024-07-17T14:30:00.000Z\"\n             },\n             {\n                 \"id\": 4,\n                 \"acc_x\": 102.12,\n                 \"acc_y\": 20.12,\n                 \"acc_z\": 50.12,\n                 \"tinggi\": 10.12,\n                 \"kondisi\": false,\n                 \"createdAt\": \"2024-07-24T14:30:00.000Z\",\n                 \"updatedAt\": \"2024-07-24T14:30:00.000Z\"\n             },\n             ...\n         ]\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/mpu.js",
    "groupTitle": "MPU"
  },
  {
    "type": "get",
    "url": "/mpu/:id",
    "title": "Get MPU data by ID",
    "version": "0.2.0",
    "name": "Get-One-MPU",
    "group": "MPU",
    "description": "<p>Mengambil data mpu.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID data MPU.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Data MPU.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"message\": \"success\",\n     \"data\": {\n         \"id\": 1,\n         \"acc_x\": 123.12,\n         \"acc_y\": 456.12,\n         \"acc_z\": 789.12,\n         \"tinggi\": 21.12,\n         \"kondisi\": false,\n         \"createdAt\": \"2024-09-12T01:16:58.080Z\",\n         \"updatedAt\": \"2024-09-12T01:16:58.080Z\",\n         \"chip_id\": \"fffffffff-aaaa-4c7e-9b35-7eab6c1d23f2\",\n         \"nama_domba\": \"Jane\",\n         \"jenis_kelamin\": \"Betina\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/mpu.js",
    "groupTitle": "MPU"
  },
  {
    "type": "get",
    "url": "/api/v2/rfid/get",
    "title": "Get latest scan",
    "version": "0.2.0",
    "name": "Get-Latest-RFID",
    "group": "RFID",
    "description": "<p>Menyimpan hasil scan RFID.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"success\",\n \"data\": {\n     \"id\": 3,\n     \"is_paired\": false,\n     \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\",\n     \"createdAt\": \"2024-09-10T11:43:25.783Z\",\n     \"updatedAt\": \"2024-09-10T11:43:25.783Z\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/rfid.js",
    "groupTitle": "RFID"
  },
  {
    "type": "get",
    "url": "/api/v2/rfid/scan/:chip_id",
    "title": "Add RFID Scan Entry",
    "version": "0.2.0",
    "name": "Scan-RFID",
    "group": "RFID",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chip_id",
            "description": "<p>RFID chip ID.</p>"
          }
        ]
      }
    },
    "description": "<p>Menyimpan hasil scan RFID.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"message\": \"success\",\n \"data\": {\n     \"id\": 2,\n     \"is_paired\": false,\n     \"chip_id\": \"7a2d1e6b-8c4f-4e1b-9d6a-3b2c7f9e4d1f\",\n     \"createdAt\": \"2024-09-10T11:39:35.241Z\",\n     \"updatedAt\": \"2024-09-10T11:39:35.241Z\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/rfid.js",
    "groupTitle": "RFID"
  },
  {
    "type": "post",
    "url": "/api/v2/sensor",
    "title": "Create Sensor",
    "version": "0.2.0",
    "name": "Create-Sensor",
    "group": "Sensor",
    "description": "<p>Menambahkan sensor baru.</p>",
    "parameter": {
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n \"nama_sensor\": \"mpu\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n  \"message\": \"Sensor created successfully\",\n  \"data\": {\n    \"id\": 1,\n    \"nama_sensor\": \"Sensor 1\",\n    \"createdAt\": \"2024-01-10T20:14:00.000Z\",\n    \"updatedAt\": \"2024-01-10T20:14:00.000Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/sensor.js",
    "groupTitle": "Sensor"
  },
  {
    "type": "post",
    "url": "/api/v2/sensor/delete/:id",
    "title": "Delete Sensor",
    "version": "0.2.0",
    "name": "Delete-Sensor",
    "group": "Sensor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID data sensor.</p>"
          }
        ]
      }
    },
    "description": "<p>Menghapus item sensor.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Sensor deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/sensor.js",
    "groupTitle": "Sensor"
  },
  {
    "type": "post",
    "url": "/api/v2/sensor/edit/:id",
    "title": "Edit Sensor",
    "version": "0.2.0",
    "name": "Edit-Sensor",
    "group": "Sensor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID data sensor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body:",
          "content": "{\n \"nama_sensor\": \"aht\"\n }",
          "type": "json"
        }
      ]
    },
    "description": "<p>Mengubah nama sensor.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Sensor updated successfully\",\n  \"data\": {\n    \"id\": 1,\n    \"nama_sensor\": \"Updated Sensor\",\n    \"createdAt\": \"2024-01-10T20:14:00.000Z\",\n    \"updatedAt\": \"2024-01-10T20:14:00.000Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/sensor.js",
    "groupTitle": "Sensor"
  },
  {
    "type": "get",
    "url": "/api/v2/sensor",
    "title": "Get All Sensors",
    "version": "0.2.0",
    "name": "Get-All-Sensor",
    "group": "Sensor",
    "description": "<p>Ambil semua daftar sensor.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"success\",\n  \"pagination\": {\n    \"totalPages\": 1,\n    \"currentPage\": 1\n  },\n  \"data\": {\n    \"count\": 2,\n    \"rows\": [\n      {\n        \"id\": 1,\n        \"nama_sensor\": \"Kamera\",\n        \"createdAt\": \"2024-01-10T20:14:00.000Z\",\n        \"updatedAt\": \"2024-01-10T20:14:00.000Z\"\n      },\n      {\n        \"id\": 2,\n        \"nama_sensor\": \"Loadcell Badan\",\n        \"createdAt\": \"2024-01-10T20:14:00.000Z\",\n        \"updatedAt\": \"2024-01-10T20:14:00.000Z\"\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/sensor.js",
    "groupTitle": "Sensor"
  },
  {
    "type": "get",
    "url": "/api/v2/sensor/:id",
    "title": "Get Sensor by ID",
    "version": "0.2.0",
    "name": "Get-One-Sensor",
    "group": "Sensor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID data sensor.</p>"
          }
        ]
      }
    },
    "description": "<p>Get a specific sensor entry by ID.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"success\",\n  \"data\": {\n    \"id\": 1,\n    \"nama_sensor\": \"Sensor 1\",\n    \"createdAt\": \"2024-01-10T20:14:00.000Z\",\n    \"updatedAt\": \"2024-01-10T20:14:00.000Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/sensor.js",
    "groupTitle": "Sensor"
  }
] });
