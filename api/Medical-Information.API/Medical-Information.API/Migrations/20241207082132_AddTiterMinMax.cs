﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Medical_Information.API.Migrations
{
    /// <inheritdoc />
    public partial class AddTiterMinMax : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "TiterMax",
                table: "Analytes",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TiterMin",
                table: "Analytes",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AdminQCLots",
                keyColumn: "AdminQCLotID",
                keyValue: new Guid("bbb59aca-6c27-424c-852f-21656a88f449"),
                columns: new[] { "FileDate", "OpenDate" },
                values: new object[] { new DateTime(2024, 12, 7, 2, 21, 31, 761, DateTimeKind.Local).AddTicks(5685), new DateTime(2024, 12, 7, 2, 21, 31, 761, DateTimeKind.Local).AddTicks(5705) });

            migrationBuilder.UpdateData(
                table: "Analytes",
                keyColumn: "AnalyteID",
                keyValue: new Guid("46baac82-7390-4139-b4ae-9c284de63860"),
                columns: new[] { "TiterMax", "TiterMin" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Analytes",
                keyColumn: "AnalyteID",
                keyValue: new Guid("6a14f038-4f68-488a-93bb-0f1c9f33f09a"),
                columns: new[] { "TiterMax", "TiterMin" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Analytes",
                keyColumn: "AnalyteID",
                keyValue: new Guid("6e52026c-5cc5-4175-b476-29a1f5bd4c02"),
                columns: new[] { "TiterMax", "TiterMin" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Analytes",
                keyColumn: "AnalyteID",
                keyValue: new Guid("9cf3ff8a-208d-4b05-b108-3e4fb82f2b7f"),
                columns: new[] { "TiterMax", "TiterMin" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Analytes",
                keyColumn: "AnalyteID",
                keyValue: new Guid("9d5b1c89-7b7e-4c1f-b0c7-1d8b1d4f3587"),
                columns: new[] { "TiterMax", "TiterMin" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Analytes",
                keyColumn: "AnalyteID",
                keyValue: new Guid("a50e49c0-c80d-4347-a2d4-186f22c7bb3f"),
                columns: new[] { "TiterMax", "TiterMin" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Analytes",
                keyColumn: "AnalyteID",
                keyValue: new Guid("b05e9c30-3f03-4fad-a703-ad532bd39ae5"),
                columns: new[] { "TiterMax", "TiterMin" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Analytes",
                keyColumn: "AnalyteID",
                keyValue: new Guid("b886f8d0-798d-4c0f-aa91-4e5b2f6f0a07"),
                columns: new[] { "TiterMax", "TiterMin" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Analytes",
                keyColumn: "AnalyteID",
                keyValue: new Guid("ce5ba2a7-6543-4f81-b906-64599b274f97"),
                columns: new[] { "TiterMax", "TiterMin" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Analytes",
                keyColumn: "AnalyteID",
                keyValue: new Guid("d614a66d-fc2d-4518-bb0f-1787ed48f5c1"),
                columns: new[] { "TiterMax", "TiterMin" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Analytes",
                keyColumn: "AnalyteID",
                keyValue: new Guid("e01c6f52-07ab-4995-88de-bb83072aef5a"),
                columns: new[] { "TiterMax", "TiterMin" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Analytes",
                keyColumn: "AnalyteID",
                keyValue: new Guid("e783a56d-5fc4-4a8e-8509-aa99b0e64b1c"),
                columns: new[] { "TiterMax", "TiterMin" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Analytes",
                keyColumn: "AnalyteID",
                keyValue: new Guid("f3033c25-0d20-41db-89a9-69b6bb66f2d2"),
                columns: new[] { "TiterMax", "TiterMin" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Analytes",
                keyColumn: "AnalyteID",
                keyValue: new Guid("f5012c5e-4d05-46ff-b6fd-4c53789bafdb"),
                columns: new[] { "TiterMax", "TiterMin" },
                values: new object[] { null, null });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TiterMax",
                table: "Analytes");

            migrationBuilder.DropColumn(
                name: "TiterMin",
                table: "Analytes");

            migrationBuilder.UpdateData(
                table: "AdminQCLots",
                keyColumn: "AdminQCLotID",
                keyValue: new Guid("bbb59aca-6c27-424c-852f-21656a88f449"),
                columns: new[] { "FileDate", "OpenDate" },
                values: new object[] { new DateTime(2024, 12, 5, 20, 10, 42, 147, DateTimeKind.Local).AddTicks(9221), new DateTime(2024, 12, 5, 20, 10, 42, 147, DateTimeKind.Local).AddTicks(9290) });
        }
    }
}
