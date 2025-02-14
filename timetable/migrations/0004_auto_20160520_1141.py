"""
Copyright (C) 2017 Semester.ly Technologies, LLC

Semester.ly is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Semester.ly is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
"""

# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-05-20 16:41


from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("timetable", "0003_auto_20160519_1920"),
    ]

    operations = [
        migrations.AddField(
            model_name="section",
            name="waitlist_size",
            field=models.IntegerField(default=-1),
        ),
        migrations.AlterField(
            model_name="course",
            name="campus",
            field=models.CharField(default=b"", max_length=300),
        ),
        migrations.AlterField(
            model_name="course",
            name="description",
            field=models.TextField(default=b""),
        ),
        migrations.AlterField(
            model_name="course",
            name="exclusions",
            field=models.TextField(default=b""),
        ),
        migrations.AlterField(
            model_name="course",
            name="prerequisites",
            field=models.TextField(default=b""),
        ),
        migrations.AlterField(
            model_name="course",
            name="unstopped_description",
            field=models.TextField(default=b""),
        ),
        migrations.AlterField(
            model_name="evaluation",
            name="summary",
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name="section",
            name="waitlist",
            field=models.IntegerField(default=-1),
        ),
    ]
